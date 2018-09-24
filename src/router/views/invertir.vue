<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import HomeCard from '@components/home-card'
import Filters from '@components/filters'

export default {
  page: {
    title: 'Invertir',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HomeCard, Filters },
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
          name: 'FACTURA A TECN',
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
          name: 'FACTURA PROMET ',
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
          name: 'FACTURA A FAS SA',
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
          name: 'FACTURA A FAS SA',
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
          name: 'FACTURA A FAS SA',
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
          name: 'FACTURA A FAS SA',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 20,
          financiado: '10%',
        },
        {
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA A FAS SA',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 10,
          financiado: '10%',
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2 filtros">
        <Filters/>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-10">
        <HomeCard
          v-for="(item, index) in items"
          :item="item"
          :index="index"
          :key="item.id"/>
      </div>
    </div>
    <div class="row sponsors-cont">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <img
          src="../../../src/assets/images/sponsors.png"
          alt=""
          class="img-esponsors img-responsive">
      </div>
    </div>
  </Layout>
</template>

<style>
.filtros {
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  height: 1200px;
  background-color: #ffffff;
}
.sponsors-cont {
  background: #ffffff;
  margin-top: 0px;
}
.img-esponsors {
  display: block;
  margin: 0px auto 0 auto;
}
.pagination {
}
</style>
