<template>
  <div class="display">
    <el-row type="flex" justify="end">
      <router-link to="/add-category" class="addicon"
        ><i class="el-icon-circle-plus"> </i
      ></router-link>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="8" v-for="(categorie, index) in categories" :key="index">
        <el-card>
         <div class="categorieName"> Name: 
           <span v-if="show1" @dblclick="show1 = false" >  {{ categorie.name }}</span>
           <input type="text" v-if="!show1" v-model="categorie.name" @keyup.enter="updateBook(this.$route.params.id,'name', categorie.name)">
         </div>
           <div class="categorieprice">  Price:
           <span v-if="show2" @dblclick="show2 = false">  {{ categorie.price }}</span>
           <input type="text" v-if="!show2" v-model="categorie.price" @keyup.enter="updateBook(this.$route.params.id,'price', categorie.price)">
         </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show1:true,
      show2:true,
      categories: {
        name:''
      },
    };
  },
  methods: {
    updateBook(index,value,item){
       axios
        .put(
          `https://restaurant-e535d-default-rtdb.firebaseio.com/categories.json/${index}/?${item} =${value}`
        ).then((res)=>{
          console.log(res.status)
          if(item =="name"){
            this.show1 = false
          }else{
            this.show2 = false
          }
           if (
            res.data[this.$route.params.id].الحلو &&
            res.data[this.$route.params.id].طواجن
          ) {
            this.name = res.data.name
          }
        })
    },
    getcategories() {
      axios
        .get(
          `https://restaurant-e535d-default-rtdb.firebaseio.com/categories.json`
        )
        .then((res) => {
          if (
            res.data[this.$route.params.id].الحلو &&
            res.data[this.$route.params.id].طواجن
          ) {
            this.categories = res.data[this.$route.params.id].الحلو;
            this.categories.push(res.data[this.$route.params.id].طواجن);
          }

          if (
            res.data[this.$route.params.id].الحلو &&
            res.data[this.$route.params.id].طواجن &&
            res.data[this.$route.params.id].كشري
          ) {
            this.categories = [...res.data[this.$route.params.id].الحلو];
            this.categories.push(...res.data[this.$route.params.id].طواجن);
            this.categories.push(...res.data[this.$route.params.id].كشري);
          }
          if (
            res.data[this.$route.params.id].المقبلات &&
            res.data[this.$route.params.id].ساندوتشات &&
            res.data[this.$route.params.id].لحوم
          ) {
            this.categories = [...res.data[this.$route.params.id].المقبلات];
            this.categories.push(...res.data[this.$route.params.id].ساندوتشات);
            this.categories.push(...res.data[this.$route.params.id].لحوم);
          }
          if (
            res.data[this.$route.params.id].اسماك &&
            res.data[this.$route.params.id].السلطات &&
            res.data[this.$route.params.id].الصوصات
          ) {
            this.categories = [...res.data[this.$route.params.id].اسماك];
            this.categories.push(...res.data[this.$route.params.id].السلطات);
            this.categories.push(...res.data[this.$route.params.id].الصوصات);
          }
          if (
            res.data[this.$route.params.id].اسماك &&
            res.data[this.$route.params.id].السلطات &&
            res.data[this.$route.params.id].الصوصات &&
            res.data[this.$route.params.id].المقبلات
          ) {
            this.categories = [...res.data[this.$route.params.id].اسماك];
            this.categories.push(...res.data[this.$route.params.id].السلطات);
            this.categories.push(...res.data[this.$route.params.id].الصوصات);
            this.categories.push(...res.data[this.$route.params.id].المقبلات);
          }
          if (
            res.data[this.$route.params.id].بطاطس &&
            res.data[this.$route.params.id].بيض &&
            res.data[this.$route.params.id].طعمية &&
            res.data[this.$route.params.id].فول
          ) {
            this.categories = [...res.data[this.$route.params.id].بطاطس];
            this.categories.push(...res.data[this.$route.params.id].بيض);
            this.categories.push(...res.data[this.$route.params.id].طعمية);
            this.categories.push(...res.data[this.$route.params.id].فول);
          }
          if (res.data[this.$route.params.id].بيتزا) {
            this.categories = [...res.data[this.$route.params.id].بيتزا];
          }
          if (res.data[this.$route.params.id].كريب) {
            this.categories = [...res.data[this.$route.params.id].كريب];
          }
          if (
            res.data[this.$route.params.id].جبنة ||
            (res.data[this.$route.params.id].بيض &&
              res.data[this.$route.params.id].طعمية &&
              res.data[this.$route.params.id].فول)
          ) {
            this.categories = [...res.data[this.$route.params.id].جبنة];
            this.categories.push(...res.data[this.$route.params.id].بيض);
            this.categories.push(...res.data[this.$route.params.id].طعمية);
            this.categories.push(...res.data[this.$route.params.id].فول);
          }
          // //  else {
          //   //  this.categories = res[this.$route.params.id]
          //    this.categories = res.data[this.$route.params.id]
          //    console.log('fff', res)
          //   //  console.log('fff', this.categories)
          //    console.log('fff', this.$route.params.id)
          //    console.log('res.data[this.$route.params.id]',res.data[this.$route.params.id])
          // //  }

          //      console.log('ee',this.categories)
        });
    },
  },
  created() {
    this.getcategories();
  },
};
</script>
<style scoped lang="scss">
.display {
  min-height: 1000px;
  padding: 0 3%;
  margin-top: 2%;
  .addicon {
    padding: 3%;
    font-size: 50px;
    cursor: pointer;
    color: black;
  }
}
</style>
