<template>
  <img alt="logo" class="logo" src="../assets/restaurant-logo.png" />

  <h1>Sign Up</h1>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="name" />
    </div>
    <div class="form-control">
      <label for="email">Your Email</label>
      <input id="user-email" name="user-email" type="text" v-model="email" />
    </div>
    <div class="form-control">
      <label for="age">Your Password</label>
      <input id="password" name="password" type="number" v-model="password" />
    </div>
    <div>
      <button @click="submitForm">Save Data</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm(event) {
     event.preventDefault()
      console.log(
        "Username:",
        this.name,
        "User email:",
        this.email,
        "User password:",
        this.password
      );

      try {
        let result = await axios.post("http://localhost:9000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data)); 
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style>
.logo {
  width: 80px;
}
form {
  margin: 2rem auto;
  max-width: 20rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}
input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid#69052A;
}
button {
  font: inherit;
  border: 1px solid #69052a;
  background-color: #ffc100;
  color: #fff;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #69052a;
  background-color: #69052a;
}
</style>
