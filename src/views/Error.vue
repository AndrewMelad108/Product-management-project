<template>
  <div class="error">
      <el-row type="flex" justify="center" class="title">
          this page not found
      </el-row>
  </div>
</template>

<script>
export default {
    name:"error",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
.error{
    background: url("../assets/error.jpg") no-repeat fixed ;
    height: 100vh;
    background-size:cover;
    opacity: 0.8;
    text-align: center;
    text-transform: capitalize;
    .title{
        line-height: 100vh;
        color: black;
        font-size: 70px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
       
    }

}
</style>