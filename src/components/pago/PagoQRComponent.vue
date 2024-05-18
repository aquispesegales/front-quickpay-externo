<template>
  <v-row no-gutters>
    <v-col cols="12" fluid class="d-flex align-center flex-column">
      <v-sheet class="pa-0 ma-0">
        <v-btn
          v-if="!qr_proceso && !pago_exito"
          class="ml-5"
          height="35"
          min-width="164"
          variant="outlined"
          @click="generarQR()"
        >
          Volver a generar QR
        </v-btn>
        <br /><br />
        <div v-if="qr.imagenQr">
          <dl>
            <strong>FECHA VENCIMIENTO :</strong> {{ qr.fechaVencimiento }}
          </dl>
          <dl><strong>MONTO :</strong> {{ total }}</dl>
          <!--<dl><strong>ALIAS :</strong> {{ qr.alias }}</dl>-->
          <img :src="qr.imagenQr" alt="Pago" width="250" />
          <div class="ml-2 text-center">
            Descarga QR
            <v-icon
              icon="mdi mdi-arrow-collapse-down"
              @click="descargaQr(qr.imagenQr)"
            ></v-icon>
          </div>

          <!-- bnt temporal-->
          <v-btn
            class="ml-8 mt-5"
            height="35"
            min-width="164"
            variant="tonal"
            color="naranja"
            @click="descargarFactura()"
          >
            YA REALICÉ EL PAGO
          </v-btn>
        </div>

        <div v-else>
          <dl></dl>
          <dl></dl>
          <div
            style="
              border: 3px dashed #000;
              width: 230px;
              height: 230px;
              text-align: center;
              padding-top: 10px;
            "
          >
            <img
              width="200px"
              v-if="qr_proceso"
              src="../../assets/pago/genera_qr.gif"
              alt="genera qr"
            />
            <img
              width="200px"
              v-if="pago_proceso"
              src="../../assets/pago/procesando_pago.gif"
              alt="procesa pago qr"
            />
            <div v-if="pago_exito" class="div-exito">
              <h3 style="color: limegreen">Pago Realizado con Exito</h3>
              <br />
              <v-btn
                v-if="qr != null"
                class="ml-5"
                height="35"
                min-width="164"
                variant="text"
                @click="descargarFactura()"
              >
                Descarge su Factura
              </v-btn>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, inject } from "vue";
import { useQrStore } from "../../store/QrStore";
import { formatearMoneda } from "../../composable/utilsComposable";
const qrStore = useQrStore();
const qr: any = ref({});
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
const swal: any = inject("$swal");
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const qr_proceso = ref(false);
const pago_proceso = ref(false);
const pago_exito = ref(false);
const alias_exito = ref("");
import { io } from "socket.io-client";
import { error } from "console";
import { title } from "process";
const url_sockete = import.meta.env.VITE_API_SOCKETE;

onMounted(() => {
  const socket = io(url_sockete);

  qr.value = {};
  pago_exito.value = false;
  alias_exito.value = "";

  console.log("sokete por conectar");
  socket.on("connect", () => {
    console.log("sokete conectado");
  });

  socket.on("confirmaPagoQr", (event) => {
    console.log("second");
    if (event) {
      qr.value = {};
      pago_proceso.value = true;
      console.log("first");
      setTimeout(() => {
        pago_proceso.value = false;
        pago_exito.value = true;
        alias_exito.value = event;
      }, 1000);
    }
  });

  generarQR();
});

const total = computed(() => {
  let sum = 0;
  deudaClienteStore.lstDetallePagos?.forEach((obj) => {
    sum += obj.subTotal;
  });
  //return sum;
  return formatearMoneda(sum.toString());
});

const props = defineProps(["entidadId"]);

const descargaQr = (linkSource: string) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = "qr.jpg";
  downloadLink.click();
};

const generarQR = async () => {
  pago_exito.value = false;
  alias_exito.value = "";
  let sum = 0;
  let deudasCliente: any = [];
  deudaClienteStore.lstDetallePagos?.forEach(async (item) => {
    sum += item.subTotal;
    deudasCliente.push(item.deudaClienteId);
  });
  if (deudasCliente.length <= 0) {
    return alert("Debe seleccionar Items a Pagar");
  }
  let obj = {
    detalleGlosa: "detalle",
    monto: sum,
    moneda: "BOB",
    lstDeudaCliente: deudasCliente,
  };
  qr_proceso.value = true;
  qr.value = {};
  let r: any = await qrStore.generarQr(obj);

  if (r.data.status) {
    qr.value = r.data.result;
  } else {
    //alert(r.data.message);
    //return;
  }
  qr_proceso.value = false;
};
const descargarFactura = async () => {
  utilStore.setDialogLoading(true);
  console.log("Aquí");
  swal
    .fire({
      title: "Pago realizado con éxito!",
      confirmButtonColor: "#99B1C2",
      showCancelButton: true,
      cancelButtonText: "Salir",
      padding: "50px 0px",
      cancelButtonColor: "#008000",
      customClass: {
        popup: "mi-sweet-alert",
        title: "title-sweet-alert",
        confirmButton: "sweet-alert-confirm",
        cancelButton: "sweet-alert-cancel",
        validationMessage:"sweet-alert-validation-message",
        actions: 'sweet-alert-actions',
      },
      showLoaderOnConfirm: true,
      background: "#1F4680",
      color: "#ffffff",
      confirmButtonText: "Descarge su Factura",

      preConfirm: async () => {
        let rr = await deudaClienteStore.descargaFactura(alias_exito.value);
        if (rr.data.status) {
          console.log("first");
          var binaryString = atob(rr.data.result);
          var bytes = new Uint8Array(binaryString.length);
          for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          let blob = new Blob([bytes.buffer], {
            type: "application/pdf",
          });
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "factura.pdf";
          document.body.appendChild(link);
          link.click();
        } else {
          swal.showValidationMessage(`
            Ocurrió un Error al Descargar la Factura
          `);
        }
      },
      allowOutsideClick: () => !swal.isLoading(),
    })
    .then((result: any) => {
      if (result.isConfirmed) {
        swal.fire({
          title: "Factura descargada correctamente",
          confirmButtonColor: "#99B1C2",
          padding: "50px 0px",
          customClass: {
            popup: "mi-sweet-alert",
            title: "title-sweet-alert",
            confirmButton: "sweet-alert-confirm",
          },
          showLoaderOnConfirm: true,
          background: "#1F4680",
          color: "#ffffff",
        });
      }
    });
  utilStore.setDialogLoading(false);
};
</script>
<style scoped>
.div-exito {
  padding-top: 70px;
}
</style>
