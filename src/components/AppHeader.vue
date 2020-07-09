<template>
  <header>
    <!-- Actions on the left side of header -->
    <div class="header-left-actions">
      <div class="header--logo">
        <router-link to="/">
        <img src="@/assets/images/logo.png" alt="logo" class="header--logo-image">
        </router-link>
      </div>
    </div>

    <!-- Actions on the right side of header (cart, user settings...) -->
    <div class="header-right-actions">
      <div class="header-contact">
        <router-link to="/shopping-cart">
          <span class="header-cart-icon" :number-of-items="numberOfItemsInCart"></span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { CompanyName, SalesRep } from '../TestData.json';

export default {
  name: 'app-header',
  data() {
    return {
      companyName: '',
      salesRep: {},
    };
  },
  mounted() {
    // Fetch would go here
    this.companyName = CompanyName;
    this.salesRep = {
      name: `${SalesRep.FirstName}  ${SalesRep.LastName}`,
      phoneNumber: SalesRep.Phone,
    };
  },
  computed: {
    ...mapGetters({
      numberOfItemsInCart: 'shoppingCart/numberOfItemsInCart',
    }),
    showBackButton() {
      // Only show back button on product page
      return this.$route.name === 'product';
    },
  },
};
</script>
