<template>
  <section id="app-body" class="shopping-cart">
    <div class="container">
      <h1 class="shopping-cart--label">Shopping Cart</h1>

      <div class="container shopping-cart--no-items" v-if="cartIsEmpty">No items in cart</div>

      <div class="shopping-cart--summary" v-if="!cartIsEmpty">
        <div class="shopping-cart--items">
          <div class="shopping-cart--item" v-for="item in itemsInCart" :key="item.id">
            <router-link :to="{name:'product', params:{id:item.productId}}" class="shopping-cart--item-image">
              <img :src="item.photoName"/>
            </router-link>

            <div class="shopping-cart--item-price">${{item.price}}</div>

            <div class="shopping-cart--item-quantity">
              <div class="stepper">
                <div class="stepper--subtract" @click="lowerItemQuantity(item)">-</div>
                <div class="stepper--input">Qty: {{item.count}}</div>
                <div class="stepper--add" @click="raiseItemQuantity(item)">+</div>
              </div>
            </div>

            <div class="shopping-cart--item-delete">
              <span class="icon icon--delete" @click="removeItem(item)"></span>
            </div>
          </div>
        </div>

        <div class="shopping-cart--pricing">
          <div class="shopping-cart--pricing-items">
            <div class="shopping-cart--pricing-item" v-for="item in itemsInCart" :key="item.id">
              <div class="shopping-cart--pricing-item-name">{{item.itemName}}</div>
              <div class="shopping-cart--pricing-item-count">Qty:{{item.count}}</div>
              <div class="shopping-cart--pricing-item-price">${{item.price}}</div>
            </div>
          </div>
          <div class="shopping-cart--pricing-total">Total: ${{totalPrice}}</div>
        </div>
      </div>

      <div class="shopping-cart--actions">
        <router-link class="button button--alt" to="/">Continue shopping</router-link>
        <div class="button" @click="checkOut" v-if="!cartIsEmpty">Checkout</div>
        <div class="button button--reset" @click="removeAllItemsFromCart" v-if="!cartIsEmpty">Remove all items</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      itemsInCart: 'shoppingCart/itemsInCart',
      totalPrice: 'shoppingCart/totalPrice'
    }),
    cartIsEmpty() {
      return this.itemsInCart < 1
    }
  },
  methods: {
    ...mapActions({
      removeItem: 'shoppingCart/removeItemFromCart',
      removeAllItemsFromCart: 'shoppingCart/removeAllItemsFromCart',
      raiseItemQuantity: 'shoppingCart/raiseItemQuantity',
      lowerItemQuantity: 'shoppingCart/lowerItemQuantity',
    }),
    checkOut() {
      console.log('sorry could not check-out shopping cart')
    },
  }
}
</script>