<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Garantias y riesgos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<template>
  <Layout class="faq">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="container-faq">
          <h2>Preguntas Frecuentes</h2>
          <section>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los requisitos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los costos por invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Por qué se requiere anticipar dinero si participo en una adjudicación?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <div
              class="question-container"
              @click="show=!show">
              <p>¿Cuáles son los pasos para invertir en RedCapital?</p>
            </div>
            <collapse v-model="show">
              <div
                class="well"
                style="margin-bottom: 0">Hi there.</div>
            </collapse>
          </section>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6"/>
    </div>
  </Layout>
</template>

<style>
.faq {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.container-faq {
  display: block;
  background-color: #ffffff;
  max-width: 600px;
  padding: 20px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  margin-top: 60px;
  margin-bottom: 60px;
}
.question-container p {
  color: #f47828;
}
.container-faq h2 {
  margin-bottom: 50px;
}
</style>
