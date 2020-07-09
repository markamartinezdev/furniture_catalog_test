import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '@/views/CatalogPage';
import Product from '@/views/ProductPage';
import ShoppingCart from '@/views/ShoppingCart';


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
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
