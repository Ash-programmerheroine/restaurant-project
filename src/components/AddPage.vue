<template>
  <header-cmp></header-cmp>

  <h1>Hello, Welcome To Add Restaurant Page</h1>
  <form>
    <input
      type="text"
      placeholder="Enter your name"
      v-model="restaurant.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Enter your address"
      v-model="restaurant.address"
      name="address"
    />
    <input
      type="text"
      placeholder="Enter your contact"
      v-model="restaurant.contact"
      name="contact"
    />
    <button type="button" @click="addRestaurant">Add New Restaurant</button>
  </form>
</template>
<script>
import axios from "axios";
import HeaderCmp from "./HeaderCmp.vue";
export default {
  name: "AddPage",
  components: {
    HeaderCmp,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
     
      try {
        let result = await axios.post("http://localhost:9000/restaurant", {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,

        });
        console.log(result)
        if (result.status === 201) {
          
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
