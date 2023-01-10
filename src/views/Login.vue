<template>
  <div class="login">
    <el-row type="flex" justify="center">
      <p class="title-login">log <span class="sub-title">in</span></p>
    </el-row>
    <el-row type="flex" justify="center">
      <el-form :model="login" :rules="rules" ref="login" class="login-form">
        <el-row>
          <el-col :lg="24">
            <el-form-item prop="name">
              <el-input
                type="text"
                v-model="login.name"
                placeholder="Enter Your Name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="24">
            <el-form-item prop="pass">
              <el-input
                type="password"
                v-model="login.pass"
                placeholder="Enter Your Password"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-button
            class="btn-login"
            type="warning"
            round
            @click.enter="loginFunction()"
            >login</el-button
          >
        </el-row>
        <p class="returnTitlePage">
          Dont have any an account?<el-link class="linkResigter" type="warning" @click="backResigter"
            >resigter</el-link
          >
        </p>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {  validateName,validatePass } from "../validtionForm.js";
import firebase from 'firebase'
export default {
  name: "login",
  data() {
    return {
      login: {
        name: "",
        pass: "",
      },
       rules: {
           pass: [{ validator: validatePass, trigger: "change" }],
            name: [{ validator: validateName, trigger: "change" }],
       }
    };
  },
  //  created() {
  //   //check user create account or no and push to search page
  //   if (firebase.auth().currentUser) {
  //     this.$router.push({ path: "/home" });
  // //   }
  //  },
  methods: {
    loginFunction() {
         this.$refs.login.validate((valid) => {
        if (valid) {
         firebase.auth().signInWithEmailAndPassword(this.login.name,this.login.pass).then(()=>{
           this.$router.push({name:"home"});
         },
         () =>{
             this.$message.error("Oops, this account in not defined");
         }
         )
        } else {
          this.$message.error("Oops, this is an error");
        }
      });
    },
    backResigter(){
      this.$router.push({name:"signup"})
    }
  },
};
</script>

<style scoped lang="scss">
.login {
  background: url("../assets/signup.jpg");
  height: 100vh;
  background-origin: center;
  background-size: cover;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  .title-login {
    font-size: 50px;
    padding: 0%;
    color: #fff;
    margin: 0%;
    margin-top: 10%;
    text-align: center;
    text-transform: capitalize;
    .sub-title {
      color: #ff8303;
    }
  }
  .login-form {
    margin-top: 2%;
    height: 30%;
    width: 35%;
    background:rgba(0, 0, 0, 0.8);
    // opacity: 0.8;
    border-radius: 15px;
    padding: 1.5%;
    .btn-login {
      transition: 0.45s all ease-in-out;
      width: 40% !important;
      font-size: 20px;
      font-weight: bold;
      &:hover {
        background: black;
        color: #ff8303;
      }
    }
    .returnTitlePage {
      text-transform: capitalize;
      color: #ddd;
      text-align: center;
      .linkResigter {
        text-decoration: none;
      }
    }
  }
}
</style>
