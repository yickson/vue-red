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
      <div class="col-xs-12 col-md-12  col-md-12">
        <h2 class="text-center title-about">EN PRENSA</h2>
        <p class="intro text-center">Mira dónde hemos sido publicados</p>
      </div>
    </div>
    <div class="container-noticia">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img
            src="../../../src/assets/images/pulso_logo.png"
            alt=""
            class="img-responsive">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>Redcapital,Celcoin y Payit, la cuota latina entre las finalistas por el Seedstars Global Winner</p>
          <button class="btn">IR A LA NOTICIA</button>
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
.container-noticia {
  display: block;
  margin: 50px auto;
  background-color: #ffffff;
  max-width: 750px;
  padding: 20px 60px 0px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.container-noticia img {
  margin-top: 20px;
}
.container-noticia .btn {
  background-color: #f47828;
  color: #ffffff;
  border-radius: 2px;
  width: 140px;
  height: 40px;
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
