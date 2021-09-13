<template>
  <div>
      <h1>
          
      </h1> 
      <HelloWorld msg="ลูกค้า (VIP)"/>
      <HelloWorld msg="ลูกค้า (ระดับ 1)"/>
      <HelloWorld msg="ลูกค้า (ระดับ 2)"/>
      <HelloWorld msg="ลูกค้า (ระดับ 3)"/>

  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";


export default {

components:{
HelloWorld
}
}
</script>

<style>

</style>