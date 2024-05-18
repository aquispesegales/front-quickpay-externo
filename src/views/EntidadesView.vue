<template>

  <CabeceraPagoComponent></CabeceraPagoComponent>
  <router-view></router-view>
  <FooterComponent></FooterComponent>
</template>
<script setup lang="ts">
import CabeceraPagoComponent from "@/components/pago/CabeceraPagoComponent.vue";
import FooterComponent from '@/components/sitio/FooterComponent.vue';
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo(0, 0); // Esto desplaza la página al inicio
});

</script>
<style scoped></style>
