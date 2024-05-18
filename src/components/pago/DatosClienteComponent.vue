<template>
  <div
    class="flex flex-col lg:flex-row justify-evenly md:items-center w-[100%] lg:gap-0 gap-[50px]"
  >
    <div class="codigo-input flex flex-col gap-[20px] md:w-1/2 lg:w-1/3">
      <div class="input-field flex flex-col">
        <label for="codigo-cliente">Ingrese el código del cliente</label>
        <input
          type="text"
          id="codigo-cliente"
          placeholder="Ej. 1700"
          v-model="vCodigoCliente"
          @keydown.enter="buscarCliente()"
        />
      </div>
      <button class="buscar-cliente" @click="buscarCliente()">
        Buscar Cliente
      </button>
    </div>
    <div
      class="flex flex-col justify-center items-center md:w-1/2 lg:w-1/3"
      v-if="deudaClienteStore.objDatosCliente?.codigoCliente"
    >
      <table class="border-collapse table-fixed w-full">
        <thead>
          <tr class="info-cliente">
            <th class="p-4 text-left md:whitespace-nowrap">Código Cliente:</th>
            <td class="p-4 border-none break-words">
              {{ deudaClienteStore.objDatosCliente?.codigoCliente }}
            </td>
          </tr>
          <tr class="info-cliente">
            <th class="p-4 border-none text-left md:whitespace-nowrap">CI:</th>
            <td class="p-4 border-none break-words">
              {{ deudaClienteStore.objDatosCliente?.nroDocumento }}
            </td>
          </tr>
          <tr class="info-cliente">
            <th class="p-4 border-none text-left md:whitespace-nowrap">
              Nombre Cliente:
            </th>
            <td class="p-4 border-none break-words">
              {{ deudaClienteStore.objDatosCliente?.nombreCliente }}
            </td>
          </tr>
          <tr class="info-cliente">
            <th class="p-4 border-none text-left md:whitespace-nowrap">
              Correo Cliente:
            </th>
            <td class="p-4 border-none break-words">
              {{ deudaClienteStore.objDatosCliente?.correoCliente }}
            </td>
          </tr>
        </thead>
      </table>
      <div
        class="flex flex-col lg:flex-row justify-evenly md:items-center w-[100%] lg:gap-0 gap-[50px]"
      >
        <button class="buscar-cliente" @click="moveToNextStep">
         Siguiente
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject, onMounted } from "vue";
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
import { useEntidadStore } from "../../store/EntidadStore";

const swal: any = inject("$swal");

const entidadStore = useEntidadStore();

const vCodigoCliente = ref("");

const emit = defineEmits(['step-click']);

const moveToNextStep = () => {
  console.log('enit')
  emit('step-click', 1)
}

onMounted(() => {
  deudaClienteStore.objDatosCliente = undefined
})


const buscarCliente = async () => {
  if (vCodigoCliente.value == "") {
    //alert("Código Cliente Obligatorio");
    swal.fire({
      text: "Código Cliente Obligatorio",
      icon: "error",
      confirmButtonColor: "#25368B",
      confirmButtonText: "Aceptar",
    });

    return;
  }
  utilStore.setDialogLoading(true, "Buscando Datos de Ciente...");
  let obj = await deudaClienteStore.getClienteByEntidadIdAndCodigoCliente(
    entidadStore.objEntidad?.entidadId + "",
    vCodigoCliente.value
  );
  if (obj.status == false) {
    utilStore.setDialogLoading(false);
    //alert(obj.message);
    swal.fire({
      text: obj.message,
      icon: "error",
      confirmButtonColor: "#25368B",
      confirmButtonText: "Aceptar",
    });

    return;
  }

  utilStore.setDialogLoading(false);
};
</script>

<style scoped>
.input-field {
  padding: 10px;
}

label {
  color: #13316c;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
}

#codigo-cliente {
  border: 1px solid #13316c;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  background-color: #fffcf6;
}

.buscar-cliente {
  background: #cd9724;
  border-radius: 32px;
  padding: 10px 20px;
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

.info-cliente th {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 800;
}

.info-cliente td {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 300;
  /* Ligero */
}
</style>
