<template>
  <section class="w-full" id="seccion-entidades">
    <div class="max-w-[1300px] flex flex-col mx-auto px-4 md:px-10">
      <div class="titulo-entidades w-full text-4xl sm:text-[64px] my-4">ENTIDADES</div>
      <div class="entidades-container flex-col md:flex-row">
        <div class="imagen-entidades md:h-[755px] ">
          <img class="entidades-image-1" :src="image" />
        </div>
        <div
          class="botones-entidades flex flex-col sm:grid sm:grid-cols-2 gap-y-10 lg:gap-x-20 md:gap-x-10 sm:gap-x-20">
          <div class="universidades lg:w-[250px]  md:w-[200px] cursor-pointer hover:opacity-80 p-4"
            v-for="tipoEmpresa in tipoEmpresas.lstTipoEmpresas" @click="irEntidades(tipoEmpresa.dominioId)">
            <svg v-if="tipoEmpresa.dominioId == 4" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 512 512" fill="#1f4680">
              <path
                d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <svg v-if="tipoEmpresa.dominioId == 84" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 640 512" fill="#1f4680">
              <path
                d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z" />
            </svg>

            <svg v-if="tipoEmpresa.dominioId == 85" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 448 512" fill="#1f4680">
              <path
                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
            </svg>
            <svg v-if="tipoEmpresa.dominioId == 86" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 576 512" fill="#1f4680">
              <path
                d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z" />
            </svg>
            <svg v-if="tipoEmpresa.dominioId == 87" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 640 512" fill="#1f4680">
              <path
                d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
            </svg>
            <svg v-if="tipoEmpresa.dominioId == 31" xmlns="http://www.w3.org/2000/svg" height="50" width="50"
              viewBox="0 0 576 512" fill="#1f4680">
              <path
                d="M288 0H400c8.8 0 16 7.2 16 16V80c0 8.8-7.2 16-16 16H320.7l89.6 64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H336V400c0-26.5-21.5-48-48-48s-48 21.5-48 48V512H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64H165.7L256 95.5V32c0-17.7 14.3-32 32-32zm48 240a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm368 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16zM80 352c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H80zm384 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H464z" />
            </svg>


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
