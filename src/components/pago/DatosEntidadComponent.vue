<template>
  <div class="club-the-strongest font-poppins flex-col md:flex-row md:h-[210px] gap-8 py-4 md:gap-14">
 
    <div class="contenedor-club text-[18px] md:text-[23px]">
      <p class="titulo-club md:">{{ entidadStore.objEntidad?.nombre }}</p>
      <img class="logo-club" :src="entidadStore.objEntidad?.imagen64" />
    </div>
    <div class=" grid grid-cols-[1fr_2fr] max-w-[400px] gap-4 text-[16px] md:text-[20px]">
      <p class="font-semibold text-[#13316c]">TELÉFONO</p>

      <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{
        entidadStore.objEntidad?.telefono }}</p>

      <p class="font-semibold text-[#13316c]">DIRECCIÓN</p>

      <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{
        entidadStore.objEntidad?.direccion }}</p>

      <p class="font-semibold text-[#13316c]">NIT</p>

      <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{
        entidadStore.objEntidad?.nit }}</p>

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useEntidadStore } from '../../store/EntidadStore';
const entidadStore = useEntidadStore();
const props = defineProps<{
  entidadId: any
}>()
onMounted(async () => {
  console.log(props.entidadId)
  await entidadStore.getEntidadForEntidadId(props.entidadId)
})

</script>
<style scoped>
.steps {
  background: linear-gradient(180deg,
      rgba(221, 233, 241, 0.7) 0%,
      rgba(245, 241, 230, 0.7) 100%);
  padding: 40px 58px 40px 58px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 870px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}

.club-the-strongest {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  padding: 0px 33px 0px 33px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  max-width: 780px;

  position: relative;
  box-shadow: 0px 13px 15.5px -3px rgba(153, 177, 194, 1);
  /* overflow: hidden; */
}

.contenedor-club {
  display: flex;
  flex-direction: column;
  /* max-width: 250px; */
  line-height: normal;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}

.titulo-club {
  color: #13316c;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.logo-club {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  position: relative;
  object-fit: cover;
}

.datos-club {
  padding: 39px 0px 39px 0px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  width: 891px;
  height: 279px;
  position: relative;
  overflow: hidden;
}

.telefono-club span,
.direccion-club span,
.nit-club span {
  font-size: 20px;
}


.telefono-club {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 46px;
  position: relative;
  overflow: hidden;
}

.tel-span {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.tel-span2 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.tel-span3 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.direccion-club {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 44px;
  position: relative;
  overflow: hidden;
  text-align: left;

}


.direccion1 {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.direccion2 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.nit-club {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 27px;
  position: relative;
  overflow: hidden;
}

.nit-1 {
  text-align: left;
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.nit-2 {
  text-align: left;
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
</style>
