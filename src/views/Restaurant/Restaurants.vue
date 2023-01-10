<template>
  <div class="restaurants-list">
    <el-row type="flex" justify="end">
      <router-link to="/addRestaurant" class="addicon"
        ><i class="el-icon-circle-plus"> </i
      ></router-link>
    </el-row>
    <!-- end section add restaurant -->
    <el-row :gutter="20">
      <el-col
        ref="card"
        :lg="6"
        :md="8"
        :xs="12"
        :sm="12"
        class="foodItem"
        v-for="(restaurant, index) in restaurants"
        :key="restaurant.index"
      
      >
        <el-card :body-style="{ padding: '0px' }"  @click.native.capture="moveToCategories(index) " >
          <img :src="restaurant.img_url" class="image" />
          <div style="padding: 14px" class="body-card">
            <span class="restaurant-name">{{ restaurant.name }}</span
            ><br />
            <span class="restaurant-description">{{
              restaurant.describtion
            }}</span
            ><br />
            <span class="restaurant-time">{{ restaurant.time }} time</span>
            <div class="bottom clearfix">
              <el-row>
                <el-col :lg="12">
                  <el-button class="button" round @click.native.capture="editItem(index)"
                    >Edit</el-button
                  ></el-col
                >
                <el-col :lg="12">
                  <el-button class="button" round @click.native.capture="deleteItem(index)"
                    >Delete</el-button
                  ></el-col
                >
              
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "restaurants",
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    getRestaurant() {
      axios
        .get(
          "https://restaurant-e535d-default-rtdb.firebaseio.com/restaurants.json"
        )
        .then((res) => {
          console.log(res.data);
          this.restaurants = res.data;
        });
    },
    deleteItem(index) {
      axios
        .delete(
          `https://restaurant-e535d-default-rtdb.firebaseio.com/restaurants/${index}.json`
        )
        .then((re) => {
          console(re);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          // window.location.reload();
          this.$router.push({ path: `/Restaurants` });

        });
    },
    editItem(id) {
      this.$router.push({ path: `/EditRestaurant/${id}` });
    },
    moveToCategories(id) {
       this.$router.push({ path: `/categories/${id}` });
    },
    
  },
  created() {
    this.getRestaurant();
  },
};
</script>

<style scoped lang="scss">
.restaurants-list {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  min-height: 1000px;
  background: #ddd;
  padding: 0 5%;
  .addicon {
    padding: 3%;
    font-size: 50px;
    cursor: pointer;
    color: black;
  }
  .foodItem {
    // width: 28% !important;
    border-radius: 30px 0 30px 0 !important;
    text-align: center;
    cursor: pointer;
    // margin-right: 3%;
    margin-bottom: 4%;
  }
  .el-card__body {
    .restaurant-name,
    .restaurant-description,
    .restaurant-time {
      font-weight: bold;
      font-size: 20px;
      padding: 6% 0;
      line-height: 1.5;
    }
    .image {
      height: 250px !important;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      display: inline-block;
      margin-left: 10%;
      padding: 10px;
      background: black;
      color: #fff;
      margin-top: 2%;
      font-weight: bold;
      font-size: 15px;
      transition: 0.7 ease-in-out all;
      width: 70%;
      &:hover {
        background: #ff8303;
        color: black;
      }
    }

    .image {
      width: 100%;

      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
  }
}
</style>
