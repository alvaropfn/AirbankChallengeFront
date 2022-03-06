<script setup lang="ts">
import { useRouter } from "vue-router";

const navBack = null;
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <a-page-header
    class="demo-page-header"
    style="border: 1px solid rgb(235, 237, 240)"
    title="Airbank"
    sub-title="Manage your business finances from one place"
    @back="navBack"
  >
    <template #extra>
      <router-link to="/transactions">
        <a-button key="2">Transactions</a-button>
      </router-link>
      <router-link to="/">
        <a-button key="1" type="primary">Home</a-button>
      </router-link>
    </template>
  </a-page-header>
  <main>
    <Router-view />
  </main>
  <footer>
    <p>
      <strong>Made by: </strong
      ><a href="http://" target="_blank" rel="">Alvaropfn</a>
    </p>
    <p>This site is a not real, just a piece of contest</p>
  </footer>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2em;
  background: #1890ff;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  padding-left: 4em;
  padding-right: 4em;
}

footer a {
  text-decoration: underline;
  color: aliceblue;
}
</style>
