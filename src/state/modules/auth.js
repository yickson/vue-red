// import axios from 'axios'

// export const state = {
//   currentUser: getSavedState('auth.currentUser'),
// }

// export const mutations = {
//   SET_CURRENT_USER(state, newValue) {
//     state.currentUser = newValue
//     saveState('auth.currentUser', newValue)
//     setDefaultAuthHeaders(state)
//   },
// }

// export const getters = {
//   // Whether the user is currently logged in.
//   loggedIn(state) {
//     return !!state.currentUser
//   },
// }
// export const actions = {
//   // This is automatically run in `src/state/store.js` when the app
//   // starts, along with any other actions named `init` in other modules.
//   init({ state, dispatch }) {
//     console.log(state)
//     setDefaultAuthHeaders(state)
//     dispatch('validate')
//   },
//   // Logs in the current user.
//   logIn({ commit, dispatch, getters }, { email, password, provider } = {}) {
//     if (!getters.loggedIn) return dispatch('validate')
//     // The data we are going to send in our request

//     const url = 'http://52.67.70.146/api/login'
//     // The data we are going to send in our request
//     /*fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         email,
//         password,
//         provider,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=utf-8',
//       },
//     })
//       .then(response => {
//         response.json()
//         const user = response.data
//         console.log(user.data)
//         commit('SET_CURRENT_USER', user)
//         return user
//       })
//       .then(data => console.log(data))*/
//     var headers = { 'Content-type': 'application/json; charset=utf-8' }
//     return axios
//       .post('http://52.67.70.146/api/login', {
//         email,
//         password,
//         provider,
//         headers: headers,
//       })
//       .then(response => {
//         const user = response.data
//         console.log(user.data)
//         commit('SET_CURRENT_USER', user)
//         return user
//       })
//   },
//   // Logs out the current user.
//   logOut({ commit }) {
//     var headers = {
//       Authorization: `Bearer ${this.currentUser.data.token}`,
//     }
//     console.log('logout')
//     return axios
//       .get('http://52.67.70.146/api/logout', { headers: headers })
//       .then(response => {
//         console.log('hello')
//         console.log(response)
//         commit('SET_CURRENT_USER', null)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   },

//   // Validates the current user's token and refreshes it
//   // with new data from the API.
//   validate({ commit, state }) {
//     if (state.currentUser) return Promise.resolve(null)
//     // The data we are going to send in our request
//     /*fetch(url, {
//       method: 'POST',

//     })
//       .then(response => {
//         response.json()
//         const user = response.data
//         commit('SET_CURRENT_USER', user)
//         return user
//       })
//       .then(data => console.log(data))*/
//     var headers = {
//       'Content-type': 'application/json; charset=utf-8',
//     }
//     return axios
//       .post('http://52.67.70.146/api/login', { headers: headers })
//       .then(response => {
//         const user = response.data
//         commit('SET_CURRENT_USER', user)
//         return user
//       })
//       .catch(error => {
//         if (error.response.status === 401) {
//           commit('SET_CURRENT_USER', null)
//         }
//         return null
//       })
//   },
// }

// // ===
// // Private helpers
// // ===

// function getSavedState(key) {
//   return JSON.parse(window.localStorage.getItem(key))
// }

// function saveState(key, state) {
//   window.localStorage.setItem(key, JSON.stringify(state))
// }

// function setDefaultAuthHeaders(state) {
//   axios.defaults.headers.common.Authorization = state.currentUser
//     ? state.currentUser.token
//     : ''
// }*/

import axios from 'axios'

export const state = {
  currentUser: getSavedState('auth.currentUser'),
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue
    saveState('auth.currentUser', newValue)
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.currentUser
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    setDefaultAuthHeaders(state)
    dispatch('validate')
  },
  // Logs in the current user.
  logIn({ commit, dispatch, getters }, { email, password, provider } = {}) {
    if (getters.loggedIn) return dispatch('validate')

    var headers = {
      'Content-type': 'application/json; charset=utf-8',
    }
    return axios
      .post('http://52.67.70.146/api/login', {
        email,
        password,
        provider,
        headers,
      })
      .then(response => {
        const user = response.data
        commit('SET_CURRENT_USER', user)
        return user
      })
  },
  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_CURRENT_USER', null)
    console.log('logout')
  },
  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null)
    console.log(!state.currentUser)
    var headers = { 'Content-type': 'application/json; charset=utf-8' }
    return axios
      .get('http://52.67.70.146/api/login', { headers: headers })
      .then(response => {
        const user = response.data
        commit('SET_CURRENT_USER', user)
        return user
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          commit('SET_CURRENT_USER', null)
        }
        return null
      })
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveState(key, state) {
  window.localStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common.Authorization = state.currentUser
    ? state.currentUser.token
    : ''
}
