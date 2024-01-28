<template>
  <header-cmp></header-cmp>

  <h1>Hello {{ name }}, Welcome To Home Page</h1>
 <div class="content">
     <table id="table">
    <caption>
      List of restaurants
    </caption>
    <thead>
      <tr >
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurants" :key="item.id">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
      </tr>
    
    </tbody>
  </table>
 </div>
</template>
<script>
import axios from "axios";
import HeaderCmp from "./HeaderCmp.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderCmp,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.name = JSON.parse(user).name; // Parse the user object and access its 'name' property
    }
    let result = await axios.get("http://localhost:9000/restaurant");
    this.restaurants = result.data;
  },
};
</script>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}
#table td, #table th {
    width:160px;
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even){background-color: #f2f2f2;}

#table tr:hover {background-color: #ddd;}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #69052a;
  color: white;
}
</style>
