import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
const api = import.meta.env.VITE_API_QUICKPAY;

export const useQrStore = defineStore("QrStore", () => {


  const generarQr = async (obj:any) => {
    try {
        //http://localhost:9080/api/sitio/qr/genera-qr
      const res = await axios.post(`${api}/sitio/qr/genera-qr`,obj);
      return res;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  const estadoTransaccionQr = async (alias:string) => {
    try {
      const res = await axios.get(`${api}/sitio/qr/estado-transaccion-qr/${alias}`);
      return res;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  

  return {
    generarQr,
    estadoTransaccionQr
  }
})