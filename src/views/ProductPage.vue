
<template>
  <section id="app-body">
    <div class="container product-page">
      <div class="button button--back icon icon--arrow" @click="previousPage">Back</div>

      <h1 class="product-page--product-name">{{item.itemName}}</h1>

      <div class="product-page--product-information">
        <div class="product-page--product-left">
          <div class="product-page--product-image-wrapper" >
            <img class="product-page--product-image" :src="item.photoName">
          </div>
        </div>

        <div class="product-page--product-right">
          <div class="product-page--product-right-top">
            <span class="product-page--product-price">${{item.price}}</span>
            <span class="product-page--product-available">{{available}}</span>
            <span class="button" v-if="this.item.onHandQuantity > 0" @click="addToCart">add to cart</span>
          </div>

          <div class="product-page--product-details">
            <h2 class="product-page--product-details-header">Product Details</h2>

            <div v-if="item.description" class="product-page--product-description product-page--product-detail-item">
              <span class="product-page--product-label">Description</span>
              <span class="detail-text">{{item.description}}</span>
            </div>

            <div v-if="item.dimensions" class="product-page--product-messurments product-page--product-detail-item">
              <span class="product-page--product-label">Dimensions</span>
              <span class="detail-text">{{item.dimensions}}</span>
            </div>

            <div v-if="item.color" class="product-page--product-colors product-page--product-detail-item">
              <span class="product-page--product-label">Color</span>
              <span class="detail-text">{{item.color}}</span>
            </div>

            <div v-if="item.meterial" class="product-page--product-meterial product-page--product-detail-item">
              <span class="product-page--product-label">Meterial</span>
              <span class="detail-text">{{item.meterial}}</span>
            </div>

            <div v-if="item.id" class="product-page--product-id product-page--product-detail-item">
              <span class="product-page--product-label">Product Id</span>
              <span class="detail-text">{{item.iD}}</span>
            </div>

            <div v-if="item.manufacturerLogo" class="product-page--product-manufacturer product-page--product-detail-item">
              <span class="product-page--product-label">Manufacturer</span>
              <span class="detail-text">{{item.companyName}}</span>
              <img class="product-page--product-manufacturer-image" :src="item.manufacturerLogo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// For personal code style preference
import { mapActions } from 'vuex';
import { items, priceKey, CompanyName } from '../TestData.json';

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
      item: {
        id: '',
        itemName: '',
        description: '',
        dimensions: '',
        price: 0,
        photoName: '',
        color: '',
        meterial: '',
        onHandQuantity: 0,
        CompanyName: '',
        manufacturerLogo: '',
      }
    };
  },
  mounted() {
    // Fetch would be here - normally we would call an endpoint for the item data
    // Get the correct item form the array by comparing the product id to the id passed in the props
    const item = items.find((i) => i.ProductID === this.id);

    // Set componenth data from the returned item
    this.item.id = item.ItemID;
    this.item.productId = item.ProductID
    this.item.itemName = item.ItemName;
    this.item.description = item.Description;
    this.item.dimensions = item.Dimensions;
    this.item.price = item[priceKey];
    this.item.photoName = item.PhotoName;
    this.item.color = item.udf16;
    this.item.meterial = item.udf17;
    this.item.onHandQuantity = item.OnHandQuantity;
    this.item.manufacturerLogo = item.ManufacturerLogo;
    this.item.companyName = CompanyName;
  },
  methods: {
    ...mapActions({
      addItemToCart: 'shoppingCart/addItemToCart'
    }),
    addToCart() {
      this.addItemToCart(this.item)
    },
    previousPage() {
      this.$router.go(-1);
    },
  },
  computed: {
    available() {
      return this.item.onHandQuantity > 0 ? `${this.item.onHandQuantity} available` : 'Out of stock';
    },
  },
};
</script>

