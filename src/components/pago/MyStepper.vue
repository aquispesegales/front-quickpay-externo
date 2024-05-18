<template>
  <div class="flex items-center w-full ">
    <SingleStep
      v-for="(step, index) in steps"
      :key="index"
      :step="step"
      :index="index"
      :totalSteps="steps.length"
      :currentStep="currentStep"
      @step-click="goToStep"
    />
  </div>

  <DatosClienteComponent v-if="currentStep === 0" @step-click="goToStep"/>

  <SeleccionarPagoComponent v-else-if="currentStep === 1" :entidadId="entidadId" @step-click="goToStep"></SeleccionarPagoComponent>

  <PagarComponent :entidadId="entidadId" v-else-if="currentStep === 2" @step-click="goToStep"></PagarComponent>

</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import SingleStep from './SingleStep.vue';
import DatosClienteComponent from './DatosClienteComponent.vue';
import SeleccionarPagoComponent from './SeleccionarPagoComponent.vue';
import PagarComponent from './PagarComponent.vue';
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const props = defineProps(["entidadId"]);

const steps = [
  { text: 'Buscar Cliente' },
  { text: 'Seleccionar Pagos' },
  { text: 'Pagar' }
];

const currentStep = ref(0);

const goToStep = (index: number) => {
  currentStep.value = index;
};

</script>
