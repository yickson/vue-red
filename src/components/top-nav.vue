<script>
export default {}
</script>

<template>
  <header
    id="header"
    class="header">
    <div class="header-menu">
      <div class="col-sm-7">
        <div class="header-left">
          <div class="dropdown for-notification">
            <button
              id="notification"
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <i class="fa fa-bell"/>
              <span class="count bg-danger">5</span>
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="notification">
              <p class="red">Notificaciones</p>
              <a
                class="dropdown-item media"
                href="#">
                <i class="fa fa-check"/>
                <p>Server #1 overloaded.</p>
              </a>
              <a
                class="dropdown-item media"
                href="#">
                <i class="fa fa-info"/>
                <p>Server #2 overloaded.</p>
              </a>
              <a
                class="dropdown-item media bg-flat-color-3"
                href="#">
                <i class="fa fa-warning"/>
                <p>Server #3 overloaded.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="user-area dropdown float-right">
          <a href="/logout">
            <i class="fa fa-sign-out"/>Cerrar sesion abuschmann@valorreal.cl
          </a>
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
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  font-size: 11px;
  line-height: 15px;
  color: #fff;
  border-radius: 50%;
}
</style>
