import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
const api = import.meta.env.VITE_API_QUICKPAY;

export const useDeudaClienteStore = defineStore("DeudaClienteStore", () => {

  interface DatosCliente {
    codigoCliente: string,
    nroDocumento: string,
    nombreCliente: string,
    correoCliente: string,
  };
  //"deudaClienteId": 13896839, "tipoServicio": "Pago CDP", "servicio": "Pago Mensualidad", "periodo": "Noviembre 2024", "cantidad": 1, "concepto": "Mensualidad Noviembre 2024", "montoUnitario": 225, "subTotal": 225
  interface DeudaCliente {
    deudaClienteId: number,
    tipoServicio: string,
    servicio: string,
    periodo: string,
    cantidad: number,
    concepto: string,
    montoUnitario: number,
    subTotal: number
  }
  const objDatosCliente = ref<DatosCliente>();
  const lstDeudasClientes = ref<DatosCliente[]>();
  const lstDetallePagos = ref<DeudaCliente[]>([]);


  const getClienteByEntidadIdAndCodigoCliente = async (pEntidadId: string, pCodCliente: string) => {
    try {
      const res = await axios.get(`${api}/sitio/deuda-cliente/obtener-cliente/${pEntidadId}/${pCodCliente}`);
      objDatosCliente.value = res.data.result;
      return res.data;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }

  const getDeudaClienteByEntidadIdAndCodigoCliente = async (pEntidadId: string, pCodCliente: string) => {
    try {
      const res = await axios.get(`${api}/sitio/deuda-cliente/obtener-deuda-cliente/${pEntidadId}/${pCodCliente}`);
      lstDeudasClientes.value = res.data;
      return res.data;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  const descargaFactura = async (alias: string) => {
    try {
      const res = await axios.get(`${api}/sitio/deuda-cliente/descarga-factura/${alias}`);
      return res;
    } catch (error) {
      return {
        data: {
          status: false,
          message: "local error: " + error
        }
      }
    }
  }

  return {
    getClienteByEntidadIdAndCodigoCliente,
    getDeudaClienteByEntidadIdAndCodigoCliente,
    objDatosCliente,
    lstDeudasClientes,
    lstDetallePagos,
    descargaFactura
  }
})
