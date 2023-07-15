import { createRouter, createWebHistory } from "vue-router";

import store from "./store/index.js";

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachRegister from "./pages/coaches/CoachRegister.vue";

import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";

import UserAuth from "@/pages/auth/UserAuth";

import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetail,
      children: [{ path: "contact", component: ContactCoach }], // /coaches/1/contact
    },
    {
      path: "/register",
      component: CoachRegister,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAutheticated) {
    next("/auth");
  } else if (to.meta.requiresUnAuth && store.getters.isAutheticated) {
    next("/coaches");
  } else next();
});
export default router;
