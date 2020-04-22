<template>
  <header>
    <!-- Actions on the left side of header -->
    <div class="header-left-actions">
      <div v-show="showBackButton"
        class="header-back-button"
        @click="previousPage"
      >
        <span class="header-back-button-arrow"></span>
        <span class="header-back-button-text">Back to catalog</span>
      </div>
    </div>

    <!-- Company name -->
    <div class="header-company-name">{{companyName}}</div>

    <!-- Actions on the right side of header (cart, user settings...) -->
    <div class="header-right-actions">
      <span class="header-cart"></span>
    </div>
  </header>
</template>

<script>

import { ManufacturerID, CompanyName } from '../TestData.json';

export default {
  name: 'app-header',
  data() {
    return {
      manufacturerId: 0,
      companyName: '',
    };
  },
  mounted() {
    // Fetch would go here
    // Set manufaturerId form returned data
    this.manufacturerId = ManufacturerID;
    this.companyName = CompanyName;
  },
  computed: {
    clientLogo() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg`;
    },
    showBackButton() {
      // Only show back button on product page
      return this.$route.name === 'product';
    },
  },
  methods: {
    previousPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss' scoped>
header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #f9f9f9;
    padding: 15px;
    box-shadow: 1px 1px 10px 1px #ececec;
}
.header {
  &-left-actions {
    text-align: left;
    display: flex;
    align-items: center;
  }
  &-back-button {
    cursor: pointer;
    display: flex;
  }
  &-back-button-text {
    @include mobile{
      display: none;
    };
  }
  &-back-button-arrow {
    &:before {
      content: "\ea38";
      margin-right: 10px;
      font-family: 'icons';
      color: $color-secondary;
    }
  }
  &-company-name {
    font-size: 20px;
    text-align: center;
  }
}


</style>
