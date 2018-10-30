<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'PersonalInformation',
    meta: [{ name: 'description', content: 'PersonalInformation' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-4">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Datos Personales</h1>
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
                <div class="col-md-2">
                  &nbsp;
                </div>
                <div class="col-md-8">
                  <table 
                    class="edit_form_table" 
                    border="0">
                    <tbody>
                      <tr>
                        <td>Rut</td>
                        <td><input 
                          id="rut" 
                          style="margin-bottom: 2px;" 
                          disabled="disabled" 
                          required="required" 
                          type="text" 
                          name="rut" 
                          class="numbersOnly form-control" 
                          value="16.047.354-1" 
                          onKeyPress="return isNumberKey(event)"></td>
                      </tr>
                      <tr>
                        <td>*Nombre</td>
                        <td><input 
                          id="nombre_user" 
                          style="margin-bottom: 2px;" 
                          required="required" 
                          type="text" 
                          name="nombre_user" 
                          value="Arturo" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>*Apellido Paterno</td>
                        <td><input 
                          id="appat" 
                          style="margin-bottom: 2px;" 
                          required="required" 
                          type="text" 
                          name="appat" 
                          value="Buschmann" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>*Apellido Materno</td>
                        <td><input 
                          id="appmat" 
                          style="margin-bottom: 2px;" 
                          required="required" 
                          type="text" 
                          name="appmat" 
                          value="Oyarzun" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>*Calle - Domicilio - Número </td>
                        <td style="margin-bottom: 2px;"><input 
                          id="domicilio" 
                          type="text" 
                          required="required" 
                          value="Huérfanos" 
                          name="domicilio" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td align="left">*Región</td>
                        <td align="left">
                          <select 
                            id="region" 
                            class="form-control selcls" 
                            required 
                            name="region" 
                            onChange="cargaContenido(this.id)"><option value="0">Elige Región</option><option value="1">Tarapacá</option><option value="2">Antofagasta</option><option value="3">Atacama</option><option value="4">Coquimbo</option><option value="5">Valparaiso</option><option value="6">Libertador Gral. Bernardo O Higgins</option><option value="7">Maule</option><option value="8">Bío Bío</option><option value="9">Araucanía</option><option value="10">Los Lagos</option><option value="11"> Aisén del Gral. Carlos Ibáñez del Campo</option><option value="12">Magallanes y de la Antártica Chilena</option><option 
                              value="13" 
                              selected="">Metropolitana de Santiago</option><option value="14">Los Ríos</option><option value="15">Arica y Parinacota</option></select>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">*Comuna</td>
                        <td align="left">
                          <select 
                            id="lista_comuna" 
                            class="form-control selcls" 
                            style="margin-bottom: 2px;" 
                            name="lista_comuna">
                            <option value="0">Elige Comuna </option>                 <option 
                              value="13101" 
                              selected="">Santiago</option>
                            <option value="13102">Cerrillos</option>
                            <option value="13103">Cerro Navia</option>
                            <option value="13104">Conchalí</option>
                            <option value="13105">El Bosque</option>
                            <option value="13106">Estaciín Central</option>
                            <option value="13107">Huechuraba</option>
                            <option value="13108">Independencia</option>
                            <option value="13109">La Cisterna</option>
                            <option value="13110">La Florida</option>
                            <option value="13111">La Granja</option>
                            <option value="13112">La Pintana</option>
                            <option value="13113">La Reina</option>
                            <option value="13114">Las Condes</option>
                            <option value="13115">Lo Barnechea</option>
                            <option value="13116">Lo Espejo</option>
                            <option value="13117">Lo Prado</option>
                            <option value="13118">Macul</option>
                            <option value="13119">Maipú</option>
                            <option value="13120">Ñuñoa</option>
                            <option value="13121">Pedro Aguirre Cerda</option>
                            <option value="13122">Peñalolén</option>
                            <option value="13123">Providencia</option>
                            <option value="13124">Pudahuel</option>
                            <option value="13125">Quilicura</option>
                            <option value="13126">Quinta Normal</option>
                            <option value="13127">Recoleta</option>
                            <option value="13128">Renca</option>
                            <option value="13129">San Joaquín</option>
                            <option value="13130">San Miguel</option>
                            <option value="13131">San Ramón</option>
                            <option value="13132">Vitacura</option>
                            <option value="13201">Puente Alto</option>
                            <option value="13202">Pirque</option>
                            <option value="13203">San José de Maipo</option>
                            <option value="13301">Colina</option>
                            <option value="13302">Lampa</option>
                            <option value="13303">Tiltil</option>
                            <option value="13401">San Bernardo</option>
                            <option value="13402">Buin</option>
                            <option value="13403">Calera de Tango</option>
                            <option value="13404">Paine</option>
                            <option value="13501">Melipilla</option>
                            <option value="13502">Alhué</option>
                            <option value="13503">Curacaví</option>
                            <option value="13504">María Pinto</option>
                            <option value="13505">San Pedro</option>
                            <option value="13601">Talagante</option>
                            <option value="13602">El Monte</option>
                            <option value="13603">Isla de Maipo</option>
                            <option value="13604">Padre Hurtado</option>
                            <option value="13605">Peñaflor</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"><br>
                          <strong>Los siguientes campos son opcionales</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Genero</td>
                        <td><select 
                          name="genero" 
                          tabindex="0" 
                          class="form-control selcls" 
                          style="margin-bottom: 2px;" 
                          required>
                        <option value="">Seleccione</option><option value="1">Masculino</option><option value="2">Femenino</option></select>
                        </td>
                      </tr>
                      <tr>
                        <td>Fecha nacimiento</td>
                        <td><input 
                          type="text" 
                          required="required" 
                          value="" 
                          name="fechanac" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>Nacionalidad</td>
                        <td><input 
                          type="text" 
                          required="required" 
                          value="" 
                          name="nacionalidad" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>Estado civil</td>
                        <td><select 
                          name="estadocivil" 
                          tabindex="0" 
                          class="form-control selcls" 
                          style="margin-bottom: 2px;" 
                          required>
                        <option value="">Seleccione</option><option value="1">Casado/a</option><option value="2">Soltero/a</option></select>
                        </td>
                      </tr>
                      <tr>
                        <td>Profesion / oficio</td>
                        <td><input 
                          type="text" 
                          required="required" 
                          value="" 
                          name="profesion" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td><input 
                          type="text" 
                          required="required" 
                          value="" 
                          name="profesion" 
                          class="form-control"></td>
                      </tr>
                      <tr>
                        <td>Teléfono fijo</td>
                        <td>
                          <div style="width: 20%; float: left;"> <input 
                            class="form-control" 
                            value="+56" 
                            type="text"> </div>
                          <div style="width: 20%; float: left;"><input 
                            class="form-control" 
                            placeholder="cod" 
                            type="text"> </div>
                          <div style="width: 60%; float: left;"><input 
                            class="form-control" 
                            placeholder="numero" 
                            type="text"> </div>
                          <div class="clearfix"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Teléfono trabajo</td>
                        <td>
                          <div style="width: 20%; float: left;"> <input 
                            class="form-control" 
                            value="+56" 
                            type="text"> </div>
                          <div style="width: 20%; float: left;"><input 
                            class="form-control" 
                            placeholder="cod" 
                            type="text"> </div>
                          <div style="width: 60%; float: left;"><input 
                            class="form-control" 
                            placeholder="numero" 
                            type="text"> </div>
                          <div class="clearfix"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Teléfono móvil</td>
                        <td>
                          <div style="width: 20%; float: left;"> <input 
                            class="form-control" 
                            value="+56" 
                            type="text"> </div>
                          <div style="width: 20%; float: left;"><input 
                            class="form-control" 
                            placeholder="cod" 
                            type="text"> </div>
                          <div style="width: 60%; float: left;"><input 
                            class="form-control" 
                            placeholder="numero" 
                            type="text"> </div>
                          <div class="clearfix"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Profesion / oficio</td>
                        <td><input 
                          type="text" 
                          required="required" 
                          value="" 
                          name="profesion" 
                          class="form-control"></td>
                      </tr>

                      <tr/>



                      <tr>
                        <td 
                          colspan="2" 
                          align="center"><input 
                            id="next" 
                            type="button" 
                            value="Guardar" 
                            href="#" 
                            class="btn btn-block btn-rc"></td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- .animated -->
    </div>
  </Layout>
</template>


<style lang="scss" module>
@import '@design';
</style>
