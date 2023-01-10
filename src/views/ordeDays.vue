<template>
  <div class="orderday">
    <el-row type="flex" justify="end">
      <i class="el-icon-right icons" @click="back()"></i>
    </el-row>
    <el-card
      class="card"
      @click.native.capture="orderDescription(index)"
      v-for="(order, index) in orders"
      :key="index"
    >
      <el-row type="flex" justify="end">
        <i
          class="el-icon-delete icons"
          @click="deleteOrder(index)"
        ></i>
      </el-row>
      <span class="title">order</span>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "orderDays",
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    orderDescription(id) {
      this.$router.push({ path: `/order/${id}` });
    },
    back() {
      this.$router.push({ path: `/Orders` });
    },
    deleteOrder(index) {
      axios
        .delete(
          `https://restaurant-e535d-default-rtdb.firebaseio.com/orders/${this.$store.state.idDay}/${index}.json`
        )
        .then(() => {
        
            this.$router.push({ path:`/Orders/${this.$store.state.idDay}`});
              window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    axios
      .get(
        `https://restaurant-e535d-default-rtdb.firebaseio.com/orders/${this.$route.params.id}.json`
      )
      .then((res) => {
        this.orders = res.data;
        console.log(res.data);
        this.$store.state.idDay = this.$route.params.id;
        console.log(this.$store.state.idDay);
       
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.orderday {
  height: 79.2vh;
  .icons {
    padding: 0.5%;
    font-size: 17px;
    background: black;
    text-align: center;
    color: #ff8303;
    border-radius: 50%;
    display: inline-block;
    margin: 2%;
    cursor: pointer;
  }
  .card {
    cursor: pointer;
    margin: 2% 0 2% 0;
  }
  .title {
    text-align: center;
    font-size: 22px;
    text-transform: capitalize;
    color: #ff8303;
    letter-spacing: 5px;
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
</style>
