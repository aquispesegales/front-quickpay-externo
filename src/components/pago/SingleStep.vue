<template>
  <div class="flex justify-center items-center  mb-4 mx-auto">
    <div class="flex flex-col items-center">
      <button
        class="flex flex-col items-center justify-center w-12 h-12 rounded-full cursor-pointer md:w-16 md:h-16"
        @click="handleClick"
      >
        
        <img v-if="props.index < props.currentStep" src='../../assets/iconos/checked.ico' width="15" />  
        <img v-else-if="props.index==0 && props.index==props.currentStep" src='../../assets/iconos/paso1actual.ico' width="15" />
        <img v-else-if="props.index==1 && props.index==props.currentStep" src='../../assets/iconos/paso2actual.ico' width="15" />
        <img v-else-if="props.index==2 && props.index==props.currentStep" src='../../assets/iconos/paso3actual.ico' width="15" />
        <img v-else-if="props.index==0" src='../../assets/iconos/paso1.ico' width="15" />
        <img v-else-if="props.index==1" src='../../assets/iconos/paso2.ico' width="15" />
        <img v-else-if="props.index==2" src='../../assets/iconos/paso3.ico' width="15" />

      </button>
      <p class="text-[13px] text-[#465668] font-medium text-center md:text-left"  :class="stepClass">{{ step.text }}</p>
    </div>
  </div>
  <div v-if="index < totalSteps - 1" class="flex-1 h-0.5 bg-[#A1AEBE] mx-2"></div>
</template>

<script setup lang="ts">
import { useDeudaClienteStore } from '@/store/DeudaClienteStore';
import { computed } from 'vue';


const deudaClienteStore = useDeudaClienteStore();

const props = defineProps({
  step: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  totalSteps: {
    type: Number,
    required: true
  },
  currentStep: {
    type: Number,
    required: true
  },
});

const emit = defineEmits(['step-click']);
const handleClick = () => {
  if(!deudaClienteStore.objDatosCliente?.codigoCliente) {
    return;
  }
  if(props.currentStep <= 1 && props.index === 2 && deudaClienteStore.lstDetallePagos.length === 0) {
    return;
  }
  emit('step-click', props.index);
};

//const isActive = computed(() => props.index === props.currentStep);

const stepClass = computed(() => {
  if (props.index < props.currentStep) {
    return '';
  } else if (props.index === props.currentStep) {
    return 'font-bold text-[#0162DD]';
  } else {
    return '';
  }
});

/*const icon = computed(() => {
  if (props.index < props.currentStep) {
    return '/src/assets/iconos/checked.ico';
  } else if (props.index === props.currentStep) {
    if(props.index === 0) {
      return '/src/assets/iconos/paso1actual.ico'
    }
    if(props.index === 1){
      return '/src/assets/iconos/paso2actual.ico'
    }
    if(props.index === 2){
      return '/src/assets/iconos/paso3actual.ico'
    }
  } else {
    if(props.index === 0) {
      return '/src/assets/iconos/paso1.ico'
    }
    if(props.index === 1){
      return '/src/assets/iconos/paso2.ico'
    }
    if(props.index === 2){
      return '/src/assets/iconos/paso3.ico'
    }
  }
});*/

</script>

<style scoped>

</style>
