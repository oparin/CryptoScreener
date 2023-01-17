<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark header-menu-fixed">
    <router-link to="/" class="navbar-brand">CryptoScreener</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link">Add</router-link>
      </li>
    </div>
  </nav>

  <CryptoList/>
</template>

<script>

import CryptoList from './components/cryptolist/CryptoList';

export default {
  name: 'App',
  components: {
    CryptoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 0px;
}
.header-menu-fixed {
  position: fixed;
  width: 100%;
  z-index: 99999;
}
</style>
