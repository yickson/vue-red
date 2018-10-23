<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
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
        {
          name: 'profile',
          title: () =>
            'Sesión iniciada de ' + this.currentUser.data.usuario.email,
        },
        {
          name: 'logout',
          title: 'Cerrar sesión',
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
  <navbar
    class="main-navbar"
    fluid>
    <router-link :to="{ path: '/'}"
      slot="brand"
      class="navbar-brand"
      href="/">
      <img src="../../src/assets/images/logomain.svg">
    </router-link>
    <template slot="collapse">
      <navbar-nav right>
        <NavBarRoutes
          v-if="loggedIn"
          :routes="loggedInNavRoutes"
        />
        <NavBarRoutes
          v-else
          :routes="loggedOutNavRoutes"
        />
      </navbar-nav>
      <navbar-nav
        right
        class="first-nav">
        <NavBarRoutes :routes="navsfirst"/>
      </navbar-nav>
      <navbar-nav
        right
        class="second-nav">
        <NavBarRoutes :routes="persistentNavRoutes"/>
      </navbar-nav>
    </template>
  </navbar>
</template>



<style>
.main-navbar .nav {
  padding-left: 9px;
}
.navbar-default .navbar-toggle {
  border: none;
}
.navbar-default .navbar-toggle .icon-bar {
  background: #ffffff;
  height: 4px;
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
  height: 52px;
  width: 187px;
}
.main-navbar {
  display: block;
  min-height: 100px;
  color: #fff;
  background-color: rgba(234, 91, 43, 0.9);
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
.main-navbar .nav > li > a {
  color: #fff !important;
  padding: 1px 10px;
}
.first-nav {
  display: block;
  font-size: 12px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
</style>
