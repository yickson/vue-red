<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'
import LeftNavRoutes from './left-nav-bar-routes.vue'

export default {
  components: { NavBarRoutes, LeftNavRoutes },
  data() {
    return {
      navsfirst: [
        {
          name: 'about',
          title: 'Sobre Nosotros',
        },
        {
          name: 'press',
          title: 'En prensa',
        },
        {
          name: 'contact',
          title: 'contacto',
        },
        {
          name: 'faq',
          title: 'Preguntas Frecuentes ',
        },
        {
          name: 'guaranty-risk',
          title: 'Garantías y riesgos',
        },
      ],

      persistentNavRoutes: [
        {
          name: 'howitworks',
          title: 'Cómo funciona',
        },
        {
          name: 'invertir',
          title: 'Invertir',
        },
        {
          name: 'credit',
          title: 'Solicitar crédito',
        },
        {
          name: 'crear cuenta',
          title: 'Crear cuenta',
        },
      ],
      loggedInNavRoutes: [
        /* {
          name: 'profile',
          title: () =>
            'Sesión iniciada de ' + this.currentUser.data.usuario.email,
        }, */
        {
          name: 'logout',
          title: 'Cerrar sesión',
        },
        {
          name: 'personal information',
          title: 'Mi Panel',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'INGRESAR',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <navbar :fluid="false" class="main-navbar">
    <router-link slot="brand" :to="{ path: '/'}" class="navbar-brand" href="/">
      <img src="../../src/assets/images/logomain.svg">
    </router-link>
    <template slot="collapse">
      <navbar-nav right>
        <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes"/>
        <NavBarRoutes v-else :routes="loggedOutNavRoutes"/>
      </navbar-nav>
      <navbar-nav right class="first-nav">
        <NavBarRoutes :routes="navsfirst"/>
      </navbar-nav>
      <navbar-nav right class="second-nav">
        <NavBarRoutes :routes="persistentNavRoutes"/>
      </navbar-nav>
    </template>
  </navbar>
</template>



<style scoped>
.main-navbar .nav {
  padding-left: 9px;
}
.navbar-default .navbar-toggle {
  border: none;
}
.navbar-default .navbar-toggle .icon-bar {
  height: 4px;
  background: #fff;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border: none;
}
.navbar {
  margin-bottom: 0;
  border: none;
  border-radius: 0;
}
.navbar-brand img {
  width: 187px;
  height: 52px;
}
.main-navbar {
  display: block;
  min-height: 100px;
  color: #fff;
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
}

.main-navbar ul li {
  display: inline;
  margin-left: 10px;
  list-style: none;
}

.second-nav {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
}
.main-navbar .nav > li > a {
  padding: 1px 10px;
  color: #fff !important;
}
.first-nav {
  display: block;
  margin-bottom: 20px;
  font-size: 12px;
  text-transform: capitalize;
}
</style>
