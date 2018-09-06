<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Sobre Nosotros',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout class="about">
    <div class="row">
      <div class="col-xs-12 col-md-12  col-md-8 col-md-offset-2">
        <h2 class="text-center title-about">ACERCA DE NOSOTROS</h2>
        <p class="intro">RedCapital.cl da acceso a inversiones que antes sólo estaban disponibles
        para personas con grandes capitales. Hemos ganado el premio a mejor startup
        en Chile 2017 por Seedstars y en Londres fuimos la única de Sudamerica entre
        los 10 mejores a nivel mundial en BBVA Open Talent 2017. RedCapital.cl
        lleva más de 4 años operando, con un crecimiento exponencial, lo que permite que
        inversionistas financien más de $3.000 millones al mes.</p>
      </div>
    </div>
    <div class="container-about">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../../src/assets/images/anania.jpg"
            alt=""
            class="avatar_about">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>Gustavo Ananía Garib</p>
          <p>Gerente General</p>
          <p>6+ años experiencia como Inversionista .
          Ha desarrollado varios negocios. (Inversionista, Emprendedor y Docente)
          Ex - Gerente de Servicio al Cliente en Falabella. Subgerente en Movistar y VTR.
          (3+ trabajo en el extranjero) MBA e Ing. Civil Industrial PUC .</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../../src/assets/images/zanberk.jpg"
            alt=""
            class="avatar_about">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>Felipe Zanberk Walter</p>
          <p>Gerente Comercial</p>
          <p>9+ años de experiencia financiando Pymes. Ex Subgerente Comercial Pymes. Experiencia en el área comercial, canales remotos y marketing digital. Ing. Civil Industrial de la UDP.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../../src/assets/images/mellis.jpg"
            alt=""
            class="avatar_about">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>Raúl Mellis Ibaceta</p>
          <p>Gerente Informática</p>
          <p>6+ años de experiencia en desarrollo, automatización de Software y plataformas online B2B, B2C, E-procurement. Ing. informático Duoc UC. Diplomado Universidad de Chile.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../../src/assets/images/pinto.jpg"
            alt=""
            class="avatar_about">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>Anibal Pinto Ferrada</p>
          <p>Director de Asuntos Corporativos y Legales</p>
          <p>Abogado, LLM en Banking and Financial Law (UK); Master in International Development Policies (USA); Master en Tributación Empresarial (UAI). Ex Decano de Economía y Negocios de la U. San Sebastián, Asesor Senior del Ministro de Economía, ex Presidente de Sercotec. Fundador y Presidente de ONG Acción Emprendedora.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.about {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.container-about {
  display: block;
  margin: 50px auto;
  background-color: #ffffff;
  max-width: 600px;
  padding: 20px 60px 0px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.intro,
.title-about {
  color: #ffffff !important;
}
.title-about {
  margin-bottom: 40px;
  margin-top: 40px;
}
.container-about .avatar_about {
  width: 110px;
  border-radius: 50%;
  height: auto;
}

.container-about p:first-child {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -5px;
  margin-top: -5px;
}
.container-about p:nth-child(2) {
  color: #777;
  font-size: 14px;
}
.container-about .row {
  border-bottom: 1px solid #ddd;
  padding-top: 20px;
  padding-bottom: 20px;
}
.container-about .row:last-child {
  border-bottom: none;
}
</style>
