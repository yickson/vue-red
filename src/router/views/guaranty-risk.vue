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
      showAccordion: [true, false, false, false],
    }
  },
  methods: {
    toggleAccordion(index) {
      if (this.showAccordion[index]) {
        this.$set(this.showAccordion, index, false)
      } else {
        this.showAccordion = this.showAccordion.map((v, i) => i === index)
      }
    },
  },
}
</script>

<template>
  <Layout class="faq">
    <div class="row">
      <div class="col-xs-12 col-md-12  col-md-12">
        <h2 class="text-center title-faq">GARANTÍAS Y RIESGOS</h2>
      </div>
    </div>
    <div class="row container-faq">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <input
              type="text"
              class="form-control filter-question"
              placeholder="Ingrese su pregunta">
          </div>
        </div>
        <section>
          <div
            class="question-container"
            role="button"
            @click="toggleAccordion(0)">
            <i class="fas fa-angle-right"/>
            <p>¿Qué es RedCapital?</p>
          </div>
          <div
            class="question-container"
            role="button"
            @click="toggleAccordion(1)">
            <i class="fas fa-angle-right"/>
            <p>¿Cuáles son los requisitos para invertir en RedCapital?</p>
          </div>
          <div
            class="question-container"
            role="button"
            @click="toggleAccordion(2)">
            <i class="fas fa-angle-right"/>
            <p>¿Cuáles son los riesgos?</p>
          </div>
          <div
            class="question-container"
            role="button"
            @click="toggleAccordion(3)">
            <i class="fas fa-angle-right"/>
            <p>¿RedCapital garantiza las inversiones?</p>
          </div>
        </section>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <collapse v-model="showAccordion[0]">
          <div
            class="well"
            style="margin-bottom: 0">
            <p>¿Qué es RedCapital?</p>
            Es una plataforma web tipo marketplace donde usuarios pueden elegir
            entre distinta opciones de inversión para obtener atractivas rentabilidades
            con riesgo acotado. Las opciones de inversión disponibles son solicitudes
            de créditos con garantía.
          </div>
        </collapse>

        <collapse v-model="showAccordion[1]">
          <div
            class="well"
            style="margin-bottom: 0">
            <p> ¿Cuáles son las garantías para los inversionistas?</p>
            <p class="subtitle-well"> a) Para el caso de créditos avalados por SGR:</p>

            Pagaré de la empresa solicitante del crédito a nombre del inversionista.
            Certificado de fianza a nombre del inversionista emitido por la SGR.
            <p class="subtitle-well">b) Para el caso de Factoring:</p>

            Mandato para generar pagaré a nombre del inversionista.
            Factura cedida a los Inversionistas. Por lo tanto, el pagador está obligado a pagar
            a los inversionistas el monto total de dicha factura (la factura es título ejecutivo).
            La Factura primero es cedida electrónicamente a RedCapital.
          </div>
        </collapse>

        <collapse v-model="showAccordion[2]">
          <div
            class="well"
            style="margin-bottom: 0">
            <p> ¿Cuáles son los riesgos?</p>
            Al invertir en créditos -aunque estén garantizados-, siempre hay riesgos mínimos:
            <p class="subtitle-well"> a) Créditos avalados por SGR (Sociedad de Garantía Reciproca),</p>

            Riesgo que la Pyme no pague: está cubierto por el certificado de la SGR (Corfo).
            Riesgo que la SGR quiebre y por ende no se pueda ejecutar el certificado de fianza: Esto se minimiza al informarse:
            Estados de Resultados de la SGR y de sus fondos.
            Clasificación de riesgo de cada SGR donde se invertirá.
            www.icrchile.cl


            En RedCapital sólo publicamos opciones de inversión con categoría A (máxima clasificación). Ésta puede cambiar en el tiempo.
            Cualquier pregunta, no dudes en contáctanos a nuestro email; contacto@redcapital.cl o llámanos al 2 2333346
            <p class="subtitle-well">b) Para el caso de Factoring:</p>

            Existen 8 días legales que la empresa pagadora de la factura puede retractarse del de este pago. Es el riesgo que tienen todas las operaciones de factoring del país. En RedCapital verificamos que pagarán las facturas que publicamos, es decir, que la empresa que recibió la factura está de acuerdo con el servicio o producto entregados.
            Riesgo que la empresa pagadora haga descuentos a la factura. Este riesgo también se acota verificando con el pagador que no realizará descuentos.
            Riesgo que la empresa pagadora quiebre. Por ello, es fundamental ver cuál es el pagador de la factura. RedCapital siempre informa quien es el pagador, publicando su RUT. Además, en RedCapital sólo trabajamos con Buenos Pagadores, es decir, empresas grandes o empresas que han tenido históricamente muy buen comportamiento de pago. Por otra parte, en caso que el pagador quiebre,
            también tenemos un pagaré de la empresa que nos cedió la factura.
          </div>
        </collapse>

        <collapse v-model="showAccordion[3]">
          <div
            class="well"
            style="margin-bottom: 0">
            <p>¿RedCapital garantiza las inversiones?</p>
            No, RedCapital es una plataforma, donde los usuarios (inversionistas)  deciden en qué invertir. Nuestra empresa entrega constantemente toda la información disponible a nuestros inversionistas para que puedan tomar las mejores decisiones, de manera informada y responsable.
            En este contexto, la compañía no se hace responsable de las pérdidas que puedan generar estas inversiones.
            Por otra parte, los resultados pasados no garantizan rentabilidades futuras.
          </div>
        </collapse>
      </div>
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
.title-faq {
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}
.container-faq {
  display: block;
  background-color: #ffffff;
  padding: 20px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  margin-top: 60px;
}
.question-container {
  margin-bottom: 12px;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
}
.question-container span {
  display: inline;
  color: #f47828;
  margin-right: 10px;
}
.question-container .fa-angle-right {
  color: #f47828;
  font-size: 20px;
  margin-right: 10px;
}
.filter-question {
  height: 40px;
  box-shadow: none;
  margin-bottom: 40px;
  width: 100%;
  border-radius: 2px;
}
.well p:first-child {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
}
.subtitle-well {
  font-weight: bold;
}
.question-container p {
  color: #f47828;
  display: inline;
}
.container-faq h2 {
  margin-bottom: 50px;
}
@media screen and (max-width: 560px) {
  .container-faq {
    padding: 20px;
  }
}
</style>
