<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import HomeCard from '@components/home-card'
import Chart from '@components/chart'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HomeCard, Chart },
  data() {
    return {
      items: [
        {
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA A LOGISFA',
          amount: '1111111',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 60,
          financiado: '10%',
        },
        {
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA A TECNOLOGIA A',
          amount: '2222222',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 60,
          financiado: '10%',
        },
        {
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA PROMET SERCIOS',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 60,
          financiado: '10%',
        },
        {
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA PROMET SERCIOS',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 60,
          financiado: '10%',
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>

    <!-- BANNER -->
    <div class="row main_home_banner">
      <div class="container">
        <div class="col-xs-12 col-sm-12">
          <h1>LA OTRA FORMA
          ATRACTIVA DE INVERTIR</h1>
        </div>
      </div>
    </div>

    <!-- DESCRIPTION -->
    <div class="row home_description">
      <div class="col-xs-4 col-sm-4 col-md-4">
        <span>13,5%</span>
        <span>Rentabilidad</span>
        <span>promedio anual</span>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <span>Respaldo</span>
        <span> Doble Respaldo</span>
        <span>a nombre del inversionista</span>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
        <span>Diversifica</span>
        <span>Tú decides</span>
        <span>en qué invertir</span>
      </div>
    </div>

    <!-- CARROUSEL -->
    <div
      id="carrousel"
      class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <h2>Proyectos para invertir</h2>
          <button class="btn home_vertodo_btn">ver todos</button>
        </div>
        <HomeCard
          v-for="(item, index) in items"
          :item="item"
          :index="index"
          :key="item.id"/>
      </div>
    </div>

    <!-- DESCRIPCION -->
    <div
      id="quienesSomos"
      class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
          <h2>Somos la nueva forma atractiva de invertir</h2>
          <p class="home_monto_financiado">Monto total financiado (2015 a la Fecha)</p>
          <p class="home_big_amount">28.359 MILLONES</p>
          <p>Monto pagado a inversionistas los últimos 30 días: <span class="home_monto_financiado"><strong>$1.343 Millones</strong></span></p>
        </div>
        <div class="row">
          <Chart />
          <div class="col-xs-12 col-sm-12 col-md-6">
            <p class="entrevista-txt">Entrevista Redcapital CNN</p>
            <video
              class="home_video"
              controls=""
              controlslist="nodownload">
              <source
                src="assets/video/RedcaCNN.mp4"
                type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- GRAFICO -->
    <div
      id="grafico"
      class="container">
      <div class="row">
        <h3 class="text-center">Comparación Rentabilidad Nominal vs Real</h3>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <img
            src="../../../src/assets/images/grafico_rc.png"
            alt=""
            class="img-responsive">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <p>En <span>RedCapital</span> recibes en
          promedio <span>10 veces más</span> que en un
          <span>fondo mutuo tradicional</span></p>
        </div>
      </div>
    </div>

    <!-- PLATAFORMA -->
    <div
      id="plataforma"
      class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <h3 class="text-center">¿POR QUÉ SOMOS LA FORMA ATRACTIVA DE INVERTIR?</h3>
        <div class="container center-block">
          <!-- row 1 -->
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <img
                src="../../../src/assets/images/ico_home1.png"
                alt=""
                class="home_icon">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <p>Somos el Crowdfunding en Chile orientado exclusivamente a las Pymes.
              Llevamos años apoyando a las pequeñas y medianas empresas,
              por lo que conocemos bien la problemática de financiamiento que enfrentan día a día.</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-2">
              <img
                src="../../../src/assets/images/ico_home2.png"
                alt=""
                class="home_icon">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <p>Somos el Crowdfunding en Chile orientado exclusivamente a las Pymes.
              Llevamos años apoyando a las pequeñas y medianas empresas,
              por lo que conocemos bien la problemática de financiamiento que enfrentan día a día.</p>
            </div>
          </div>
          <!-- row 2 -->
          <div class="row second-row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <img
                src="../../../src/assets/images/ico_home3.png"
                alt=""
                class="home_icon">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <p>Somos el Crowdfunding en Chile orientado exclusivamente a las Pymes.
              Llevamos años apoyando a las pequeñas y medianas empresas,
              por lo que conocemos bien la problemática de financiamiento que enfrentan día a día.</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-2">
              <img
                src="../../../src/assets/images/ico_home4.png"
                alt=""
                class="home_icon">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <p>Somos el Crowdfunding en Chile orientado exclusivamente a las Pymes.
              Llevamos años apoyando a las pequeñas y medianas empresas,
              por lo que conocemos bien la problemática de financiamiento que enfrentan día a día.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COMO INVERTIR -->
    <div
      id="comoInvertir"
      class="row">
      <div class="background">
        <div class="container">
          <h4 class="home-title-section">¿Como Invertir?</h4>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <img 
              src="../../../src/assets/images/icon-oportunidad.svg" 
              alt="" 
              class="icon-comoinvertir">
            <p class="title-comoinvertir">Oportunidad</p>
            <p>
              Revisa las oportunidades de inversión y elige el proyecto que más te convenga.</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <img 
              src="../../../src/assets/images/icon-registrate.svg" 
              alt="" 
              class="icon-comoinvertir">
            <p class="title-comoinvertir">Regístrate</p>
            <p>
              Crea una cuenta ingresando tus datos en nuestro formulario, es fácil y rápido.</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <img 
              src="../../../src/assets/images/icon-invierte.svg" 
              alt="" 
              class="icon-comoinvertir">
            <p class="title-comoinvertir">Invierte</p>
            <p>Transfiere el monto a invertir y estará 100% garantizado por una SGR (fondos Corfo) o por una factura. Revisa Garantías y Riesgos</p>
          </div>
        </div>
      </div>
    </div>

    <!-- OPINIONES -->
    <div
      id="testimonios"
      class="row">
      <div class="container">
        <h4 class="text-center">TESTIMONIOS</h4>
        <div class="col-xs-12 col-sm-12 col-md-2">
          <img 
            src="../../../src/assets/images/testimonio1.png" 
            alt="testimonio 1" 
            class="img-responsive testimonio_avatar">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 testimonio-container">
          <p class="Invest_name">VIVIANNE RECHNER - Inversionista</p>
          <p>
            He visto que la rentabilidad en RedCapital.cl es mucho mayor que en fondos mutuos o invertir en propiedades.
            Por otra parte, me aburrí de invertir en monedas o acciones por la variación que estos pueden tener. Hoy un buen fondo mutuo renta un 5,0% anual,
            en RedCapital.cl recibo en promedio un 13,5% anual.</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2">
          <img 
            src="../../../src/assets/images/testimonio2.png" 
            alt="testimonio 1" 
            class="img-responsive testimonio_avatar">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 testimonio-container">
          <p class="Invest_name">RODRIGO RODRIGUEZ - Inversionista</p>
          <p>
            Me gusta que sea una plataforma transparente, donde yo elijo en qué invertir y que cuenta con buenos respaldo para mis inversiones como el aval de SGR o una facturas. Me interesa diversificar invirtiendo en distintas empresas. Además, estamos apoyando a las pymes que son fundamentales para el crecimiento del país.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <img
            src="../../../src/assets/images/sponsors.png"
            alt=""
            class="img-responsive sponsors">
        </div>
      </div>
    </div>

    <div 
      id="dfinanciero" 
      class="row">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <img 
            src="../../../src/assets/images/df_logo.gif" 
            alt="" 
            class="img-responsive">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9">
          <p>“Facilitar el acceso al financiamiento de las Pymes y ser una herramienta de
          inversión con bajo riesgo, es lo que mueve a RedCapital.cl, plataforma de crowdfunding
          – financiamiento colectivo- orientada a la pequeña y mediana empresa.”
          </p>
          <p>-Diario Financiero, Febrero 2017</p>
        </div>
      </div>
    </div>


  </Layout>
</template>

<style>
.main_home_banner {
  height: 450px;
  background-image: url(../../../src/assets/images/banner_bg3.png);
  background-repeat: no-repeat;
}
.main_home_banner h1 {
  width: 90%;
  margin-left: 10px;
  font-size: 5em;
  font-weight: normal;
  font-weight: bold;
  color: #fff;
  text-align: left;
}
.home_description {
  min-height: 120px;
  color: #fff;
  text-align: center;
  background-color: #474747;
}

.home_description span {
  display: block;
  color: #bbb;
}
.home_description span:first-child {
  margin-top: 20px;
  font-size: 1.3em;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}
.home_big_amount {
  color: #ad073d;
  line-height: 0.9em;
  font-size: 5em;
  font-weight: bold;
}
.home_video {
  width: 100%;
}
.home_monto_financiado {
  color: #ad073d;
}
.home_icon {
  display: block;
  margin: 0 auto;
}

#carrousel {
  padding-top: 50px;
  text-align: center;
  background: #f6f6f6;
  min-height: 400px;
  padding-bottom: 50px;
}

#carrousel h2 {
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}
#carrousel .home_vertodo_btn {
  display: block;
  margin: 0 auto;
  color: #fff;
  background: #f47828;
  border: none;
  min-width: 130px;
  border-radius: 2px;
  margin-bottom: 40px;
}

#quienesSomos {
  min-height: 400px;
  padding: 40px 40px 50px 40px;
  background-color: #ffffff;
}

