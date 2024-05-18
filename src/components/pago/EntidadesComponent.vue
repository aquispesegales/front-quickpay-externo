<template>

  <div class="w-full h-full background-section">
    <div v-if="isLoading" class="loading-indicator clubes max-w-[1300px] mx-auto px-4 md:px-10">Cargando...</div>
    <div v-else>
      <div
        v-if="entidadStore.lstEntidades?.length"
        class="clubes max-w-[1300px] mx-auto px-4 md:px-10"
      >
        <div
          v-for="entidad in entidadStore.lstEntidades"
          :key="entidad.entidadId"
          class="club-the-strongest cursor-pointer hover:scale-105 transition-all ease-in-out"
          @click="irPago(entidad.subdominioEmpresa)"
        >
          <img class="TheStrongestLogo" :src="entidad.imagen64" />
          <div class="Titulo">
            {{ entidad.nombre }}
          </div>
        </div>
      </div>
      <div v-else class="clubes max-w-[1300px] mx-auto px-4 md:px-10">
        <p class="mensaje-sin-data">No hay entidades para esta sección</p>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useEntidadStore } from "@/store/EntidadStore";

const router = useRouter();
const entidadStore = useEntidadStore();

const props = defineProps<{
  tipo_entidad_id: any;
}>();

const isLoading = ref(true);

onMounted(async () => {
  /*console.log("buscado entidades");
    console.log(props.tipo_entidad_id);*/
  try {
    isLoading.value = true;

    await entidadStore.getEntidadesForTipoEntidad(props.tipo_entidad_id);
  } catch (error) {
    console.error("Error al obtener entidades:", error);
  } finally {
    isLoading.value = false;
  }
});

const irPago = (subdominioEmpresa: string): void => {
  if (!subdominioEmpresa) {
    alert("empresa no cuenta con sub dominio");
    return;
  }
  router.push({
    name: "Pago",
    params: { subdominio_empresa: subdominioEmpresa },
  });
};
</script>
<style scoped>
.background-section {
  background: linear-gradient(
    180deg,
    rgba(221, 233, 241, 0.7) 0%,
    rgba(245, 241, 230, 0.7) 100%
  );
}

.clubes {
  padding: 60px 40px 60px 40px;
  display: flex;
  flex-direction: row;
  gap: 37px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.club-the-strongest {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 240px;
  height: 287px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.TheStrongestLogo {
  flex-shrink: 0;
  width: 115px;
  height: 115px;
  position: relative;
  object-fit: cover;
}

.Titulo {
  color: #13316c;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 700;
  position: relative;
}

.mensaje-sin-data {
  color: #13316c;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 700;
  position: relative;
}

.LosSargentosLogo {
  flex-shrink: 0;
  width: 114px;
  height: 136px;
  position: relative;
  object-fit: cover;
}

.club3 {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 42px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 240px;
  height: 287px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.blank {
  background: #c4c4c4;
  flex-shrink: 0;
  width: 115px;
  height: 115px;
  position: relative;
}
</style>
