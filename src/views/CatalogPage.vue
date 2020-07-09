<template>
<section id="app-body">
  <div class="container add">
    <div class="home-ad">

    </div>
  </div>
  <div class=" container catalog">
    <product v-for="item in items"
      :key="item.ItemId"
      :price="item.BasePrice"
      :itemName="item.ItemName"
      :color="item.udf16"
      :productId='item.ProductID'
      :photoName="item.PhotoName"
    />
  </div>
</section>
</template>

<script>
// Test data - only importing data we need in this component
import Product from '@/components/Product.vue';

import { items, Message } from '../TestData.json';

export default {
  name: 'Catalog',
  data() {
    return {
      items: [],
      message: '',
    };
  },
  mounted() {
    // Fetch would be here
    // Get and set new items data
    this.items = items;

    this.message = Message;
  },
  components: {
    Product,
  },
};
</script>
