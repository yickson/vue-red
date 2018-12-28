<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'
import jsPDF from 'jspdf'

export default {
  page: {
    title: 'Documents',
    meta: [{ name: 'description', content: 'Documents' }],
  },
  components: { Layout },
  data(){
    return{
       contratos: [],
         proyecto: 0,
    }
  },
  mounted() {
    this.getMandatos()
  },
  computed: {
    ...authComputed,
  },
  methods: {
    getMandatos() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/inversiones/' +
            this.currentUser.data.usuario.id +
            '/mandatos',
          {
            headers: headers,
          }
        )
        .then(response => {
          this.contratos = response.data.data.contratos
          this.proyecto = response.data.data.contratos[0].proyecto_id
        })
        .catch(error => {
          console.log(error)
        })
    },
    makePDF() {
      console.log('Generando pdf...')

      let doc = new jsPDF()
      // let textmandato = doc.text(textmandato, 10, 10)
      // doc.save('export.pdf')
      let source = window.document.getElementById('mandato')
      console.log(source)
      doc.fromHTML(source, 15, 15, {
        width: 170,
      })
      var user = this.currentUser.data.usuario.nombre + '_' + this.currentUser.data.usuario.app_pat
      doc.save( user + '_Mandato_especial_inversionista.pdf')
    },
  },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-4">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Documentos legales</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="page-header float-right">
          <div class="page-title"/>
        </div>
      </div>
    </div>
    <div class="content mt-3">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="col-md-12">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Nombre contrato</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Descargar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="contrato in contratos">
                        <td><b>{{ contrato.contrato.nombre }}</b></td>
                        <td>{{ contrato.fecha }}</td>
                        <td>{{ contrato.estado.descripcion }}</td>
                        <td class="text-center">
                          <i
                            class="far fa-file-pdf"
                            @click="makePDF"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--MANDATO-->
    <div 
      id="mandato" 
      class="hidden">
      <h2>MANDATO ESPECIAL</h2>
      <p>Nombre :</p>
      <p>{{ this.currentUser.data.usuario.nombre }}</p>

      <p>RUT:</p>
      <p>{{ this.currentUser.data.usuario.rut }}</p>


      <p>Nacionalidad:</p>
      <p>{{ this.currentUser.data.usuario.pais_id }}</p>


      <p>Estado civil:</p>
      <p>{{ this.currentUser.data.usuario.e_civil }}</p>


      <p>Dirección:</p>
      <p>{{ this.currentUser.data.usuario.direccion }}</p>


      <p>Teléfono:</p>
      <p>{{ this.currentUser.data.usuario.telefono }}</p>


      <p>Correo electronico:</p>
      <p>{{ this.currentUser.data.usuario.mail }}</p>


      <p>RedCredito:</p>
      <p/>

      </table>
      <p>
        Por el presente instrumento, vengo en conferir poder especial, pero tan amplio como en derecho se requiera, a
        RedPyme S.A, RUT: 76.400.275-K, para que en mi nombre y representación:
      </p>

      <p>
        Haga entrega en calidad de préstamo de dinero, la suma de $998.000 (NOVECIENTOS NOVENTA
        Y OCHO MIL PESOS), a Comercial e Industrial Molding Glass Ltda, solicitante del Crédito
        individualizado con el RedCrédito: 1e42503f , adjudicado en la plataforma del sitio web
        www.redcapital.cl, ID del proyecto 2733 con el nombre Factura a Atco Sabinco S.A .
      </p>

      <p>
        Cobre y perciba por sí mismo o a través de terceros delegados al efecto la o las cuotas del crédito
        antedicho, que de manera individual o colectiva he otorgado a través de la plataforma del sitio web
        www.redcapital.cl. a Comercial e Industrial Molding Glass Ltda, por el monto de $998.000
        (NOVECIENTOS NOVENTA Y OCHO MIL PESOS) más sus intereses correspondientes y para dividir las cuotas pagadas entre los Inversionistas que
        hemos participado en dicho crédito, en proporción a nuestros aportes. Asimismo, el
        mandatario queda facultado para deducir de dichas sumas de dinero los descuentos acordados en el
        Contrato de Términos y Condiciones de Uso de la Plataforma , por concepto de cobro por uso de
        la plataforma, derechos por la adjudicación del remate, y otros que expresamente se hayan acordado.
      </p>

      <p>
        Aceptar en mi favor toda clase de garantías reales o personales, que constituyan los deudores como
        prendas sin desplazamiento, codeudas, fianzas y avales.
      </p>

      <p>
        Celebrar con el Solicitante contrato de factoring y/o cesión de crédito de factura, en virtud del cual el
        Solicitante asegura el pago del crédito otorgado, facultándolo expresamente a cobrar y percibir
        directamente de los deudores cedidos lo que éstos deban pagar al Solicitante por las facturas
        cedidas, quedando facultado el mandatario para retirar, cobrar y percibir los cheques u otros
        documentos de pago que se extiendan en favor del mandatario, cobrar y percibir su valor y otorgar
        recibos y cancelaciones por los mismos, como asimismo para suscribir todo otro documento que le
        sea requerido para el fiel cumplimiento de este mandato, facultando además a RedPyme S.A.,
        especial y expresamente, para delegar a su vez el presente mandato en un tercero, con idénticas
        facultades a la indicadas en este instrumento.
      </p>

      <p>
        Reciba y, posteriormente, custodie el pagaré suscrito por el Solicitante en respaldo al crédito
        otorgado.
      </p>

      <p>
        Asimismo, a través del presente documento, faculto a RedPyme S.A o a quien éste designe, para efectuar la
        cobranza judicial y extrajudicial de las cuotas que se encuentren en mora, pudiendo especialmente al efecto
        endosar en cobranza, en términos del Art. 22 de la Ley 18.092 sobre Letra de
        Cambio y Pagaré, todos y cada uno del o los pagarés que garanticen el crédito, a fin de proseguir con todas
        las acciones de cobranza que correspondan, incluyendo también la ejecución de las garantías, pudiendo
        asimismo, ceder a terceros los derechos emanados de las garantías constituidas
        en mi favor, otorgar cartas de pago con subrogación en los términos del artículo
        1.611 del Código Civil, traspasando al nuevo acreedor todos los derechos, acciones, privilegios y garantías que
        tenga contra el deudor, así como contra los terceros obligados solidaria o subsidiariamente a la deuda.
      </p>
      <p>
        Este mandato podrá ser delegado total o parcialmente en terceras personas, en especial para los efectos de
        cobrar y percibir, en la o las empresas de cobranza que RedPyme S.A designe y para el envío de los datos del
        deudor moroso a un sistema de información comercial.
      </p>
      <p>
        El presente mandato especial se confiere en carácter gratuito, sin ningún tipo de responsabilidad para la
        mandataria, liberando, desde ya, a RedPyme S.A de toda responsabilidad en la ejecución de este mandato.
        Con todo, la mandataria si tendrá la obligación de rendir cuenta de lo encomendado.
      </p>
      <p>
        Este mandato es irrevocable en los términos del Art. 241 del Código de Comercio, por interesar a quién da
        mandato y a terceros
      </p>
      <p>Mi primer uso del servicio implica que he leído y aceptado todos los términos y condiciones del servicio</p>

      <p>
        Este mandato ha sido firmado electrónicamente por {{ this.currentUser.data.usuario.nombre }}, cédula de identidad
        {{ this.currentUser.data.usuario.rut }}
        el día 30 de Noviembre de 2018, a las 13:31:50
      </p>
    </div>
  </Layout>
</template>

<style>
.fa-file-pdf{
  font-size: 20px;
  cursor: pointer;
}
</style>
