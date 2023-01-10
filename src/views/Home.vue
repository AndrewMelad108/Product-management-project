<template>
  <div class="home">
    <div class="layout-content">
      <h1 class="title">restaurant</h1>
      <p class="info">" best in the city "</p>
      <hr class="line" />
    </div>
    <about/>
     <Pricing/>
  </div>
</template>

<script>
import about from "../components/home-components/about.vue"
import Pricing from "../components/home-components/Pricing.vue"
export default {
  data() {
    return {
      
    };
  },
  components:{
    about,
    Pricing
  }
};
</script>

<style scoped lang="scss">
.home {
  margin: 0;
  
  min-height: 1000px;
  .layout-content {
    padding: 0;
    margin: 0;
    text-align: center;
    background: url("../assets/home.jpg") no-repeat;
    background-size: cover;
    min-height: 100%;
    width: 100%;
    height: 100vh;
    .title {
      font-size: 500%;
      padding-top: 15%;
      text-transform: capitalize;
      color: wheat;
      letter-spacing: 0.5rem;
      margin: 0;
    }
    .info {
      font-size: 35px;
      text-transform: capitalize;
      padding: 1% 0;
      color: #ff8303;
      letter-spacing: 1.8;
    }
    .line {
      width: 60%;
    }
  }
  
}
</style>
