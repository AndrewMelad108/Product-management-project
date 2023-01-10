<template>
   <div class="about" id="about">
      <el-row >
        <el-col :lg="12" :md="12" :xs="12" :sm="24" class="about-content">
          <h1 class="about-title">about us</h1>
          <i class="el-icon-knife-fork icon"></i>
          <p class="about-info">
            Restaurant is a place for simplicity. Good food, good beer, and good
            service. Simple is the name of the game, and we’re good at finding
            it in all the right places, even in your dining experience. We’re a
            small group from Denver, Colorado who make simple food possible.
            Come join us and see what simplicity tastes like.
          </p>
        </el-col>
        <el-col :lg="12" :md="12" :xs="12" :sm="24" class="about-images">
          <el-carousel :interval="2000" type="card" class="slider-images" height="200px">
            <el-carousel-item v-for="image in images" :key="image">
              <!-- <img :src="image" alt=""> -->
              <img :src="image" :alt="image" />
            </el-carousel-item> </el-carousel
        ></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
data(){
  return{
    images: [
        require("../../assets/about-images/food_icon01.jpg"),
        require("../../assets/about-images/food_icon02.jpg"),
        require("../../assets/about-images/food_icon03.jpg"),
        require("../../assets/about-images/food_icon04.jpg"),
      ],
  }
}
}
</script>

<style lang="scss">
.about {
    margin-top: 5%;
    margin-bottom: 8%;
    .about-content {
      .about-title {
        padding: 10px;
        width: 25%;
        border: 1px solid black;
        text-transform: capitalize;
        text-align: center;
        margin: auto;
      }
      .icon {
        text-align: center;
        margin: auto;
        width: 25%;
        padding-top: 7%;
        font-size: 40px;
        margin-left: 38%;
      }
      .about-info {
        text-transform: capitalize;
        margin: 2% 5%;
        line-height: 1.8;
        letter-spacing: 1.2;
        font-size: 20px;
      }
    }
    .about-images {
      padding-top: 10%;
      .slider-images{
        width: 80%;
        padding: 0  !important;
      }
    }
  }
</style>