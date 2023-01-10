<template>
  <div class="layout">
    <Navbar />
    <router-view />
     <Scroll />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Scroll from "../components/ScrollButton";
import Footer from "../components/Footer";

export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    Footer,
    Navbar,
    Scroll
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

</style>
