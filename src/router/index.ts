import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WeatherViewVue from "@/views/WeatherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "weather",
      component: WeatherViewVue,
    },
  ],
});

export default router;
