
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/HomeView">Home</router-link></li>
        <li><router-link to="/Computed">Computed</router-link></li>
        <li><router-link to="/ContactosView">Contactos</router-link></li>
      </ul>
    </nav>
  </div>
  <router-view></router-view>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 1rem;
}

a {
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: #ddd;
}
</style>
