<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
      <router-link to="/" class="navbar-brand">VUE CRUD</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Users List</router-link>
        </li>
        
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'San Francisco', Helvetica, Arial, san-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
