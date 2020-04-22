<template>
  <div class="product">
    <router-link :to="{name:'product', params:{id:productId}}">
      <div class="product-image">
        <img :src="`${photoName}?width=650&height=650`">
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
  data() {
    return {
      image: 'image url',
      title: 'item title',
      id: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: inline-block;
  @include mobile {
    flex: 1 0 100%;
    margin-bottom: 20px;
    }
  @include tablet {
    flex: 0 0 calc(100% / 2);
  }
  @include desktop {
    flex: 0 0 calc(100% / 4);
  }
  &-image {
    display: block;
    max-width: 290px;
    margin: auto;
    img {
      width: 100%;
    }
  }
  &-details {
    max-width: 290px;
    margin: auto;
    text-align: left;
  }
  &-detail {
    display: block;
    margin-bottom: 10px;
  }
  &-name {
    font-size: 20px;
  }
  &-color {
    font-size: 15px;
  }
  &-price {
    font-size: 20px;
  }
}
</style>
