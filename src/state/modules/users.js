/* import axios from 'axios'

export const state = {
  cached: [],
}

export const getters = {}

export const mutations = {
  CACHE_USER(state, newUser) {
    state.cached.push(newUser)
  },
}

export const actions = {
  fetchUser({ commit, state, rootState }, { email }) {
    // 1. Check if we already have the user as a current user.
    const { currentUser } = rootState.auth
    if (currentUser && currentUser.email === email) {
      return Promise.resolve(currentUser)
    }

    // 2. Check if we've already fetched and cached the user.
    const matchedUser = state.cached.find(user => user.email === email)
    if (matchedUser) {
      return Promise.resolve(currentUser)
    }

    // 3. Fetch the user from the API and cache it in case
    //    we need it again in the future.
    data = { email: this.email, password: this.password, provider: 'users' }
    return axios.get(`http://52.67.70.146/api/login/`, data).then(response => {
      const user = response.data.usuario
      commit('CACHE_USER', user)
      return user
    })
  },
} */
