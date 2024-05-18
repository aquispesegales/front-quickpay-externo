<template>
  <section class="px-10 background-section py-16">
    <div v-if="isLoading" class="loading-indicator clubes max-w-[1300px] mx-auto px-4 md:px-10">
      Cargando...
    </div>
    <div v-else >
      <div class="mx-auto max-w-[1300px] flex flex-col justify-center items-center gap-[48px]" v-if="entidad_id > 0">
        <DatosEntidadComponent :entidadId="entidad_id"></DatosEntidadComponent>
        <!-- <StepsPagoComponent :entidadId="entidad_id"></StepsPagoComponent> -->
        <MyStepper :entidadId="entidad_id"></MyStepper>
      </div>
      <div v-else class="pagos">
        <v-alert color="purple" variant="outlined">
          <template v-slot:title> Mensaje </template>
          No se pudo obtener datos
        </v-alert>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import DatosEntidadComponent from "@/components/pago/DatosEntidadComponent.vue";
import StepsPagoComponent from "@/components/pago/StepsPagoComponent.vue";
import { useRoute } from "vue-router";
import { useEntidadStore } from "@/store/EntidadStore";
import MyStepper from "@/components/pago/MyStepper.vue";
const entidadStore = useEntidadStore();
const route = useRoute();
const entidad_id = ref(0);
const smsErrorEntidad = ref("");
const isLoading = ref(true);

onMounted(async () => {
  entidad_id.value = 0;
  isLoading.value = true;
  let subDominio = route.params.subdominio_empresa + "";
  let r = await entidadStore.getEntidadForSubDominio(subDominio);
  if (r?.status) {
    //console.log(r.result.entidadId);
    entidad_id.value = r.result.entidadId;
  } else {
    smsErrorEntidad.value = "No se ha obtenido empresa";
  }
  isLoading.value = false;
});
</script>
<style scoped>
.pagos {
  /* padding: 40px 40px 40px 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    min-width: 360px;
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(245, 241, 230, 0.7) 100%); */
}

.background-section {
  background: linear-gradient(180deg,
      rgba(221, 233, 241, 0.7) 0%,
      rgba(245, 241, 230, 0.7) 100%);
}
</style>
