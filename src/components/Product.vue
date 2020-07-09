<template>
  <div class="product">
    <router-link class="product-container" :to="{name:'product', params:{id:productId}}">
      <div class="product-image">
        <img :src="`${photoName}`">
      </div>
      <div class="product-details">
        <span class="product-name product-detail">{{itemName}}</span>
        <span class="product-color product-detail">{{color}}</span>
        <span class="product-price product-detail">${{price}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    photoName: {
      type: String,
      default: '',
    },
    productId: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '',
    },
  },
};
</script>
