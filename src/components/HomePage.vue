<template>
  <header-cmp></header-cmp>

  <h1>Hello {{ name }}, Welcome To Home Page</h1>
</template>
<script>
import HeaderCmp from "./HeaderCmp.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
    };
  },
  components: {
    HeaderCmp,
  },
mounted() {
  let user = localStorage.getItem("user-info");

  if (!user) {
    this.$router.push({ name: "SignUp" });
  } else {
    this.name = JSON.parse(user).name; // Parse the user object and access its 'name' property
  }
},

};
</script>
