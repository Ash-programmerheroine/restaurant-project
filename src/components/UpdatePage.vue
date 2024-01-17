<template>
    <header-cmp></header-cmp>

   <h1>Hello, Welcome To Update Restaurant Page</h1> 
   
</template>
<script >
import HeaderCmp from './HeaderCmp.vue';
export default{
    name:'UpdatePage',
    components:{
        HeaderCmp,
    },
    mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
        this.$router.push({ name: "SignUp" });
    }
  }
};
</script>
