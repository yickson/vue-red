<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './left-nav-bar-routes.vue'
import { Slide } from 'vue-burger-menu'

export default {
  components: { NavBarRoutes, Slide },
  data() {
    return {
      open: false,
      methods: {
        openMenu() {
          this.open = true
        },
      },
      dashboardNav: [
        {
          name: 'dashboard',
          title: 'Dashboard Invertir',
          // icon: 'user',
        },
      ],
      InvestmentNav: [
        {
          name: 'listed',
          title: 'Mis inversiones',
          // icon: 'home',
        },
        {
          name: 'pending payments',
          title: 'Pagos pendientes',
          // icon: 'bell',
        },
        {
          name: 'dues',
          title: 'Cuotas',
          // icon: 'bell',
        },
        {
          name: 'mandates',
          title: 'Mandatos',
          // icon: 'file',
        },
        {
          name: 'payments and certificate',
          title: 'Pagares y certificados',
          // icon: 'file',
        },
      ],
      myDataNav: [
        {
          name: 'personal information',
          title: 'Datos personales',
          // icon: 'userCircle',
        },
        {
          name: 'bank account',
          title: 'Cuenta Bancaria',
          // icon: 'bank',
        },
        {
          name: 'documents',
          title: 'Documentos',
          // icon: 'file',
        },
        {
          name: 'password',
          title: 'Contraseña',
          // icon: 'key',
        },
      ],
      projectNav: [
        {
          name: 'invest',
          title: 'Invertir',
          // icon: 'tasks',
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
  <Slide 
    id="left-panel" 
    no-overlay>
    <div>
      <navbar-nav left>
        <router-link 
          slot="brand" 
          :to="{ path: '/'}" 
          class="navbar-brand" 
          href="/">
          <img 
            src="../../src/assets/images/logomain.svg" 
            class="img-brand">
        </router-link>
        <NavBarRoutes :routes="dashboardNav"/>
        <h3>Mis inversiones</h3>
        <NavBarRoutes :routes="InvestmentNav"/>
        <h3>Mis Datos</h3>
        <NavBarRoutes :routes="myDataNav"/>
        <h3>Solicitar credito</h3>
        <NavBarRoutes :routes="projectNav"/>
      </navbar-nav>
    </div>
  </Slide>
</template>

<style>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);
.navbar-brand {
  margin-bottom: 20px;
}
#left-panel .navbar-brand {
  padding: 0;
}

.img-brand {
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 10px;
}
#left-panel .nav > li > a {
  padding-left: 0;
}
#left-panel .nav > li > a:focus,
.nav > li > a:hover {
  background-color: transparent;
  color: #f47828;
}
#left-panel h3 {
  text-transform: uppercase;
  border-bottom: 1px solid whitesmoke;
  font-weight: bold;
  margin: 15px 0;
  padding-bottom: 13px;
}
.bm-item-list ul li {
  display: block !important;
}
/* burger */
.bm-burger-button {
  position: relative;
  width: 31px;
  height: 21px;
  left: 36px;
  top: 19px;
  cursor: pointer;
  z-index: 999;
}
.bm-burger-bars {
  background-color: #141c3a;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background: #141c3a; /* fallback for old browsers */

  /*overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 0px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: whitesmoke;
  margin-left: 10%;
  font-size: 14px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
@media screen and (max-width: 40em) {
  .bm-burger-button {
    left: 36px;
    top: 26px;
  }
}
</style>
