<template>
  <div >
    <img alt="logo" class="logo" src="../assets/restaurant-logo.png" />

  <h1>Login</h1>
  </div>
  <form>
    <div class="form-control">
      <input
        id="email"
        name="email"
        type="text"
        v-model="email"
        placeholder="Enter your Email"
      />
    </div>
    <div class="form-control">
      <input
        id="password"
        name="password"
        type="number"
        v-model="password"
        placeholder="Enter your Password"
      />
    </div>
    <div>
      <button @click="loggingIn">Submit</button>
    </div>
    <router-link to="/sign-up">Sign Up</router-link>
  </form>
  
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loggingIn(event) {
      event.preventDefault();
      let result = await axios.get(
        `http://localhost:9000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
