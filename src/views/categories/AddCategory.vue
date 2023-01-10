<template>
  <div class="add-restaurant">
    <!-- <h1 class="title-add">add resaurant</h1> -->
    <el-form
      ref="AddRestaurant"
      :model="restaurant"
      class="addItem"
      :rules="rules"
    >
      <el-form-item label=" Name Category" prop="name">
        <el-input v-model="restaurant.name"></el-input>
      </el-form-item>
      <el-form-item label="price Category" prop="price">
        <el-input v-model="restaurant.price"></el-input>
      </el-form-item>

      <el-button type="warning" class="btn-add" round @click.native="addItem()"
        >ADD</el-button
      >
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { validateInteger, validateName } from "../../validtionForm.js";
export default {
  data() {
    return {
      categorys: [],
      value: "",
      // allCategorys :[],
      restaurant: {
        name: "",
        price: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "change" }],
        description: [{ validator: validateName, trigger: "change" }],
        price: [{ validator: validateInteger, trigger: "change" }],
        time: [{ validator: validateInteger, trigger: "change" }],
        id: [{ validator: validateInteger, trigger: "change" }],
        Latitude: [{ validator: validateInteger, trigger: "change" }],
        Longitude: [{ validator: validateInteger, trigger: "change" }],
      },
    };
  },

  methods: {
    addItem() {
      this.$refs.AddRestaurant.validate((valid) => {
        if (valid) {
          axios
            .post(
              `https://restaurant-e535d-default-rtdb.firebaseio.com/categories.json`,
              this.restaurant
            )
            .then((res) => {
              console.log(res.status);
              this.$router.push({name:"categories"})
            });
        } else {
          this.$message.error("Oops, this is an error");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.add-restaurant {
  min-height: 1000px;
  input[type="file"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .align-center {
    text-align: center;
  }

  .helper {
    height: 90%;
    display: inline-block;
    vertical-align: middle;
    width: 0;
  }

  .hidden {
    display: none !important;
  }

  .hidden.image {
    display: inline-block !important;
  }
  .image {
    width: 30% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .display-inline {
    display: inline-block;
    vertical-align: middle;
  }

  .img {
    width: 100%;
    height: 100%;
    border: 1px solid #f6f6f6;
    display: inline-block;
  }
  .drop {
    padding: 20px !important;
    margin-top: 31px !important;
    text-align: center !important;
    background-color: #f2f2f2 !important;
    border: 4px dashed #ccc !important;
    background-color: #f6f6f6 !important;
    border-radius: 2px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    height: 100% !important;
    width: 100% !important;
    margin-bottom: 25px;
  }
  .add {
    border: 1px solid #ff8303 !important;
    padding: 20px !important;
    margin: 20px;
    border-radius: 10px !important;
    text-align: center !important;
    background-color: rgb(245, 245, 245) !important;
  }
  .addItem {
    width: 70%;
    margin: 5% auto;
    border-radius: 15px;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  .btn-add {
    padding: 15px;
    width: 25%;
    margin: 30px 0;
  }
}
</style>
