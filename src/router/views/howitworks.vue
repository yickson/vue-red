<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import HomeCard from '@components/home-card'
import Chart from '@components/chart'

export default {
  page: {
    title: '¿Como funciona?',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HomeCard, Chart },
  data() {
    return {}
  },
  methods: {},
}
</script>

<template>
  <Layout>

    <!-- BANNER -->
    <div class="row howitworks_banner">
      <div class="container">
        <div class="col-xs-12 col-sm-12">
          <h1>LA OTRA FORMA ATRACTIVA DE INVERTIR</h1>
        </div>
      </div>
    </div>

    <!--COMO INVERTIR -->
    <div
      id="howtoinvest"
      class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 text-center">
        <h2 class="title">CÓMO INVERTIR PASO A PASO</h2>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico"><span class="glyphicon glyphicon-search"/></div>
                <p class="card-title">SELECCIONA</p>
                <p>Revisa las oportunidades de inversion y elige una. Puedes buscar y filtrar por la que mas te convenga.

                Las rentabilidad publicadas (TIR) son anuales para que puedas comparar proyectos de distinta duración.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico"><span
                  class="glyphicon glyphicon-log-in"/></div>
                <p class="card-title">TRANSFIERE</p>
                <p>Transfiere el monto a invertir. Si no se concretara la inversión, en un plazo máximo de 48 hrs hábiles recibirás tu dinero de vuelta.

                IMPORTANTE: Se adjudica el primero en Transferir</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico"><span class="glyphicon glyphicon-export"/></div>
                <p class="card-title">RENTABILIDAD</p>
                <p>Recibirás en tu cuenta corriente la rentabilidad de tu inversión (todos los meses o al final del período, según la inversión elegida).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COMO FUNCIONA -->
    <div
      id="howitworks"
      class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 background text-center">
        <div class="container">
          <h2 class="title">¿CÓMO FUNCIONA?</h2>
          <p>
            Las empresas solicitan un credito y usted puede financiarlo en conjunto otros inversionistas.
            Nosotros nos encargamos de la cobranza, reportes y análisis de riesgo.
          </p>
          <img
            src="../../../src/assets/images/chart3.png"
            alt=""
            class="img-responsive">
          <p>En RedCapital publicamos sólo operaciones que pasaron nuestro filtro (revisa riesgo y garantías).
          RedCapital realiza la cobranza y transfiere a tu cuenta. En nuestro portal puedes revisar el estado de cada inversión.</p>
        </div>
      </div>
    </div>

    <!--ALTERNATIVAS -->
    <div
      id="alternatives"
      class="row">
      <div class="container">
        <h2 class="text-center title">ALTERNATIVAS PARA INVERTIR O RESERVAR</h2>
        <div class="col-xs-12 col-sm-12 col-md-4">
          <div class="section-card">
            <div class="container-ico"><i class="far fa-clock"/></div>
            <p class="card-title">SÓLO DERECHOS</p>
            <p>De esta forma reservaremos tu cupo. Te recordamos que gana la primera persona en reservar
            un cupo y transferir derechos. <strong>Te avisaremos cuándo debes transferir el saldo de tu inversión.
            Desde ahí tienes 1 día para hacerlo, si no pierdes los derechos.</strong></p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4">
          <div class="section-card">
            <div class="container-ico">
              <i class="fas far fa-clipboard-check"/>
            </div>
            <p class="card-title">TRANSFERENCIA TOTAL</p>
            <p>Reservaremos tu cupo en forma inmediata. El beneficio es que no tendrás que volver para transferir. Tu rentabilidad real bajará un poco si la fecha de cierre publicada es muy lejana.</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4">
          <div class="section-card">
            <div class="container-ico">
              <i class="far fa-star"/>
            </div>
            <p class="card-title">CLUB</p>
            <p>Al ser parte del Club tienes la opción reservar una inversión y sólo transferir el total una vez que esté cerrado el remate. Te avisaremos cuándo debes transferir tu inversión. Desde ahí tienes 1 día para hacerlo, si no pierdes tu membresía al Club. (No es necesario que seas parte del club para invertir)</p>
          </div>
        </div>
        <p class="alternative-notcard-txt">No estarán disponibles las opciones de Reserva (Club o Derecho) pasada la fecha de cierre publicada. Es decir, cuando estén todas las garantías y la fecha comprometida con el cliente se haya cumplido. Esto porque en muchos casos acordamos con la pyme pagar posteriormente a la fecha de cierre los saldos correspondientes. Por lo tanto, el proyecto puede seguir abierto y recaudamos los dineros faltantes en el tiempo que sea factible.</p>
      </div>
    </div>

    <!-- COMO FUNCIONA -->
    <div
      id="goodtoknow"
      class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 background text-center">
        <h2 class="title">ES BUENO SABERLO</h2>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico">
                  <i class="fas far fa-info"/>
                </div>
                <p class="card-title">RENTABILIDAD</p>
                <p>La rentabilidad que podría recibir aumenta con el Riesgo y el Plazo.

                Ejemplo, una operación de factoring a 2 meses :
                TIR 10,0% Pagador de Muy Bajo Riesgo
                TIR 15,0% Riesgo Medio Alto

                Si bien el deudor pasó los filtros de Riesgo es una empresa mediana o pequeña por lo tanto podría tener problemas de liquidez en el futuro</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico">
                  <i class="far fa-user"/>
                </div>
                <p class="card-title">RENTABILIDAD</p>
                <p>Perfil de riesgo Inversionista

                Si no quieres tomar NADA de RIESGO no te recomendamos este tipo de inversiones

                Si estas dispuesto a asumir un poco riesgo invierte en operaciones con rentabilidad menor a 11% o en Leasing inmobiliario (que pueden rentar más al ser menos líquidos)

                Si quiere más riesgo te recomendamos diversificar en varias operaciones.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="section-card">
                <div class="container-ico">
                  <i class="far fa-thumbs-up"/>
                </div>
                <p class="card-title">RENTABILIDAD</p>
                <p>Recibirás en tu cuenta corriente la rentabilidad de tu inversión (todos los meses o al final del período, según la inversión elegida).Diversifica

                Te recomendamos invertir en operaciones publicadas como máximo: El 30% de tus ahorros.
                Diversificar al menos en 5 operaciones si tienen bajo riesgo o en 10 operaciones si son más riesgosas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="minimum">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <h2 class="title">MÍNIMO A INVERTIR $1.000.000</h2>
          <p>Si posees cuenta bancaría ya estás listo para invertir.</p>
          <p class="txt-detail-cost">Detalle de costos por uso de plataforma</p>
          <div class="info-icon">
            <i class="fas fa-info"/>
          </div>
          <div class="cont-calculo">
            0,30% x Monto del préstamo x Nº de meses + IVA
          </div>
          <p class="highlighted-text">En la Rentabilidad (TIR) publicada ya están cobrados los costos, para que sepas exacta cuánto recibirás.</p>
          <p>En algunos casos realizamos descuentos para dejar más atractiva la Rentabilidad a los inversionistas.</p>
          <p><strong>Ejemplo:</strong></p>
          <p>
            Si inviertes $1.000.000, en 12 Meses a una tasa de 15% anual
            Deberás pagar por participar: 0,30%*1.000.000*12= $36.000 + IVA</p>
          <a href="/invertir">
            <button class="btn">INVERTIR AHORA
              <i class="fas fa-arrow-circle-right"/>
            </button>
          </a>
        </div>
      </div>
    </div>

  </Layout>
