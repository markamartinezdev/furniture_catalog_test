import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../views/CatalogPage.vue';
import Product from '../views/ProductPage.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/product/:id',
    name: 'product',
    props: (route) => ({ id: parseInt(route.params.id, 10) }),
    component: Product,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
