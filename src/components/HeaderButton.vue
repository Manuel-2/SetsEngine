<script>
export default {
  name: "HeaderButton",
  props: ["iconSrc"],
};
</script>

<template>
  <button type="button" class="header-button">
    <img src="{{iconSrc}}" />
  </button>
</template>

<style scoped>
.header-button {
  width: 40px;
  height: 40px;

  img {
    width: 100%;
  }
}
</style>
