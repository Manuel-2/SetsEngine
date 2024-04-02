<script>
import HeaderButton from "./HeaderButton.vue";
// import SetsEnineIconSvg from "../assets/Icons/SetsEngineIcon.svg";

export default {
  name: "MainHeader",
  components: {
    HeaderButton,
  },
};
</script>

<template>
  <div class="header">
    <div class="header__part">
      <img
        class="header__app-logo"
        src="../assets/Icons/SetsEngineIcon.svg"
        alt="setsIcon"
      />
      <h1 class="header__title">Sets Engine</h1>
    </div>
    <div class="header__part">
      <HeaderButton
        iconSrc="https://pic.onlinewebfonts.com/thumbnails/icons_564173.svg"
      />
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: var(--header-height);
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--header-color);
  box-shadow: 0px 5px 15px -7px rgba(0, 0, 0, 0.1);
}

.header__part {
  height: 100%;
  display: flex;
  align-items: center;
}

.header__app-logo{
  height: 80%;
}
</style>
