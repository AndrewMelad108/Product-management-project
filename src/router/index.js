import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from "firebase";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../views/Layout.vue"),

    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../components/home-components/about.vue"),
      },
      {
        path: "/Pricing",
        name: "Pricing",
        component: () => import("../components/home-components/Pricing.vue"),
      },
      {
        path: "/Restaurants",
        name: "Restaurants",
        component: () => import("../views/Restaurant/Restaurants.vue"),
      },
      {
        path: "/Orders",
        name: "Orders",
        component: () => import("../views/Oders.vue"),
       
      },
      {
        path: "/Orders/:id",
        name: "OrderDay",
        component: () => import("../views/ordeDays.vue"),
      },
      {
        path: "/Order/:id/",
        name: "orderDescription",
        component: () => import("../views/orderDescription.vue"),
      },
      {
        path: "/addRestaurant",
        name: "addRestaurant",
        component: () => import("../views/Restaurant/AddRestaurant.vue"),
      },
      {
        path: "/EditRestaurant/:id",
        name: "EditRestaurant",
        component: () => import("../views/Restaurant/EditRestaurant.vue"),
      },
      {
        path: "/categories/:id",
        name: "categories",
        component: () => import("../views/categories/categories.vue"),
      },
      {
        path: "/add-category",
        component: () => import("../views/categories/AddCategory.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
