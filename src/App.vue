<template>
  <div id="app">
    <app-header/>
    <router-view/>
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
    padding: 40px 20px 20px;
    width:100%;
    max-width: $max-width;
    margin: 0 auto;
    height: 100%;
    @include mobile {
      padding-top: 20px;
    }
  }

  a {
    color: $color-primary;
    text-decoration: none;
  }
</style>
