<template>
  <div class="nav">
    <a href="">
      <img alt="logo" class="logo" src="../assets/restaurant-logo.png"
    /></a>
   <div>
    <router-link to="/">Home</router-link>
    <router-link  to="/add-page">Add Restaurant</router-link>
    <router-link  to="/update-page">Update Restaurant</router-link>
    <a @click="logOut" href="">Logout</a>
   </div>
  </div>
</template>
<script>
export default {
  name: "HeaderCmp",
  methods:{
    logOut(){
        localStorage.clear();
    }
  }
};
</script>
<style scoped>
.nav {
  background-color: #69052a;
  padding: 5px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.nav a {
  color: #ffc100;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 14px;
  margin-right: 4px;
}
.nav a:hover{
    color:#fff
}
.logo {
  width: 40px;
}
.nav .logo {
  text-align: left;
  padding: 0;
}
</style>