#quienesSomos .entrevista-txt {
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
}

#grafico {
  min-height: 400px;
  background-color: #f6f6f6;
  padding-bottom: 50px;
}

#grafico p {
  font-size: 25px;
  margin-top: 50px;
}
#grafico span {
  color: #ad073d;
  font-size: 30px;
  font-weight: bold;
}
#grafico h3 {
  text-transform: uppercase;
  margin-top: 50px;
  padding-bottom: 50px;
}

#plataforma {
  background-color: #ffffff;
  min-height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}
#plataforma h3 {
  margin-bottom: 50px;
}
#plataforma .second-row {
  margin-top: 60px;
}

/* como invertir */
#comoInvertir {
  background-image: url(../../../src/assets/images/bg_orange.jpeg);
  min-height: 400px;
  background-attachment: fixed;
  color: #ffffff;
}
#comoInvertir .background {
  min-height: 400px;
  background-color: rgba(234, 91, 43, 0.9);
}
#comoInvertir .home-title-section {
  text-transform: uppercase;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 50px;
}
#comoInvertir p {
  margin-top: 20px;
}
#comoInvertir .title-comoinvertir {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
#comoInvertir .icon-comoinvertir {
  width: 60px;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* testimonios */
#testimonios {
  background-color: #ffffff;
  min-height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}
#testimonios h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 100px;
}
#testimonios .sponsors {
  display: block;
  margin: 50px auto 0 auto;
}
#testimonios .Invest_name {
  border-bottom: #f90 1px solid;
  font-weight: bold;
  font-size: 1.1em;
}
.testimonio-container {
  background: url(../../../src/assets/images/quote.png) no-repeat right top;
}
.testimonio_avatar {
  margin: 0 auto;
}

/* diario financiero*/
#dfinanciero {
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fce4bf;
  min-height: 120px;
}
#dfinanciero p {
  margin-top: 15px;
}
</style>
