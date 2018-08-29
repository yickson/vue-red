<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
  data() {
    return {
      navsfirst: [
        {
          name: 'Sobre Nosotros',
          title: 'Sobre Nosotros',
        },
        {
          name: 'En prensa',
          title: 'En prensa',
        },
        {
          name: 'Contacto',
          title: 'Contacto',
        },
        {
          name: 'Preguntas Frecuentes',
          title: 'Preguntas Frecuentes ',
        },
        {
          name: 'Garantías y riesgos',
          title: 'Garantías y riesgos',
        },
      ],

      persistentNavRoutes: [
        {
          name: 'como funciona',
          title: 'Cómo funciona',
        },
        {
          name: 'invertir',
          title: 'Invertir',
        },
        {
          name: 'solicitar credito',
          title: 'Solicitar crédito',
        },
        {
          name: 'crear cuenta',
          title: 'Crear cuenta',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logged in as ' + this.currentUser.name,
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
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
  <navbar class="main-navbar">
    <a
      slot="brand"
      class="navbar-brand"
      href="/">
      <img src="../../src/assets/images/logomain.svg">
    </a>
    <ul>
      <NavBarRoutes
        v-if="loggedIn"
        :routes="loggedInNavRoutes"
      />
      <NavBarRoutes
        v-else
        :routes="loggedOutNavRoutes"
      />
    </ul>
    <ul class="first-nav">
      <NavBarRoutes :routes="navsfirst"/>
    </ul>
    <ul class="second-nav">
      <NavBarRoutes :routes="persistentNavRoutes"/>
    </ul>
  </navbar>
</template>

<style>
.navbar {
  margin-bottom: 0;
  border: none;
  border-radius: 0;
}
.navbar-brand img {
  height: 52px;
  width: 187px;
}
.main-navbar {
  display: block;
  min-height: 100px;
  color: #fff;
  background-color: rgba(234, 91, 43, 0.9);
  text-align: right;
}

.main-navbar ul li {
  display: inline;
  margin-left: 10px;
  list-style: none;
}

.second-nav {
  font-weight: bold;
  display: block;
  text-transform: uppercase;
}
.main-navbar ul li a {
  color: #fff !important;
}
.first-nav {
  display: block;
  font-size: 12px;
  text-transform: capitalize;
  margin-top: 10px;
}
</style>
