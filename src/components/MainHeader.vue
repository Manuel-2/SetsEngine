<script>
  import HeaderButton from "./HeaderButton.vue"

export default {
  name:'MainHeader',
  components:{
    HeaderButton 
  }
}
</script>

<template>
  <div class='header'>
    <div class='header__part '>
      <h1 class="header__title">
      Sets Engine 
      </h1>
    </div>
    <div class='header__part'>
      <HeaderButton iconSrc='https://pic.onlinewebfonts.com/thumbnails/icons_564173.svg'/>
    </div> 
  </div>
</template>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: var(--header-color);
  } 

  .header__part{
    height:100%;
    display:flex;
    align-items: center;
  } 
</style>
