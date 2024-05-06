import { useRouter, createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PositiveDecisionView from "../views/PositiveDecisionView.vue";
import NegativeDecisionView from "../views/NegativeDecisionView.vue";
import { useCalculatorStore } from "@/store/calculator";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/positive-decision",
      name: "positive",
      component: PositiveDecisionView,
    },
    {
      path: "/negative-decision",
      name: "negative",
      component: NegativeDecisionView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!useCalculatorStore().isSuccessfullySubmitted && to.name !== "home") {
    return { name: "home" };
  } else {
    return true;
  }
});

export default router;
