<template>
  <div class="signup">
    <el-row type="flex" justify="center">
      <img src="../assets/knife.png" class="image-icon" alt="signup" />
    </el-row>
    <el-row type="flex" justify="center">
      <p class="title-signup">sign <span class="sub-title">up</span></p>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form
        :model="signup"
        :rules="rules"
        ref="signup"
        class="signup-form"
      >
        <el-row>
          <el-col :lg="24">
            <el-form-item prop="name">
              <el-input
                type="text"
                v-model="signup.name"
                placeholder="Enter Your Name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="24">
            <el-form-item prop="email">
              <el-input
                type="text"
                v-model="signup.email"
                placeholder="Enter Your Email"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="24">
            <el-form-item prop="pass">
              <el-input
                type="password"
                v-model="signup.pass"
                autocomplete="off"
                placeholder="Password"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="24">
            <el-form-item prop="confirmPass">
              <el-input
                type="password"
                v-model="signup.confirmPass"
                autocomplete="off"
                placeholder="Confirm Password"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-button class="btn-register" type="warning" round @click="submit()"
            >register</el-button
          >
        </el-row>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import { validatePass, validateConfirm, validateName } from "../validtionForm.js";
export default {
  name: "signup",
  data() {
    return {
      signup: {
        name: "",
        email: "",
        pass: "",
        confirmPass: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: ["blur", "change"],
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        pass: [{ validator: validatePass, trigger: "change" }],
        confirmPass: [{ validator: validateConfirm, trigger: "change" }],
        name: [{ validator: validateName, trigger: "change" }],
      },
    };
  },
  methods:{
    submit(){
      this.$refs.signup.validate((valid) => {
        if (valid) {
           this.$message.error(" this is an valid");
        } else {
          this.$message.error("Oops, this is an error");
        }
      });
  }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  background: url("../assets/signup.jpg");
  height: 100vh;
  background-origin: center;
  background-size: cover;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  .image-icon {
    margin-top: 4%;
    margin-left: 1%;
  }
  .title-signup {
    font-size: 50px;
    padding: 0%;
    color: #fff;
    margin: 0%;
    text-align: center;
    text-transform: capitalize;
    .sub-title {
      color: #ff8303;
    }
  }
  .signup-form {
    margin-top: 2%;
    height: 30%;
    width: 35%;
    background: rgba($color: #000000, $alpha: 0.8);
    border-radius: 15px;
    padding: 1.5%;
    .btn-register {
      transition: 0.45s all ease-in-out;
      width: 40% !important;
      font-size: 20px;
      font-weight: bold;
      &:hover {
        background: black;
        color: #ff8303;
      }
    }
  }

  .el-input__inner {
    border-radius: 10px !important;
    border: 0 !important;
    background: #ddd !important;
    color: black !important;
  }
}
</style>
