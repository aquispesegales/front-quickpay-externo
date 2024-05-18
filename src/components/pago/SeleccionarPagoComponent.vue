<template>
  <div class="pagos-section  flex flex-col justify-center items-center w-[100%]">
    <div
      class="styled-table w-full xl:w-[80%] p-[8px] py-[10px] md:py-[20px] md:px-[50px] overflow-hidden"
      v-if="deudaClienteStore.objDatosCliente?.codigoCliente"
    >
      <div class="overflow-scroll">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="py-2"></th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]"
                  >TIPO DE SERVICIO</span
                >
              </th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]">SERVICIO</span>
              </th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]">PERIODO</span>
              </th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]">CANTIDAD</span>
              </th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]">CONCEPTO</span>
              </th>
              <th class="py-2 text-center">
                <span class="font-bold text-sm text-[#1f4680]">SUB TOTAL</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(deuda, index) in lstDeudasCliente" :key="deuda.deudaClienteId">
              <td class="px-4 py-2 flex flex-col justify-center items-center">
                <input
                  type="checkbox"
                  v-model="deudaClienteStore.lstDetallePagos"
                  :value="deuda"
                  class="h-5 w-5 text-[rgb(31,70,128)]"
                  @change="(e) => seleccionarAnteriores(index, e)"
                />
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680] text-center">
                {{ deuda.tipoServicio }}
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680]">
                {{ deuda.servicio }}
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680] text-center">
                {{ deuda.periodo }}
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680] text-center">
                {{ deuda.cantidad }}
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680] text-center">
                {{ deuda.concepto }}
              </td>
              <td class="px-4 py-2 text-sm text-[#1f4680] text-center">
                {{ formatearMoneda(deuda.subTotal.toString()) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="total-section flex flex-col md:items-end">
        <p>
          Total a pagar: <span id="totalAmount">{{ total }} Bs</span>
        </p>
      </div>
    </div>
    <div v-else>
      <v-alert color="azul_marino" variant="tonal" prominent border="top">
        <template v-slot:title> Nota </template>
        Para Seleccionar pagos primero debe Buscar a un Cliente en el Primer
        Paso
      </v-alert>
    </div>
  </div>

  <div
    class="flex flex-col lg:flex-row justify-evenly md:items-center w-[100%] lg:gap-0 gap-[50px] mt-10"
  >
<button class="buscar-cliente" @click="moveToPreviousStep">
        Atrás
      </button>
  <button class="buscar-cliente" @click="moveToNextStep">
        Siguiente
      </button>
      </div>

</template>
<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { formatearMoneda } from "../../composable/utilsComposable";
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const props = defineProps(["entidadId"]);

interface DeudaCliente {
  deudaClienteId: number;
  tipoServicio: string;
  servicio: string;
  periodo: string;
  cantidad: number;
  concepto: string;
  montoUnitario: number;
  subTotal: number;
}

const emit = defineEmits(['step-click']);

const moveToPreviousStep = () => {
  if(deudaClienteStore.lstDetallePagos.length === 0){
    return;
  }
  emit('step-click', 0)
}

const moveToNextStep = () => {
  if(deudaClienteStore.lstDetallePagos.length === 0){
    return;
  }
  emit('step-click', 2)
}

const lstDeudasCliente = ref<DeudaCliente[]>([]);

const total = computed(() => {
  let sum: number = 0;
  deudaClienteStore.lstDetallePagos?.forEach((obj) => {
    sum += obj.subTotal;
  });
  return formatearMoneda(sum.toString());
});

onMounted(() => {
    descargandoNuevasDeudas();
});

const descargandoNuevasDeudas = async () => {
  utilStore.setDialogLoading(true);
  lstDeudasCliente.value = [];
  deudaClienteStore.lstDetallePagos = [];
  let codCliente = deudaClienteStore.objDatosCliente?.codigoCliente;
  let res = await deudaClienteStore.getDeudaClienteByEntidadIdAndCodigoCliente(
    props.entidadId,
    codCliente + ""
  );
  lstDeudasCliente.value = res.result;
  utilStore.setDialogLoading(false);
};

const seleccionarAnteriores = (indice: number, e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
        for (let i = 0; i < indice; i++) {
            if (!deudaClienteStore.lstDetallePagos?.includes(lstDeudasCliente.value[i])) {
                deudaClienteStore.lstDetallePagos?.push(lstDeudasCliente.value[i]);
            }
        }
    } else {
        for (let i = indice; i < lstDeudasCliente.value?.length; i++) {
            if (deudaClienteStore.lstDetallePagos?.includes(lstDeudasCliente.value[i])) {
                const index = deudaClienteStore.lstDetallePagos?.indexOf(lstDeudasCliente.value[i])
                deudaClienteStore.lstDetallePagos?.splice(index, 1);
            }
        }
    }
};

</script>
<style scoped>

.styled-table {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 65px;
  flex-shrink: 0;
  height: auto;
  /* padding: 20px 50px; */
  position: relative;
  box-shadow: 0px 10px 10.5px 13px rgba(153, 177, 194, 1);
}

.total-section {
  padding: 15px;
}

.total-section p {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #1f4680;
}

#totalAmount {
  color: #bf860b;
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
