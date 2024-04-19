import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/add",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/edit/:id",
    name: "EditProduct",
    component: EditProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
