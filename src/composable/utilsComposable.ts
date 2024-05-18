
import moment from 'moment';
interface obj {
  timeZone:string;
  minimumFractionDigits:number;
};
export function convertToDDMMYYYY(pFecha:string):string {
    if (pFecha != null && pFecha != "" && pFecha!="0000-00-00")
      return moment(pFecha, "YYYY-MM-DDTHH:mm:ssZ").format("DD/MM/YYYY HH:mm");
    return "";
}
export function formatearMoneda(pMonto:string):string {
  console.log("aaaa "+pMonto)
  if (pMonto != null && pMonto != "" )
    {
      let a:obj={
        timeZone: 'UTC', minimumFractionDigits: 2
      };
      return Number(pMonto).toLocaleString('en', a)
    }
  return "0.00";
}
