<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'
import jsPDF from 'jspdf'

export default {
  page: {
    title: 'Mandatos',
    meta: [{ name: 'description', content: 'Mandatos' }],
  },
  components: { Layout,  },
  data() {
    return {
      contratos: [],
      proyecto: 0,
      gettedproyect: [],
    }
  },
  mounted() {
    this.getMandatos()
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
          this.getDetalleProyecto()
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDetalleProyecto() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/proyecto/' + this.proyecto, {
          headers: headers,
        })
        .then(response => {
          console.log(response)
          this.gettedproyect = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    makePDF() {
      console.log('Generando pdf...')

      let doc = new jsPDF()
      let source = window.document.getElementById('mandato',  10, 10)
      console.log(source)
      doc.fromHTML(source, 15, 15, {
        width: 170,
      })
      doc.save('export.pdf')
    },
  },
  computed: {
    ...authComputed,
  },
}
</script>


<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-8">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Inversiones - mandatos</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
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
                        <th>Nombre contrato</th>
                        <th>ID Proyecto</th>
                        <th>Nombre Proyecto</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Descargar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="contrato in contratos">
                        <td>{{ contrato.contrato.nombre }}</td>
                        <td>{{ gettedproyect.id }}</td>
                        <td>{{ gettedproyect.nombre }}</td>
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

    <!-- DOCUMENTO -->
    <div
      id="contrato"
      class="hidden">
      <h1>CONTRATO DE TÉRMINOS Y CONDICIONES DE USO DE REDCAPITAL PARA EL INVERSIONISTA.</h1>
      <p>
        En Santiago, a 05 de Octubre de 2018 se suscribe el presente Contrato (en adelante, el "Contrato del
        Inversionista" o "el Contrato"), entre por una parte, RedCapital S.A., RUT: 76.400.275-K (en adelante,
        "RedCapital"), y, por la otra, don/ña {{ this.currentUser.data.usuario.nombre }}, cédula nacional de identidad número
        {{ this.currentUser.data.usuario.rut }}, (en adelante, "el Inversionista" o "el Usuario", indistintamente), en virtud del cual se
        establece y regula las definiciones y antecedentes previos al uso de RedCapital en que el Inversionista
        utiliza los servicios prestados por RedCapital a través de su plataforma www.redcapital.cl (en adelante
        también el sitio redcapital.cl), conforme a las clausulas del presente Contrato.</p>

      <p>PRIMERO: En virtud de presente instrumento se establecen y regulan los términos y condiciones en que
      el Inversionista utiliza los servicios prestados por RedCapital a través de su plataforma www.redcapital.cl
      -en adelante también el Sitio o redcapital.cl. El Inversionista declara haber leído y aceptado, previamente,
      el documento llamado "DEFINICIONES Y ANTECEDENTES PREVIOS AL USO DE
      REDCAPITAL.CL", disponible en
      www.redcapital.cl, el cual se entiende formar parte del presente documento.</p>

      <p>SEGUNDO: OBJETO DEL CONTRATO. El presente Contrato tiene por objeto regular la relación entre
      RedCapital y el Usuario que se ha registrado como tal en www.redcapital.cl, definiendo los términos y
      condiciones de uso del Sitio y de los servicios que RedCapital provee al Solicitante que participa en él.
      Con todo, se deja expresa constancia que es de la esencia de este contrato, entender y aceptar desde ya que
      la suscripción de operaciones entre Inversionistas y Solicitantes, con ocasi?n de la infomación y adjudicación
      disponible en la Plataforma, es un acto jur?dico que los vincula directa y estrictamente sólo a Solicitantes e
      Inversionistas, en los términos que ellos libremente convengan y de lo cual dar?n cuenta los documentos
      propios de una operaci?n de cr?dito de dinero, esencialmente, pagar?s, constitución de
      garantías, otorgamiento de mandatos, etc., de forma tal que la suscripci?n del presente contrato justifique
      su eventual incumplimiento que no genera responsabilidad alguna para RedCapital en la ejecución y
      cumplimiento del contrato de mutuo, el cual se rige por las normas especiales de la Ley número dieciocho
      mil diez que Establece normas para las operaciones de crédito y otras obligaciones de dinero que indica,
      la Ley diecinueve mil novecientos ochenta y tres, y las normas contenidas en el Código Civil y de
      Comercio, no siendo por tanto aplicables las disposiciones de la Ley número diecinueve mil cuatrocientos
      noventa y seis sobre Protección de los Derechos del Consumidor.</p>

      <p>TERCERO: ACEPTACIÓN DEL CONTRATO. Mediante el checkeo de la opción "He leído y aceptado
      los términos y Condiciones de Redcapital.cl", ubicado al final del Contrato incluido en la página web
      www.redcapital.cl, el Usuario reconoci? y declar? haber le?do, comprendido y aceptado íntegramente el
      texto del Contrato en todas sus partes, aceptando ser regido por todos sus términos y condiciones, y a su
      vez, por las leyes y regulaciones aplicables. Este Contrato será vinculante y obligará a las partes y en la
      forma señalada, íntegramente se entiende formar parte del presente instrumento. Si el Usuario no acepta el
      contrato contenido en la Web y el presente Contrato, o sus posteriores modificaciones, no estará
      facultado para acceder y utilizar los servicios que RedCapital ofrece a los Inversionistas ni a la infomación
      disponible para ellos en el Sitio. A su vez, el Usuario comprende y acepta regirse por el Contrato de Uso
      del Sitio aceptado previamente y por todas las políticas de RedCapital publicadas en el Sitio, las cuales
      podrán ser modificadas por RedCapital las veces que este lo estime conveniente y a su sola discreción,
      previa comunicación de las mismas a sus Usuarios por cualquier medio que produzca fe.</p>

      <p>CUARTO: MANDATO Con la finalidad de dar cumplimiento a las obligaciones y derechos que se
      estructuran de los contratos se?alados en las cláusulas anteriores, por el presente instrumento, el
      inversionista, otorga a RedCapital
      S.A., un mandato especial amplio e irrevocable en los términos de los art?culos doscientos treinta y tres y
      siguientes del C?digo de Comercio, con el objeto de que este, en su nombre y representación, respecto de
      operaciones realizadas en la plataforma o vía presencial y previa autorización expresa del mandante
      realizada vía correo electrónico, mediante sus mandatarios, pueda: a) Comprar y vender, toda clase de
      bienes Inmuebles o muebles corporales o incorporales, derechos sobre éstos, valores mobiliarios,
      acciones, debentures, bonos u otros y celebrar contratos de promesa sobre los bienes enumerados y otros;
      b) Dar en arrendamiento toda clase de bienes, sean estos corporales e incorporales, raíces o muebles,
      incluyendo el arrendamiento con opción de compra; c) Suscribir contratos de mutuo, girar letras de cambio
      y todo instrumento p?blico, privado o mercantil que fuere pertinente para perfeccionar, documentar o
      garantizar operaciones aceptadas expresamente por el inversionista y que sean a favor de éste, en calidad
      de acreedor y efectuar endosos en cobranza de los documentos recibidos a favor del inversionista; d) ceder
      créditos en cobranza y aceptar cesiones de crédito, sean estos nominativos, a la orden o al portador y, en
      general, efectuar toda clase de operaciones con documentos mercantiles, valores mobiliarios, efectos
      públicos o de comercio, tales como operaciones de factoring nacional o internacional. e) Aceptar daciones
      en pago, pagos por subrogación y por consignación, exigir, entregar o recibir rendiciones de cuentas, cobrar
      y percibir cuanto se adeude a la inversionista, alzar y cancelar toda clase de prendas, hipotecas y cualquier
      otra caución o gravamen constituido a favor del inversionista en operaciones realizadas vía el mandatario y
      previo pago total de las obligaciones caucionadas; f) Cobrar judicial y extrajudicialmente todo cuanto se
      adeude al Inversionista por operaciones realizadas vía el mandatario, por cualquier persona, natural o
      jurídica, incluido el Fisco, sea en dinero o en otra clase de bienes o valores, firmar recibos, finiquitos y
      cancelaciones y retirar documentos, cheques y otros valores pertenecientes al mandante para lo cual el
      Inversionista otorga las facultades de ambos incisos del art?culo séptimo del Código de Procedimiento
      Civil, las que se dan por expresa e ?ntegramente reproducidas; g) Otorgar mandatos especiales,
      judiciales o extrajudiciales, revocarlos y delegar en parte las facultades conferidas, quedando
      expresamente facultados para autorizar la subdelegación, pudiendo reasumirlas en cualquier momento; h)
      Suscribir por sí solo los contratos de factoring nacional e internacional, de cesión de créditos y de mandato
      especial, asociado a las operaciones aceptadas por el Inversionista; i) Aceptar y recibir bienes en hipoteca,
      incluso con cláusula de garantía general, recibir en prenda bienes muebles, valores mobiliarios, derechos,
      acciones y dem?s cosas corporales e incorporales sea en prenda civil, mercantil, bancaria, agraria,
      industrial, warrants, de cosa mueble vendida a plazo u tras especiales, aceptar cláusulas penales y fijar
      multas solo en favor del Inversionista y, en general, énica y exclusivamente aceptar toda clase de
      cauciones, reales o personales, y toda clase de garantías a favor del mandante; j) Dar en arrendamiento
      toda clase de bienes muebles adquiridos por el Inversionista con el fin de realizar operaciones de Leasing,
      incluyendo el arrendamiento con opción de compra y; k) Representar a la sociedad ante toda clase de
      autoridades administrativas, municipales, organismos de derecho público, fiscales o semifiscales,
      Registro Civil, municipalidades u otras autoridades con el único fin de poder realizar todas las
      inscripciones u otros trámites necesarios para las operaciones de Leasing que realice el Inversionista. El
      presente cometido es gratuito, de manera que el mandatario está liberado de toda responsabilidad de la
      obligación de rendir cuenta, entendiéndose que son suficientes las informaciones y rendiciones que resulten
      de las liquidaciones que el mandatario le efect?e. El mandatario podrá renunciar el presente mandato,
      previa autorización, por escrito del mandante, en cualquier tiempo, sin necesidad de expresar causa o
      motivo, dando un simple aviso por escrito, con una anticipación de quince d?as hábiles bancarios.</p>

      <p>QUINTO: GASTOS Todos los gastos del presente contrato, serán de cargo exclusivo de RedCapital. En
      caso de existir gastos adicionales relativos a la ejecución del mandato éstos serán informados previamente
      al mandante, para que este pueda tomar una decisión informada y, en caso de ser aceptados,
      serán de cargo exclusivo del mandante.</p>

      <p>SEXTO: PERSONERIA: La personería de don Gustavo Anania Garib para actuar en representación de
      RedCapital S.A., consta de la escritura pública de fecha veinticinco de mayo de dos mil dieciséis,
      otorgada en la Notaría Pública de Santiago de don Alberto Moz? Aguilar, la que no se inserta por ser
      conocidas de las partes y el notario que autoriza.
      </p>
      <p>
        GUSTAVO ADOLFO ANANIA GARIB C.I.N 9.977.994-2</br>
        p.p. REDCAPITAL S.A
      </p>

      <p>
        FELIPE RODRIGO ZANBERK W ALTER C.I.N 15.641.594-4</br>
        p.p. REDCAPITAL S.A
      </p>

      <p>
        Este contrato ha sido firmado electrónicamente por {{ this.currentUser.data.usuario.nombre }}, cédula de identidad {{ this.currentUser.data.usuario.rut }} el día 05 de
        Octubre de 2018, a las 11:30:33
      </p>
    </div>

    <!--MANDATO-->
    <div 
      id="mandato" 
      class="hidden">
      <table>
        <tr>
          <td>Nombre</td>
          <td>{{ this.currentUser.data.usuario.nombre }}</td>
        </tr>
        <tr>
          <td>RUT</td>
          <td>{{ this.currentUser.data.usuario.rut }}</td>
        </tr>
        <tr>
          <td>Nacionalidad</td>
          <td>{{ this.currentUser.data.usuario.pais_id }}</td>
        </tr>
        <tr>
          <td>Estado civil</td>
          <td>{{ this.currentUser.data.usuario.e_civil }}</td>
        </tr>
        <tr>
          <td>Dirección</td>
          <td>{{ this.currentUser.data.usuario.direccion }}</td>
        </tr>
        <tr>
          <td>Teléfono</td>
          <td>{{ this.currentUser.data.usuario.telefono }}</td>
        </tr>
        <tr>
          <td>Correo electronico</td>
          <td>{{ this.currentUser.data.usuario.mail }}</td>
        </tr>
        <tr>
          <td>RedCredito</td>
          <td/>
        </tr>
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
.fa-file-pdf {
  font-size: 20px;
}
</style>
