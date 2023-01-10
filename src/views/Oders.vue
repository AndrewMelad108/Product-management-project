<template>
  <div class="order">
    <el-card
      class="card"
      @click.native="orderDays(index)"
      v-for="(order, index) in (orders)"
      :key="index"
      
    >
      <el-row type="flex" justify="end">
        <el-button
          class="icons"
          icon="el-icon-delete"
          @click.native.capture="deleteOrder(index)"
        ></el-button>
      </el-row>

      <span class="title">orderday</span>
      <!-- <span class="num">{{id}}</span> -->
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name: "order",
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    getOrder() {
      const dbRef = firebase.database().ref();
      dbRef
        .child("orders")
        .orderByKey()
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            this.orders = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    orderDays(id) {
      this.$router.push({ path: `/Orders/${id}` });
    },
    deleteOrder(index) {
      axios
        .delete(
          `https://restaurant-e535d-default-rtdb.firebaseio.com/orders/${index}.json`
        )
        .then(() => {
          this.$router.push({ name: "Orders" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
.order {
  padding: 10px;
  .card {
    cursor: pointer;
    margin: 2% 0 2% 0;
    .title {
      font-size: 22px;
      text-transform: capitalize;
      color: #ff8303;
      letter-spacing: 5px;
      padding-bottom: 3%;
    }
    .icons {
      padding: 1% 1%;
      font-size: 17px;
      background: black;
      text-align: center;
      color: #ff8303;
      border-radius: 50%;
      display: flex;
      justify-items: flex-end;
      display: inline-block;
    }
  }
}
</style>
