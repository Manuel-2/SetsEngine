<script>
import MainHeader from "./components/MainHeader.vue";
import MathInput from "./components/MathInput.vue";

export default {
  data(){
    return {
      sets:[]
    }
  },
  name: "App",
  components: {
    MainHeader,
    MathInput,
  },
};
</script>

<template>
  <MainHeader></MainHeader>
  <div class="playground">
    <aside class="playground__info-panel">
      <h2>Sets</h2>
      <hr />
    </aside>
    <main>
      <MathInput/>
      <div class="playground__resutls"></div>
    </main>
  </div>
</template>

<style scoped>
.playground {
  display: flex;
  height: calc(100vh - var(--header-height));

  .playground__info-panel {
    width: 35%;
    min-width: 100px;
    max-width: 450px;
    max-height: 100%;
    padding: 15px 10px;
    background-color: var(--primary-color);
    border-right: 2px solid var(--secondary-color);
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
}
</style>
