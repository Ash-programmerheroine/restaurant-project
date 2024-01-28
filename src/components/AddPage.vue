<template>
    <header-cmp></header-cmp>

   <h1>Hello, Welcome To Add Restaurant Page</h1> 
  <form>
    <input type="text" placeholder="Enter your name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter your address" v-model="restaurant.address" name="address">
    <input type="text" placeholder="Enter your contact" v-model="restaurant.contact" name="contact">
    <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script >
import HeaderCmp from './HeaderCmp.vue';
export default{
    name:'AddPage',
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
    addRestaurant(){
        console.warn(this.restaurant)
    }
  },
    mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
        this.$router.push({ name: "SignUp" });
    }
  }
};
</script>
