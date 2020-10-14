<template>
  <div id="app">
    <img src="./assets/pexels-pixabay-277253.jpg" />

    <div id="wrap">
      <div id="mainmenu">
        <router-link to="/" class="logo"> HD </router-link>
        <router-link to="/"> DABBA </router-link>
        <router-link to="/about"> TESTIMONY </router-link>
        <router-link to="/about"> SERVICES </router-link>
        <router-link to="/about"> ABOUT US </router-link>
        <router-link to="/about"> CONTACT </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  width: 50% !important;
}
.content {
  filter: blur(1px);
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  font-family: "Cinzel", serif;
}
#mainmenu {
  display: flex;
  letter-spacing: 0.1em;
  background-color: rgba(36, 38, 41, 0.4);
}
#mainmenu > a {
  width: 20%;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  text-decoration: none;
  color: white;
}

#mainmenu > a:hover {
  color: darkgrey;
  font-size: 21px;
}

#wrap {
  position: relative;
  z-index: 2;
  font-size: 15px;
  color: orange;
}
img {
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  position: absolute;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
}
</style>
