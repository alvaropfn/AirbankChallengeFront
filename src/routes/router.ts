import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

enum RoutesNames {
  home = "/",
  transactions = "/transactions",
  transaction = "/transaction",
}

const systemRoutes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: RoutesNames.home,
    component: () => import("@/components/Home.vue"),
  },
  {
    name: "transactions",
    path: RoutesNames.transactions,
    component: () => import("@/components/TransactionsList.vue"),
  },
  {
    name: "transaction",
    path: `${RoutesNames.transaction}/:id`,
    component: () => import("@/components/TransactionsDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...systemRoutes],
});

export { RoutesNames, router };
