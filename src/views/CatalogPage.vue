<template>
<section id="app-body">
  <div class="container message" v-html="message">
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

<style lang="scss" scoped>
  .wrapper {
    max-width: $max-width;
    margin: auto;
    padding: 20px;
  }
  .catalog {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;

  }
  .message {
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    @include mobile {
      font-size: 15px;
    }
  }
</style>
