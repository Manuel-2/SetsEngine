<script>
export default {
  name:"MathInput" ,
  methods: {
    readInput(event){
      event.preventDefault();
      let rawInputData = new FormData(event.target);
      console.log(rawInputData);
    }
  },
}
</script>

<template>
  <div class="playground__inputs">
        <div class="playground__main-input">
          <form @:submit=readInput>
          <input type="text" name="mainInput" placeholder="A&#8746;B" />
          <input type="submit" value="go"/>
          </form>
        </div>
        <div class="playground__keyboard">
          <button class="playground__key">&#8746;</button>
          <button class="playground__key">&#8745;</button>
          <button class="playground__key">-</button>
          <button class="playground__key">&#916;</button>
          <button class="playground__key">x&#39;</button>
        </div>
      </div>
</template>

<style scoped>
  .playground__inputs{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    min-width:240px;
    max-width:400px;

   .playground__main-input{
     width:100%;

     input[type='text']{
       padding-left:10px;
       height:30px;
       width:90%;
       border: 1px solid var(--tertiary-color);
       border-radius: 5px 0px 0px 5px;
     }

     input[type='submit']{
      width:10%;
      height:30px;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid var(--tertiary-color);
      background-color:var(--positive-color);
     }
   }
  
  .playground__keyboard{
    width:100%;
    margin-top:20px;
    display:flex;
    justify-content:space-between;

    .playground__key{
      width: 40px;
      height: 40px;
      font-size:20px;
    }
  }

  }
</style>
