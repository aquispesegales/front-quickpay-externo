<template>
  <section class="w-full" id="seccion-entidades">
    <div class="max-w-[1300px] flex flex-col mx-auto px-4 md:px-10">
      <div class="titulo-entidades w-full text-4xl sm:text-[64px] my-4">ENTIDADES</div>
      <div class="entidades-container flex-col md:flex-row">
        <div class="imagen-entidades md:h-[755px] ">
          <img class="entidades-image-1" :src="image" />
        </div>
        <div class="botones-entidades flex flex-col sm:grid sm:grid-cols-2 gap-y-10 lg:gap-x-20 md:gap-x-10 sm:gap-x-20">
          <div class="universidades lg:w-[250px]  md:w-[200px] cursor-pointer hover:opacity-80 p-4" v-for="tipoEmpresa in tipoEmpresas.lstTipoEmpresas"
            @click="irEntidades(tipoEmpresa.dominioId)">
            <img class="w-20 h-20" :src="tipoEmpresa.icono" alt="Icono de Empresa" />
            <p class="universidades-text text-[28px] md:text-[20px] lg:text-[28px] ">{{ tipoEmpresa.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import image from '../../assets/sitio/EntidadesImageOld.png'
import { useRouter } from 'vue-router';
import { useTipoEmpresas } from '../../composable/tipoEmpresas'
const tipoEmpresas = useTipoEmpresas();

const router = useRouter();



const irEntidades = (tipoEntidadId: number): void => {
  router.push({ name: 'Entidades', params: { tipo_entidad_id: tipoEntidadId } })
}

</script>
<style scoped>
.entidades {
  background: #f0f5f4;
  padding: 43px 83px 43px 83px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 100%;
  min-width: 360px;
}

.titulo-entidades {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.entidades-container {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.imagen-entidades {
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  max-width: 613px;
  position: relative;
  overflow: hidden;
}

.entidades-image-1 {

  max-height: 443px;
}

.botones-entidades {
  flex-shrink: 0;
}

.universidades {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

i {
  flex-shrink: 0;
  font-size: 60px;
  color: #1f4680;
  object-fit: cover;
}

.universidades-text {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  position: relative;
}

.clubes {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.clubes2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.eventos {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.eventos2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.seguros {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.seguros2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.servicios {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.servicios2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 700;
  position: relative;
}

.colegios {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.colegios2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 700;
  position: relative;
}
</style>
