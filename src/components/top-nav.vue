<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes.vue'
import LeftNav from './left-nav.vue'

export default {
  components: { NavBarRoutes, LeftNav },
  data() {
    return {
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
    }
  },

  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <header 
    id="header" 
    class="header">
    <div class="header-menu">
      <div class="col-sm-12 user-options">
        <div class="user-area dropdown float-right">
          <dropdown menu-right>
            <btn class="dropdown-toggle avatar-btn"/>
            <template slot="dropdown">
              <NavBarRoutes 
                v-if="loggedIn" 
                :routes="loggedInNavRoutes"/>
              <NavBarRoutes 
                v-else 
                :routes="loggedOutNavRoutes"/>
            </template>
          </dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#right-panel header.header {
  display: inline-block;
  width: 100%;
  padding: 15px 20px 13px 20px;
  clear: both;
  background: #fff;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.header-left .dropdown .dropdown-toggle {
  font-size: 16px;
  color: #272c33;
  background: transparent;
  border: none;
}
.header-left .dropdown .dropdown-toggle .count {
  position: absolute;
  top: 4px;
  left: 21px;
  width: 15px;
  height: 15px;
  font-size: 11px;
  line-height: 15px;
  color: #fff;
  border-radius: 50%;
}
.user-options ul li {
  list-style: none;
}
.avatar-btn {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.avatar-btn {
  font-size: 30px;
  background-image: url(https://www.w3schools.com/howto/img_avatar.png);
  background-size: cover;
}
.avatar-btn::after {
}
.avatar-btn .btn-default.active.focus,
.btn-default.active:focus,
.btn-default.active:hover,
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover,
.open > .dropdown-toggle.btn-default.focus,
.open > .dropdown-toggle.btn-default:focus,
.open > .dropdown-toggle.btn-default:hover {
  background-image: url(https://www.w3schools.com/howto/img_avatar.png);
  background-size: cover;
}
</style>
