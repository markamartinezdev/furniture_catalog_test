<template>
  <div id="app-body" class="catalog">
    <product v-for="item in items"
      :key="item.ItemId"
      :price="item.BasePrice"
      :itemName="item.ItemName"
      :color="item.udf16"
      :productId='item.ProductID'
      :photoName="item.PhotoName"
    />
  </div>
</template>

<script>
// Test data - only importing data we need in this component
import Product from '@/components/Product.vue';

import { items } from '../TestData.json';

export default {
  name: 'Catalog',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    // Fetch would be here
    // Get and set new items data
    this.items = items;
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
  .catalog {
    display: flex;
    flex-wrap: wrap;
  }
</style>
