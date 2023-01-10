<template>
  <div class="add-restaurant">
    <!-- <h1 class="title-add">add resaurant</h1> -->
    <el-form
      ref="AddRestaurant"
      :model="restaurant"
      class="addItem"
      :rules="rules"
    >
      <el-row type="flex" class="drop row-bg" justify="center">
        <el-col :lg="20">
          <div
            class="img display-inline align-center"
            @dragover.prevent
            @drop="onDrop"
            @click="$refs.fileInput.click()"
          >
            <div v-if="!restaurant.img_url">
              <span class="el-icon-download" id="upload-icon"></span>
              <h2>Drop an image or Browse</h2>
              <label class="display-inline">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  @change="onChange"
                  ref="fileInput"
                />
              </label>
            </div>
            <div
              class="img display-inline align-center"
              v-else
              v-bind:class="{ image: true }"
            >
              <img :src="restaurant.img_url" alt="" class="img" />
              <br />
              <br />
              <button class="btn" @click.stop="removeFile">REMOVE</button>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-form-item label=" Name Restaurant" prop="name">
        <el-input v-model="restaurant.name"></el-input>
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input v-model="restaurant.describtion"></el-input>
      </el-form-item>
      <el-form-item label=" Service_Price" prop="price">
        <el-input v-model="restaurant.service_price"></el-input>
      </el-form-item>
      <el-form-item label=" Time" prop="time">
        <el-input v-model="restaurant.time"></el-input>
      </el-form-item>
      <el-form-item label="Id" prop="id">
        <el-input v-model="restaurant.id"></el-input>
      </el-form-item>
      <el-form-item label="Latitude" prop="Latitude">
        <el-input v-model="restaurant.latitude"></el-input>
      </el-form-item>
      <el-form-item label=" Longitude" prop="Longitude">
        <el-input v-model="restaurant.longitude"></el-input>
        <el-button type="warning" class="btn-add" round @click.native="addItem()"
          >ADD</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { validateInteger, validateName } from "../../validtionForm.js";
export default {
  name: "add-restaurant",
  data() {

    return {
   
      // allCategorys :[],
      restaurant: {
        name: "",
        img_url: "",
        service_price: "",
        latitude: "",
        describtion: "",
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
created(){
  
         axios.get(`https://restaurant-e535d-default-rtdb.firebaseio.com/categories.json`).then((res)=>{

           
             console.log('ee',res.data)
         })
     
},
  methods: {
    
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        this.$message({
          message: "Warning, this is a warning message.",
          type: "warning",
        });
        return;
      }
      // var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.restaurant.img_url = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.restaurant.img_url = "";
    },
    addItem() {
      this.$refs.AddRestaurant.validate((valid) => {
        if (valid) {
          axios
            .post(
              `https://restaurant-e535d-default-rtdb.firebaseio.com/restaurants.json`,
              this.restaurant
            )
            .then((res) => {
              console.log(res.status);
                this.$router.push({name:"Restaurants"})
            
            })
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
