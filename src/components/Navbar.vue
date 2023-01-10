<template>
  <div class="Navbar">
    <nav class="navbar">
      <div class="brand-title">Restaurant</div>
      <a href="#" class="toggle-button" @click="show">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links" ref="active">
        <ul>
          <li><router-link to="/home">welcome</router-link></li>
          <li><a @click=" goToAbout()">about</a></li>
          <li><a @click=" goToPricing()">Pricing</a></li>
          <li><router-link to="/Restaurants">Restaurants</router-link></li>
           <li><router-link to="/Orders">Orders</router-link></li>
          <li><a @click="logout">logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      this.$refs["active"].classList.toggle("active");
    },
    goToAbout() {
      this.$router.push("/about");
    },
     goToPricing() {
      this.$router.push("/Pricing");
    },
    logout(){
      firebase.auth().signOut.then(
        this.$router.push({name:"login"})
      )
    }
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.navbar {
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  border: 0;
  transition: all ease-in-out 0.7s;
}

.brand-title {
  font-size: 2.5rem;
  margin: 0.5rem;
  letter-spacing: 0.2rem;
  padding-left: 1%;
  cursor: pointer;
}
.brand-title:hover {
  color: #ff8303;
}
.navbar-links {
  height: 100%;
  margin-right: 10%;
  text-transform: capitalize;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
}

.navbar-links li {
  list-style: none;
  margin-right: 8%;
}

.navbar-links li a {
  font-size: 25px;
  display: block;
  text-decoration: none;
  color: white;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  letter-spacing: 1.5;
}
.navbar-links li:hover a {
  color: #ff8303;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
    transition: all 0.7s ease-in-out;
  }
}
</style>
