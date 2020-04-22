<template>
  <div id="app">
    <app-header/>
    <div id="app-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    color: $color-primary;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #app-body {
    overflow: auto;
    width:100%;
    margin: 0 auto;
    height: 100%;
  }

  a {
    color: $color-primary;
    text-decoration: none;
  }
</style>
