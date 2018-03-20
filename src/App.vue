<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Marked.js</router-link> |
      <router-link to="/remarkable">Remarkable.js</router-link>
      Choose one you like
    </div>
    <router-view/>
  </div>
</template>

<style>
  #nav {
    font-size: 1.2rem;
    margin-bottom: 3px;
  }
</style>
