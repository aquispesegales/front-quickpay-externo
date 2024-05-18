<template>
  <section class="w-full background-section">
    <div v-if="deudaClienteStore.objDatosCliente?.codigoCliente && deudaClienteStore?.lstDetallePagos!.length > 0 ">
      <article class="detail-section mb-10">
        <div class="titulo-pago text-center font-extrabold md:text-[25px]">Detalle de pagador:</div>
        <div class=" grid grid-cols-[1fr_2fr] max-w-[400px] gap-4 text-[16px] md:text-[20px] mx-auto">
            <p class="font-semibold text-[#13316c]">Nombre:</p>

            <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{   deudaClienteStore.objDatosCliente?.nombreCliente }}</p>

            <p class="font-semibold text-[#13316c]">Código:</p>

            <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{   deudaClienteStore.objDatosCliente?.codigoCliente }}</p>

            <p class="font-semibold text-[#13316c]">Email:</p>

            <p class="w-full md:whitespace-nowrap  overflow-hidden  text-ellipsis whitespace-normal">{{   deudaClienteStore.objDatosCliente?.correoCliente }}</p>

          </div>
      </article>
      <div class="payment-details flex flex-col md:flex-row gap-10">
          <article class="detail-section  flex-1">
              <div class="titulo-pago text-center font-extrabold md:text-[25px]">Detalle de pago:</div>
              <div class="my-8" v-for="deuda in deudaClienteStore.lstDetallePagos" :key="deuda.deudaClienteId">
                  <div class="detail-row">
                      <div class="detail-item font-semibold md:text-[22px] text-[#13316C]">Tipo de servicio:</div>
                      <div class="service-type ">{{ deuda.tipoServicio }}</div>
                  </div>
                  <div class="detail-row">
                      <div class="detail-item font-semibold md:text-[22px]  text-[#13316C]">Concepto:</div>
                      <div class="service">{{ deuda.concepto }}</div>
                  </div>
                  <div class="detail-row">
                      <div class="detail-item font-semibold md:text-[22px]  text-[#13316C]">Monto:</div>

                      <div class="concept">{{ formatearMoneda(deuda.subTotal+"") }}</div>
                  </div>
                  <div class="step-trail">
                      <div class="rect"></div>
                  </div>

              </div>
              <div class="detail-row">
                  <div class="total-amount">Total a pagar:</div>

                  <div class="total-amount-value">{{ total}}</div>
              </div>
          </article>

          <article class="payment-method text-center flex-1">
              <div class="titulo-pago text-center font-extrabold md:text-[25px]">
                  Método de pago:
              </div>
              <button class="payment-button text-center">
                  <img class="payment-image" src="../../assets/pago/pago_qr.png" alt="Método de pago 1" @click="tab = 'qr'" />
              </button>
              <!--<button class="payment-button">
                  <img class="payment-image" src="../../assets/pago/pago_tj.png" alt="Método de pago 2" @click="tab = 'tj'" />
              </button>-->
              <PagoQRComponent v-if="tab == 'qr'"></PagoQRComponent>
             <!--<PagarTJComponent v-if="tab == 'tj'"></PagarTJComponent>-->
          </article>
      </div>
    </div>
    <div v-else>
        <v-alert color="azul_marino" variant="tonal" prominent border="top">
            <template v-slot:title>
                Nota
            </template>

            Para Seleccionar pagos primero debe Buscar a un Cliente en el Primer Paso
        </v-alert>
    </div>
    <div
    class="flex flex-col lg:flex-row justify-evenly md:items-center w-[100%] lg:gap-0 gap-[50px] mt-30"
  >
  <button class="buscar-cliente mt-20" @click="moveToPreviousStep">
        Atrás
      </button>

      </div>
  </section>
</template>
<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import { useUtilStore } from "@/store/UtilStore";
import PagoQRComponent from './PagoQRComponent.vue';
//import PagarTJComponent from './PagarTJComponent.vue';
import { formatearMoneda } from "../../composable/utilsComposable";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const tab: Ref<string | null> = ref(null);

  const emit = defineEmits(['step-click']);

const moveToPreviousStep = () => {
  emit('step-click', 1)
}

const total = computed(() => {
    let sum = 0;
    deudaClienteStore.lstDetallePagos?.forEach((obj) => {
        sum += obj.subTotal;
    });
    console.log(sum);
    return formatearMoneda(sum+"");
});



</script>
<style scoped>
.background-section {
  background: linear-gradient(
    180deg,
    rgba(221, 233, 241, 0.7) 0%,
    rgba(245, 241, 230, 0.7) 100%
  );
}
.step-trail {
    /* width: 595px; */
    /* height: 32px; */
    position: relative;
}

.rect {
    background: var(--default, #a1aebe);
    height: 2px;
    position: absolute;
    right: 0%;
    left: 0%;
    width: 100%;
    top: calc(50% - 1px);
}

.detail-section {
    padding: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    color: #1f4680;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
    font-family: "Poppins", sans-serif;
    /* margin-left: 20px */
}

.titulo-pago {
    color: #13316C;
    margin-bottom: 10px;
    text-align: left;
}

.detail-title,
.method-title {
    color: #1f4680;
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 10px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.detail-item,
.service-type,
.service,
.concept,
.total-amount,
.total-amount-value {
    flex: 1;
}

.total-amount,
.total-amount-value {
    color: #e0a62a;
    font-weight: 700;
    font-size: 21px;
}


.payment-method {
    padding: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    font-family: "Poppins", sans-serif;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
}

.payment-button {
    border: none;
    width: 100%;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    display: flex;
    margin-right: 10px;
}

.payment-image {
    width: 120px;
    height: auto;
}

.buscar-cliente {
  background: #cd9724;
  border-radius: 32px;
  padding: 20px 80px;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buscar-cliente:hover {
  background-color: #dba737;
}

</style>
