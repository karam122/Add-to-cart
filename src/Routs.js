import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/Home.vue";
import CheckOut from "./components/CheckOut.vue";
import StripeMethod from './components/StripeMethod.vue'
import Success from './components/SuccessPage.vue'
import Error from './components/ErrorPage.vue'
import StripeCard from './components/StripeCard.vue'

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "CheckOut",
    path: "/check-out",
    component: CheckOut,
  },
  {
    name: "StripeMethod",
    path: "/stripe",
    component: StripeMethod,
  },
  {
    name: "Success",
    path: "/success",
    component: Success,
  },
  {
    name: "Error",
    path: "/error",
    component: Error,
  },
  {
    name: "StripeCard",
    path: "/card",
    component: StripeCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
