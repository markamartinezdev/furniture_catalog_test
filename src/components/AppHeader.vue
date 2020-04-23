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

    <!-- Actions on the right side of header (cart, user settings...) -->
    <div class="header-right-actions">
      <div class="header-contact">
        <span class="header-contact-text name">{{salesRep.name}}</span>
        <span class="header-contact-text phone-number">{{salesRep.phoneNumber}}</span>
      </div>
    </div>
  </header>
</template>

<script>

import { ManufacturerID, CompanyName, SalesRep } from '../TestData.json';

export default {
  name: 'app-header',
  data() {
    return {
      manufacturerId: 0,
      companyName: '',
      salesRep: {},
    };
  },
  mounted() {
    // Fetch would go here
    // Set manufaturerId form returned data
    this.manufacturerId = ManufacturerID;
    this.companyName = CompanyName;
    this.salesRep = {
      name: `${SalesRep.FirstName}  ${SalesRep.LastName}`,
      phoneNumber: SalesRep.Phone,
    };
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    box-shadow: 1px 1px 10px 1px #ececec;
    @include mobile {
      padding: 10px;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-contact {
    text-align: right;
  }
  &-contact-text {
    display: inline-block;
    margin: 0 5px;
    &.phone-number:before {
      content: '\e942';
      font-family: 'icons';
      margin-right: 5px;
    }
    &.name:before {
      content: '\e971';
      font-family: 'icons';
      margin-right: 5px;
    }
  }
}


</style>
