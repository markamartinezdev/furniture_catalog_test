
<template>
  <section class="product-page">
    <h1 class="product-name">{{itemName}}</h1>

    <div class="product-information">
      <div class="product-left">
        <div class="product-image-wrapper" >
          <img class="product-image" :src="photoName+'?width=450&height=450'">
        </div>
      </div>

      <div class="product-right">
        <div class="product-right-top">
          <span class="product-price">${{price}}</span>
          <span class="product-available">{{available}}</span>
        </div>

        <div class="product-details">
          <h2 class="product-details-header">Product Details</h2>

          <div v-if="description" class="product-description product-detail-item">
            <span class="product-label">Description</span>
            <span class="detail-text">{{description}}</span>
          </div>

          <div v-if="dimensions" class="product-messurments product-detail-item">
            <span class="product-label">Dimensions</span>
            <span class="detail-text">{{dimensions}}</span>
          </div>

          <div v-if="color" class="product-colors product-detail-item">
            <span class="product-label">Color</span>
            <span class="detail-text">{{color}}</span>
          </div>

          <div v-if="meterial" class="product-meterial product-detail-item">
            <span class="product-label">Meterial</span>
            <span class="detail-text">{{meterial}}</span>
          </div>

          <div v-if="itemID" class="product-id product-detail-item">
            <span class="product-label">Product Id</span>
            <span class="detail-text">{{itemID}}</span>
          </div>

          <div v-if="manufacturerID" class="product-manufacturer product-detail-item">
            <span class="product-label">Manufacturer</span>
            <span class="detail-text">{{itemID}}</span>
            <img :src="clientLogo"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// For personal code style preference
/* eslint-disable no-trailing-spaces */
import { items, ManufacturerID, priceKey } from '../TestData.json';

export default {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  data() {
    return {
      itemID: '',
      itemName: '',
      description: '',
      dimensions: '',
      price: 0,
      photoName: '',
      color: '',
      meterial: '',
      manufacturerID: 0,
      onHandQuantity: 0,
    };
  },
  mounted() {
    // Fetch would be here - normally we would call an endpoint for the item data
    // Get the correct item form the array by comparing the product id to the id passed in the props
    const item = items.find((i) => i.ProductID === this.id);

    // Set componenth data from the returned item
    this.itemID = item.ItemID;
    this.itemName = item.ItemName;
    this.description = item.Description;
    this.dimensions = item.Dimensions;
    this.price = item[priceKey];
    this.photoName = item.PhotoName;
    this.color = item.udf16;
    this.meterial = item.udf17;
    this.onHandQuantity = item.OnHandQuantity;

    // Set manufacturer id
    this.manufacturerID = ManufacturerID;
  },
  computed: {
    clientLogo() {
      return `http://images.repzio.com/productimages/${this.manufacturerID}/logo${this.manufacturerID}_lg.jpg?width=100`;
    },
    available() {
      return this.onHandQuantity > 0 ? `${this.onHandQuantity} available` : 'Out of stock';
    },
  },
};
</script>

<style lang="scss" scoped>
  .product {
    &-page {
      max-width: 1600px;
      margin: auto;
      padding: 80px 20px 20px;
      @include mobile {
        padding-top: 20px;
      }
    }
    &-information {
      display: flex;
      margin: 30px 0;
      flex-wrap: wrap;
    }
    &-label {
      display: block;
      font-weight: 600;
      margin-bottom: 5px;
    }
    &-left {
      margin: auto auto 30px;
      width: 100%;
      @include desktop {
        width: auto;
        margin:auto 30px auto;
      }
    }
    &-right {
      flex: 1;
      @include desktop {
        margin-left: 30px;
      }
    }
    &-right-top {
      border-bottom: dotted 2px #cacaca;
      text-align: left;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
    &-details-header {
      font-size: 25px;
      margin-bottom: 15px;
    }
    &-details {
      text-align: left;
    }
    &-name {
      font-size: 25px;
      text-align: left;
      margin: 0 0 30px;
      display: inline-block;
      width: 100%;
    }
    &-image {
      display: block;
      margin: auto;
      width: 100%;
    }
    &-pricing {
      padding-bottom: 20px;
    }
    &-price {
      font-size: 30px;
    }
    &-available {
      display: block;
      margin-top: 15px;
    }
    &-detail-item {
      margin-bottom: 30px;
    }
  }
</style>
