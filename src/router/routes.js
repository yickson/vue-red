import store from '@state/store'

export default [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('@views/home')),
  },
  {
    path: '/simulate',
    name: 'simulate',
    component: () => lazyLoadView(import('@views/simulate')),
    props: true,
  },
  {
    path: '/successproyect',
    name: 'successproyect',
    component: () => lazyLoadView(import('@views/successproyect')),
    props: true,
  },
  {
    path: '/invertir',
    name: 'invertir',
    component: () => lazyLoadView(import('@views/invertir')),
  },
  {
    path: '/register',
    name: 'crear cuenta',
    component: () => lazyLoadView(import('@views/register')),
  },
  {
    path: '/about',
    name: 'about',
    component: () => lazyLoadView(import('@views/about')),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => lazyLoadView(import('@views/faq')),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => lazyLoadView(import('@views/contact')),
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => lazyLoadView(import('@views/credit')),
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    component: () => lazyLoadView(import('@views/howitworks')),
  },
  {
    path: '/guaranty-risk',
    name: 'guaranty-risk',
    component: () => lazyLoadView(import('@views/guaranty-risk')),
  },
  {
    path: '/press',
    name: 'press',
    component: () => lazyLoadView(import('@views/press')),
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@views/login')),
    beforeEnter(routeTo, routeFrom, next) {
      // If the user is already logged in
      if (store.getters['auth/loggedIn']) {
        // Redirect to the home page instead
        next({ name: 'dashboard' })
      } else {
        // Continue to the login page
        next()
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => lazyLoadView(import('@views/profile')),
    // meta: {
    // authRequired: true,
    // },
    props: route => ({ user: store.state.auth.currentUser }),
  },
  {
    path: '/profile/:username',
    name: 'username-profile',
    component: () => lazyLoadView(import('@views/profile')),
    // meta: {
    // authRequired: true,
    // },
    beforeEnter(routeTo, routeFrom, next) {
      store
        // Try to fetch the user's information by their username
        .dispatch('users/fetchUser', { username: routeTo.params.username })
        .then(user => {
          // Add the user to the route params, so that it can
          // be provided as a prop for the view component below.
          routeTo.params.user = user
          // Continue to the route.
          next()
        })
        .catch(() => {
          // If a user with the provided username could not be
          // found, redirect to the 404 page.
          next({ name: '404', params: { resource: 'User' } })
        })
    },
    // Set the user from the route params, once it's set in the
    // beforeEnter route guard.
    props: route => ({ user: route.params.user }),
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
    },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('auth/logOut')
      const authRequiredOnPreviousRoute = routeFrom.matched.some(
        route => route.meta.authRequired
      )
      // Navigate back to previous page, or home as a fallback
      next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },

  // routes for admin dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => lazyLoadView(import('@views/admin/dashboard')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/listed',
    name: 'listed',
    component: () => lazyLoadView(import('@views/admin/listed')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/pending-payments',
    name: 'pending payments',
    component: () => lazyLoadView(import('@views/admin/pending-payments')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/invest',
    name: 'invest',
    component: () => lazyLoadView(import('@views/admin/invest')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/dues',
    name: 'dues',
    component: () => lazyLoadView(import('@views/admin/dues')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/mandates',
    name: 'mandates',
    component: () => lazyLoadView(import('@views/admin/mandates')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/payments-and-certificate',
    name: 'payments and certificate',
    component: () =>
      lazyLoadView(import('@views/admin/payments-and-certificate')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/my-movements',
    name: 'my movements',
    component: () => lazyLoadView(import('@views/admin/my-movements')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/personal-information',
    name: 'personal information',
    component: () => lazyLoadView(import('@views/admin/personal-information')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/bank-account',
    name: 'bank account',
    component: () => lazyLoadView(import('@views/admin/bank-account')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/documents',
    name: 'documents',
    component: () => lazyLoadView(import('@views/admin/documents')),
    // meta: {
    // authRequired: true,
    // },
  },
  {
    path: '/password',
    name: 'password',
    component: () => lazyLoadView(import('@views/admin/password')),
    // meta: {
    // authRequired: true,
    // },
  },
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/loading').default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/timeout').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
