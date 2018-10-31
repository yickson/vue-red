<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './left-nav-bar-routes.vue'

export default {
  components: { NavBarRoutes },
  data() {
    return {
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
          title: 'Ver listado',
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
        {
          name: 'my movements',
          title: 'Mis Movitmientos',
          // icon: 'table',
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
  <aside
    id="left-panel"
    class="left-panel">
    <navbar class="navbar-expand-sm">
      <router-link
        slot="brand"
        :to="{ path: '/'}"
        class="navbar-brand"
        href="/">
        <img
          src="../../src/assets/images/logomain.svg"
          class="img-fluid">
      </router-link>
      <template
        id="main-menu"
        slot="collapse"
        class="main-menu">
        <navbar-nav>
          <li class="menu-item-has-children dropdown">
            <NavBarRoutes :routes="dashboardNav"/>
          </li>
          <h3 class="menu-title">Inversiones</h3>
          <li class="menu-item-has-children dropdown">
            <NavBarRoutes :routes="InvestmentNav"/>
          </li>
          <h3 class="menu-title">Mis Datos</h3>
          <li class="menu-item-has-children dropdown">
            <NavBarRoutes :routes="myDataNav"/>
          </li>
          <h3 class="menu-title">Proyectos</h3>
          <li class="menu-item-has-children dropdown">
            <NavBarRoutes :routes="projectNav"/>
          </li>
        </navbar-nav>
      </template>
    </navbar>
  </aside>
</template>

<style>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);
aside.left-panel {
  display: table-cell;
  width: 280px;
  height: 100vh;
  min-height: 100%;
  padding: 0 25px;
  vertical-align: top;
  background: #272c33;
  -webkit-transition: width 0.3s ease;
  transition: width 0.3s ease;
}

#left-panel .navbar .navbar-brand {
  display: block;
  margin: 0 auto;
  border-bottom: 1px solid #4e4e52;
}
#left-panel .navbar {
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom: 100px;
  background: #272c33;
  border: none;
  border-radius: 0;
}

#left-panel .nav > li > a {
  position: relative;
  display: block;
  padding: 10px 0;
}

.navbar .menu-title {
  display: block;
  width: 100%;
  padding: 15px 0 0 0;
  clear: both;
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  color: #9496a1;
  text-transform: uppercase;
  border-bottom: 1px solid #4e4e52;
}

.collapse.in {
  display: block;
}
.left-panel .container-fluid > .navbar-collapse,
.left-panel .container-fluid > .navbar-header,
.left-panel .container > .navbar-collapse,
.left-panel .container > .navbar-header {
  margin: 0;
}
.left-panel .container-fluid {
  display: table-cell;
  padding-right: 0;
  padding-left: 0;
}
.left-panel .navbar-default .navbar-toggle .icon-bar {
  height: 4px;
  background-color: #888;
}
.left-panel .navbar-default .navbar-toggle:focus,
.left-panel .navbar-default .navbar-toggle:hover {
  background: none;
}
.left-panel .navbar-default .navbar-toggle {
  margin: 0;
}
.left-panel .nav li a {
  line-height: 20px !important;
  color: #fff;
}
.left-panel .nav li a:before {
  position: absolute;
  top: 10px;
  right: 0;
  font-family: 'Fontawesome';
  font-size: 16px;
  color: #c8c9ce;
  text-align: right;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.left-panel .nav .router-link-active a {
  color: #fff !important;
}
.right-panel .fade.show {
  opacity: 1;
}
.header-left .dropdown.show {
  display: inline-block !important;
}

@media (max-width: 575.99px) {
  aside.left-panel .navbar .navbar-brand {
    display: none !important;
  }
  .content.mt-3 .dropdown-menu.show {
    width: 100%;
  }
  .left-panel .container-fluid {
    display: block;
    padding-right: 0;
    padding-left: 0;
  }
  .left-panel .navbar-collapse {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin: 0;
  }
  .navbar .navbar-nav {
    width: 100%;
    margin: 0;
  }
  .navbar .navbar-nav li > a svg {
    width: 30px;
  }
}
</style>
