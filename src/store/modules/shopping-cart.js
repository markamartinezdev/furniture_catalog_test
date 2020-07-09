export default {
  state: {
    itemsInCart: [],
    numberOfItemsInCart: 0
  },
  mutations: {
    setItemsInCart(state, payload) {
      state.itemsInCart = payload;
    },
    setNumberOfItems(state, payload) {
      state.numberOfItemsInCart = payload
    },
    removeAllItems(state) {
      state.itemsInCart = []
      state.numberOfItemsInCart = 0
    }
  },
  getters: {
    itemsInCart(state) {
      return state.itemsInCart;
    },
    numberOfItemsInCart(state) {
     return state.numberOfItemsInCart
    },
    totalPrice(state) {
      const totals = state.itemsInCart.map(item => {
        return item.price * item.count
      })
      return totals.reduce((acu, cur) => acu + cur)
    },
  },
  actions: {
    addItemToCart({ commit, state }, payload) {
      let items = state.itemsInCart

      const itemIndex = items.findIndex(item => item.id == payload.id)

      if (itemIndex >= 0) {
        items[itemIndex].count += 1
      }
      else {
        payload.count = 1
        items = items.concat(payload)
      }
      commit('setNumberOfItems', state.numberOfItemsInCart + 1)
      commit('setItemsInCart', items);
    },
    removeItemFromCart({ commit, state }, payload) {
      let items = [...state.itemsInCart]
      const itemIndex = items.findIndex(item => item.id == payload.id)
      const count = items[itemIndex].count ? items[itemIndex].count : 0
      items.splice(itemIndex, 1)
      
      commit('setNumberOfItems', state.numberOfItemsInCart - count)
      commit('setItemsInCart', items)
    },
    removeAllItemsFromCart({ commit }) {
      commit('removeAllItems')
    },
    raiseItemQuantity({ commit, state}, payload) {
      let items = [...state.itemsInCart]
      const itemIndex = items.findIndex(item => item.id == payload.id)
      items[itemIndex].count += 1
      commit('setNumberOfItems', state.numberOfItemsInCart + 1)
      commit('setItemsInCart', items)
    },
    lowerItemQuantity({ commit, state}, payload) {
      let items = [...state.itemsInCart]
      const itemIndex = items.findIndex(item => item.id == payload.id)
      items[itemIndex].count == 1 ? items.splice(itemIndex, 1) : items[itemIndex].count -= 1
      commit('setNumberOfItems', state.numberOfItemsInCart - 1)
      commit('setItemsInCart', items)
    }
  },
  namespaced: true,
};
