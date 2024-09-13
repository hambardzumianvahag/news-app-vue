import { createRouter, createWebHashHistory } from "vue-router";

import MainView from "../views/mainView.vue";
import SavedView from "../views/savedView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/save", component: SavedView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
