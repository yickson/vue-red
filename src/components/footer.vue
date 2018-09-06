<script>
import { authComputed } from '@state/helpers'
import FooterRoutes from './footer-routes.vue'

export default {
  components: { FooterRoutes },
  data() {
    return {
      firstrow: [
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
          title: 'Contacto',
        },
        {
          name: 'faq',
          title: 'Preguntas Frecuentes ',
        },
        {
          name: 'guaranty-risk',
          title: 'Garantías y riesgos',
        },
        {
          name: 'Garantias y riesgos',
          title: 'Trabaja con nosotros',
        },
      ],

      secondrow: [
        {
          name: 'credit',
          title: 'Solicitar Credito',
        },
        {
          name: 'invertir',
          title: 'Invertir',
        },
        {
          name: 'howitworks',
          title: 'Cómo funciona',
        },
        {
          name: 'crear cuenta',
          title: 'Crear Cuenta',
        },
        {
          name: 'login',
          title: 'Ingresar',
        },
      ],
      support: [
        {
          name: 'ayuda',
          title: 'Ayuda',
        },
        {
          name: 'contáctanos',
          title: 'Contáctanos',
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
  <div>
    <div
      id="footer"
      class="row">
      <div class="container">
        <div class="col-xs-6 col-sm-3 col-md-3">
          <p class="list-title">RedCapital</p>
          <ul>
            <FooterRoutes :routes="firstrow"/>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-3">
          <p class="list-title">Empieza ahora</p>
          <ul>
            <FooterRoutes :routes="secondrow"/>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-2">
          <p class="list-title">Soporte</p>
          <ul>
            <FooterRoutes :routes="support"/>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4">
          <p class="footer-txt">A través de RedCapital los inversionistas financian a un Pyme a través de préstamo o compra de facturas.

          Si bien hay una tasa fijada con anticipación (renta fija) hay riesgos asociados y las fechas de pagos anunciadas son estimadas por lo que varían. Recomendamos revisar en detalle “Garantías y riesgos”</p>
        </div>
      </div>
    </div>
    <div
      id="postfooter"
      class="row">
      <div class="container text-center">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../src/assets/images/logo-redcapital-footer.svg"
            alt=""
            class="logo-footer">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 icon-container">
          <span class="glyphicon glyphicon-phone"/>
          +562 2233 3346
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 icon-container">
          <span class="glyphicon glyphicon-phone"/>
          +562 3224 9361
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 icon-container">
          <span class="glyphicon glyphicon-envelope"/>
          contacto@redcapital.cl
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 text-center">
          <p class="direccion">Coimbra #110, Oficina 902 - Las Condes - Región Metropolitana</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#footer {
  background-color: #474747;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
}
.footer-txt {
  color: #ffffff;
}

#footer ul li {
  list-style: none;
}

#footer ul {
  padding-left: 0;
}
#footer .list-title {
  color: #ffffff;
  font-size: 1.2em;
}

#postfooter {
  background-color: #474747;
  color: #b2b2b2;
  padding-bottom: 10px;
}
#post-footer .glyphicon {
  color: #474747;
  background-color: #b2b2b2;
  padding: 5px;
  border-radius: 50%;
  margin-right: 3px;
}
.logo-footer {
  width: 120px;
  height: auto;
}
.direccion {
  margin-top: 20px;
}
@media only screen and (max-width: 768px) {
  .icon-container {
    margin-top: 15px;
  }
}
</style>
