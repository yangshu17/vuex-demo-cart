import shop from '@/api/data'

const state = {
  all: []
}

const actions = {
  async getAllproducts ({ commit }) {
    let products = await shop()
    commit('setProducts', products)
  }
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  update (state, { id }) {
    let product = state.all.find( product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}