import {defineStore} from "pinia";
import { reactive,ref } from "vue";

export const useUtilStore = defineStore("UtilStore",()=> {

    const dialogLoading = reactive({
        loading:false,
        sms:""
    });
    const e1  = ref(1);


  const setDialogLoading = async (loading:boolean,smsLoading="Procesando...") => {
    dialogLoading.loading =loading;
    dialogLoading.sms = smsLoading;
  }
  return { setDialogLoading,dialogLoading,e1}
})
