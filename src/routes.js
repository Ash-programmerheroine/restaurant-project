import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddPage from "./components/AddPage.vue";
import UpdatePage from "./components/UpdatePage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/log-in",
  },
  {
    name: "AddPage",
    component: AddPage,
    path: "/add-page",
  },
  {
    name: "UpdatePage",
    component: UpdatePage,
    path: "/update-page",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