</template>

<style>
.howitworks_banner {
  height: 450px;
  background-image: url(../../../src/assets/images/bg_invest.jpg);
  background-repeat: no-repeat;
}
.howitworks_banner h1 {
  width: 90%;
  margin-left: 10px;
  font-size: 5em;
  font-weight: normal;
  font-weight: bold;
  color: #fff;
  text-align: left;
}
@media only screen and (max-width: 560px) {
  .howitworks_banner h1 {
    font-size: 2.5em;
  }
}

/* COMO INVERTIR */
#howtoinvest {
  padding: 40px 0 40px 0px;
  background-color: #ffffff;
  min-height: 450px;
}
#howtoinvest .title {
  font-size: 30px;
  color: #ad073d;
  font-weight: bold;
  margin-bottom: 40px;
}
.section-card {
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-top: 1px solid #dddddd2e;
}
.section-card .card-title {
  font-weight: bold;
  color: #ff9302;
  font-size: 20px;
}
.section-card p {
  margin: 10px;
}
.container-ico {
  background: #ff9302;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 26px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -50px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.container-ico .glyphicon,
.far {
  color: #ffffff;
  font-size: 26px;
}
/* como funciona */
#howitworks {
  background-image: url(../../../src/assets/images/bg_orange.jpeg);
  min-height: 400px;
  background-attachment: fixed;
  color: #ffffff;
}
#howitworks h2 {
  color: #ffffff;
  margin-bottom: 50px;
  font-weight: bold;
}
#howitworks p {
  margin: 30px 0 30px;
}
#howitworks .background {
  min-height: 400px;
  background-color: rgba(234, 91, 43, 0.9);
  padding: 40px 0 40px 0;
}

#howitworks img {
  display: block;
  margin: 40px auto;
}

/* ALTERNATIVAS */
#alternatives {
  padding: 40px 0 40px 0;
  background-color: #ffffff;
  min-height: 400px;
}
#alternatives .alternative-notcard-txt {
  margin: 40px 0 40px 0;
}
#alternatives .title {
  font-size: 30px;
  color: #ad073d;
  font-weight: bold;
  margin-bottom: 40px;
}

/*BUENO SABERLO */
#goodtoknow {
  background-image: url(../../../src/assets/images/bg_orange.jpeg);
  min-height: 400px;
  background-attachment: fixed;
}
#goodtoknow .title {
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 40px;
}
#goodtoknow .background {
  min-height: 400px;
  background-color: #c4c4c46e;
  padding: 40px 0 40px 0;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
#goodtoknow .background .section-card {
  background: #ffffff;
  box-shadow: none;
}

/* minimo a invertir */
#minimum {
  background-color: #ffffff;
  padding: 40px 300px;
  text-align: left;
}
#minimum .title {
  font-size: 30px;
  color: #333;
  font-weight: bold;
  margin-bottom: 40px;
}
#minimum .txt-detail-cost {
  background-color: #07ad30;
  color: #ffffff;
  margin-bottom: -31px;
  font-size: 16px;
  border-radius: 2px;
  padding: 5px;
}

#minimum .info-icon {
  position: relative;
  top: 44px;
  right: 11px;
  color: white;
  background-color: #07ad30;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  padding: 4px 12px;
  font-size: 14px;
}

#minimum .cont-calculo {
  border: 1px solid #07ad30;
  color: #333;
  border-left: 5px solid #07ad30;
  border-radius: 2px;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
#minimum .btn {
  background-color: #ff9302;
  color: #ffffff;
  height: 37px;
  border-radius: 2px;
  width: 160px;
  margin: 30px auto;
  transform: translateZ(0px);
  position: relative;
}
#minimum .btn:hover {
  background-color: #ad073d;
  transition: all 300ms ease;
}
#minimum .highlighted-text {
  font-weight: bold;
  border-radius: 2px;
  margin-top: 20px;
  color: #07ad30;
}

@media screen and (max-width: 1020px) {
  #minimum {
    padding: 20px;
  }
}
</style>
