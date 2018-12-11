<template>
  <ul>
    <li v-for="product of products" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br />
      <button :disabled="product.inventory === 0" @click="addToCart(product)">放入购物车</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('products', {
      products: 'all'
    })
  },

  methods: {
    addToCart (product) {
      this.$store.dispatch('cart/addToCart', product)
    }
  },

  created () {
    this.$store.dispatch('products/getAllproducts')
  }
}
</script>
