const state = {
  items: []
}


const getters = {
  beautifulItems (state, getters, rootState) {
    return state.items.map((item, index) => {
      let { title, price } = rootState.products.all.find( product => product.id === item.id)
      return {
        title,
        price,
        quantity: item.quantity
      }
    })
  },

  totalPrice (state, getters) {
    return getters.beautifulItems.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const mutations = {
  push (state, item) {
    state.items.push(item)
  },
  update (state, item) {
    item.quantity++
  }
}

const actions = {
  addToCart ({ commit, state }, product) {
    if (product.inventory > 0) {
      let item = state.items.find( item => item.id === product.id )
      if (!!item) {
        commit('update', item)
      } else {
        commit('push', {
          id: product.id,
          quantity: 1
        })
      }

      commit('products/update', { id: product.id }, { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}