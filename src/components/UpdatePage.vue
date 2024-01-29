<template>
    <header-cmp></header-cmp>

   <h1>Hello, Welcome To Update Restaurant Page</h1> 
   <form>
    <input type="text" placeholder="Enter your name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter your address" v-model="restaurant.address" name="address">
    <input type="text" placeholder="Enter your contact" v-model="restaurant.contact" name="contact">
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script >
import axios from "axios";
import HeaderCmp from './HeaderCmp.vue';
export default{
    name:'UpdatePage',
    components:{
        HeaderCmp,
    },
    data() {
    return {
      restaurant:{
        name: "",
      address: "",
      contact: "",
      }
    };
  },
  methods:{
    async updateRestaurant(){
    
     let result = await axios.put("http://localhost:9000/restaurant/"+this.$route.params.id, {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
          
        });
        if (result.status == 200) {
          
          this.$router.push({ name: "HomePage" });
        }
    }
  },
    async mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
        this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get("http://localhost:9000/restaurant/"+this.$route.params.id);
    // console.warn(this.$route.params.id)
    // console.warn(result.data)
    this.restaurant =result.data
  }
};
</script>
