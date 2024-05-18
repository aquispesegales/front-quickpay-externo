import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
const api = import.meta.env.VITE_API_QUICKPAY;

export const useEntidadStore = defineStore("EntidadStore", () => {

  interface Entidad {
    entidadId: number;
    nombre: string;
    nombreComercial: string;
    direccion: string;
    telefono: string,
    nit: string,
    llaveDosificacion: string;
    pathLogo: string;
    imagen64: string;
    subdominioEmpresa: string;
  }

  const objEntidad = ref<Entidad>();
  const lstEntidades = ref<Entidad[]>();


  const getEntidadesForTipoEntidad = async (pTipoEntidad: string) => {
    try {
      const res = await axios.get(`${api}/sitio/entidad/for-tipo/${pTipoEntidad}`);
      lstEntidades.value = res.data.result;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  const getEntidadForEntidadId = async (pEntidadId: string) => {
    try {
      //http://localhost:9080/api/sitio/entidad/for-entidad-id/22
      const res = await axios.get(`${api}/sitio/entidad/for-entidad-id/${pEntidadId}`);
      objEntidad.value = res.data.result;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  const getEntidadForSubDominio = async (pSubDominio: string) => {
    try {
      //http://localhost:9080/api/sitio/entidad/for-entidad-id/22
      const res = await axios.get(`${api}/sitio/entidad/for-subdominio/${pSubDominio}`);
      return res.data;
    } catch (error) {
      return {
        status: false,
        message: "local error: " + error
      }
    }
  }
  return { objEntidad, lstEntidades, getEntidadesForTipoEntidad, getEntidadForEntidadId, getEntidadForSubDominio }
})
