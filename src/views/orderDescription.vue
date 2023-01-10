<template>
  <div class="order">
    <el-row type="flex" justify="end">
      <i class="el-icon-right icons" @click="back()"></i>
    </el-row>
    <p class="title">Inforamtion</p>
    <el-card ref="information" class="card">
      <p class="subTitle">
        <span class="sub">datetime:-</span> {{ Information.datetime }}
      </p>
      <p class="subTitle">
        <span class="sub">is_received:-</span>{{ Information.is_received }}
      </p>
      <p class="subTitle">
        <span class="sub">restaurantId:-</span>{{ Information.restaurantId }}
      </p>
    </el-card>
    <!-- <p class="title">Items</p> -->
    <!-- <el-card ref="items" class="card">
      <p class="subTitle" v-for="(item, index) in Items" :key="index">
        {{ item.name }}
      </p>
    </el-card> -->
    <!-- <el-card ref="prices" class="card">
      <p class="title">total price</p>
      <p class="subTitle" v-for="(item, index) in Items" :key="index">
        <span
          >price:-{{ item.price }} > > > > > {{ item.quantity }} quantity
        </span>
      </p>
    </el-card> -->
   
<table class="table" id="customers">
  <thead>
    <tr style="border:1px solid black">
      <th class="col" >Name</th>
      <th class="col" >Price</th>
      <th class="col" >quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in Items" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.quantity }}</td>
    </tr>
   
  </tbody>
</table>


  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "orderDays",
  data() {
    return {
      Information: {
        datetime: "",
      },
      Items: {},
      orders: {},
    };
  },
  methods: {
    back() {
      this.$router.push({ path: `/Orders/${this.$store.state.idDay}` });
    },
  },
  mounted() {},
  created() {
    axios
      .get(
        `https://restaurant-e535d-default-rtdb.firebaseio.com/orders/${this.$store.state.idDay}/${this.$route.params.id}/.json`
      )
      .then((res) => {
        this.orders = res.data;
        console.log(res.status);
        console.log(res.data);
        this.Information = res.data.information;
        console.log(this.Information);
        this.Items = res.data.items;
        console.log(this.Items);
        console.log(this.$store.state.idDay);
        this.$store.state.dateDay = this.Information.datetime;
        console.log(this.$store.state.dateDay);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}
.order {
  .icons {
    padding: 1% 1%;
    font-size: 17px;
    background: black;
    text-align: center;
    color: #ff8303;
    border-radius: 50%;
    display: inline-block;
    margin: 2%;
    cursor: pointer;
  }
  .title {
    color: #ff8303;
    font-size: 25px;
    text-transform: capitalize;
    margin: 1% 0 1% 1%;
  }
  .card {
    cursor: pointer;
    margin: 2% 0 2% 0;

    .subTitle {
      text-align: center;
      font-size: 22px;
      text-transform: capitalize;
      letter-spacing: 5px;
      .sub {
        padding-right: 1%;
      }
  }
  // .table{
  //   margin:  auto;
  //   padding: 2%;
  // .col{
  //   padding: 1%;
  //   border: 1px solid black;
  // }
  // }
}
}
</style>
