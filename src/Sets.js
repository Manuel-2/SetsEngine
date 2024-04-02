const operators = {
  u: union,
  n: intersection,
  "-": diference,
};

// const sets = {
//   A: [1, 2, 3, 4, 5],
//   B: [4, 5, 6],
//   C: [7, 8, 9],
//   D: [10, 11, 12],
// };

function parse(strExpression, sets) {
  strExpression = cleanParentesis(strExpression);
  let node = {};
  if (strExpression.length == 1 || strExpression.length == 2) {
    node.type = "set";
    let key = strExpression[0] == "(" ? strExpression[1] : strExpression[0];
    node.key = key;
    node.value = sets[key];
    return node;
  }
  let globalOperator = tryFindGlobalOperator(strExpression);
  node.type = "operation";
  node.operator = globalOperator.operator;
  let i = globalOperator.index;
  node.left = parse(strExpression.slice(0, i));
  node.right = parse(strExpression.slice(i + 1));
  return node;
}

function evaluate(node) {
  let result;
  if (node.type == "set") {
    result = node.value;
  } else if (node.type == "operation") {
    let left = evaluate(node.left);
    let right = evaluate(node.right);
    let operation = operators[node.operator];
    result = operation(left, right);
  }
  return result;
}

function isAnOperator(char) {
  return Object.keys(operators).includes(char);
}

function cleanParentesis(input) {
  let result = "";
  let { length } = input;
  for (let i = 0, clear = 0; i < length; i++) {
    let char = input[i];
    if (char == "(" && !isAnOperator(input[i - 1])) {
      clear++;
    } else if (char == ")" && clear > 0) {
      clear--;
    } else {
      result += char;
    }
  }
  return result;
}

function tryFindGlobalOperator(strExpression) {
  let result = {
    finded: false,
  };
  for (let i = strExpression.length - 1, level = 0; i >= 0; i--) {
    let char = strExpression[i];
    if (char == ")") level++;
    else if (char == "(") level--;
    if (isAnOperator(char) && level == 0) {
      result.finded = true;
      result.operator = char;
      result.index = i;
      break;
    }
  }
  return result;
}

// funtions
function diference(a, b, simetric = false) {
  let result = [];
  a.forEach((element) => {
    if (!b.includes(element)) {
      result.push(element);
    }
  });
  if (simetric) {
    let BdiffA = diference(b, a);
    result = result.concat(BdiffA);
  }
  result = sort(result);
  return result;
}

function intersection(a, b) {
  let result = [];
  a.forEach((element) => {
    if (b.includes(element)) {
      result.push(element);
    }
  });
  result = sort(result);
  return result;
}

function union(a, b) {
  let result = [];
  let addIfNew = (element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  };
  a.forEach(addIfNew);
  b.forEach(addIfNew);
  result = sort(result);
  return result;
}

function sort(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

export { evaluate, parse };
