<template>
  <div id="app">
    <img src="./assets/pexels-pixabay-277253.jpg" />

    <div id="wrap">
      <div id="mainmenu">
        <div class="logo"></div>
        <router-link to="/"> FOO </router-link>

        <router-link to="/about"> BAR </router-link>
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
  /** logo to be floating on the left side of the screen*/
  float: left;
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
  flex-direction: row-reverse;
  background-color: rgba(36, 38, 41, 0.4);
}
#mainmenu > a {
  width: 100px;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  text-decoration: none;
  color: white;
}

#mainmenu > a:hover {
  color: black;
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
  margin-top: 60px;
  font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
}
</style>
