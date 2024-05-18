<template>
<HeaderComponent></HeaderComponent>
    <div class="w-full bg-[#1f4680]">
      <div class="max-w-[1300px] mx-auto md:px-10 ">
        <div class="flex gap-9 md:gap-0 flex-row justify-between md:overflow-x-hidden w-full overflow-x-scroll px-4 py-4 md:px-0">
          <p
            class="mensaje"
            @click="buscarEntidad(tipoEmpresa.dominioId)"
            v-for="tipoEmpresa in tipoEmpresas.lstTipoEmpresas"
            :key="tipoEmpresa.dominioId"
            :class="{ 'mensaje-activa': tipoEmpresa.dominioId === +route.params.tipo_entidad_id }"
          >
            {{ tipoEmpresa.descripcion }}
          </p>
        </div>
      </div>
    </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTipoEmpresas } from '../../composable/tipoEmpresas'
import { useEntidadStore } from '../../store/EntidadStore';
import { useRoute, useRouter } from 'vue-router';
import HeaderComponent from '@/components/sitio/HeaderComponent.vue';
const route = useRoute();
const router = useRouter()

const tipoEmpresas = useTipoEmpresas();
const entidadStore = useEntidadStore();


const buscarEntidad = async (tipoEntidadId:number) =>{
  await entidadStore.getEntidadesForTipoEntidad(tipoEntidadId.toString());
  router.replace(`/entidades/${tipoEntidadId}`)
}

onMounted(() => {
  buscarEntidad(+route.params.tipo_entidad_id);
})


</script>

<style scoped>
.mensaje-activa {
    font-weight: 800;
}

.quick-pay-blanco-1 {
    flex-shrink: 0;
    width: 200px;
    height: auto;
    position: relative;
    object-fit: cover;
}


.mensaje,
.mensaje2 {
    color: #fff;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    cursor: pointer;
}
</style>
