<!-- <template> -->
    <!-- <div class="stepper-horizontal">
        <div class="step-text-horizontal">

            <div class="step-symbol" @click="paso = 1">
                <div class="icon">
                    <div class="circle"></div>
                    <svg class="icon-personal" width="40" height="40" viewBox="0 0 25 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5003 6C10.8436 6 9.50011 7.34285 9.50011 9.00021C9.50011 10.6576 10.8436 12.0004 12.5003 12.0004C14.157 12.0004 15.5005 10.6569 15.5005 9.00021C15.5005 7.34348 14.1577 6 12.5003 6ZM12.5003 13.4059C10.2475 13.4059 5.75 14.5368 5.75 16.7808V18.6558H19.25V16.7808C19.25 14.5368 14.7532 13.4059 12.4997 13.4059H12.5003Z"
                            fill="#0162DD" />
                    </svg>
                </div>
            </div>
            <div class="text">Buscar Cliente</div>
        </div>
        <div class="step-trail">
            <div class="rect"></div>
        </div>
        <div class="step-text-horizontal">
            <div class="step-symbol" @click="paso = 2">
                <div class="icon">
                    <div class="circle2"></div>
                    <svg class="icon-personal2" width="24" height="25" viewBox="0 0 24 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0003 6.5C10.3436 6.5 9.00011 7.84285 9.00011 9.50021C9.00011 11.1576 10.3436 12.5004 12.0003 12.5004C13.657 12.5004 15.0005 11.1569 15.0005 9.50021C15.0005 7.84348 13.6577 6.5 12.0003 6.5ZM12.0003 13.9059C9.74747 13.9059 5.25 15.0368 5.25 17.2808V19.1558H18.75V17.2808C18.75 15.0368 14.2532 13.9059 11.9997 13.9059H12.0003Z"
                            fill="#242E39" />
                    </svg>
                </div>
            </div>
            <div class="text2">Seleccionar Pagos</div>
        </div>
        <div class="step-trail2">
            <div class="rect"></div>
        </div>
        <div class="step-text-horizontal">
            <div class="step-symbol" @click="paso = 3">
                <div class="icon">
                    <div class="circle2"></div>
                    <svg class="icon-personal3" width="24" height="25" viewBox="0 0 24 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0003 6.5C10.3436 6.5 9.00011 7.84285 9.00011 9.50021C9.00011 11.1576 10.3436 12.5004 12.0003 12.5004C13.657 12.5004 15.0005 11.1569 15.0005 9.50021C15.0005 7.84348 13.6577 6.5 12.0003 6.5ZM12.0003 13.9059C9.74747 13.9059 5.25 15.0368 5.25 17.2808V19.1558H18.75V17.2808C18.75 15.0368 14.2532 13.9059 11.9997 13.9059H12.0003Z"
                            fill="#242E39" />
                    </svg>
                </div>
            </div>
            <div class="text3">Pagar</div>
        </div>
    </div>
    <DatosClienteComponent v-if="paso === 1"></DatosClienteComponent>
    <SeleccionarPagoComponent :entidadId="entidadId" v-if="paso === 2"></SeleccionarPagoComponent>
    <PagarComponent v-if="paso === 3"></PagarComponent>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
import DatosClienteComponent from './DatosClienteComponent.vue';
import SeleccionarPagoComponent from './SeleccionarPagoComponent.vue'
import PagarComponent from './PagarComponent.vue'
import MyStepper from './MyStepper.vue';
const props = defineProps(["entidadId"]);
const paso: Ref<number> = ref(1);
</script>
<style scoped>
a,
button,
input,
select,
h1,
h2,
h3,
h4,
h5,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    appearance: none;
    background: none;

    -webkit-font-smoothing: antialiased;
}

.paso1,
.paso1 * {
    box-sizing: border-box;
}

.paso1 {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
}

.header {
    background: #ffffff;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    height: 93px;
    position: relative;
    overflow: hidden;
}

.logo {
    padding: 24px 0px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    width: 200px;
    height: auto;
    position: relative;
}

.quick-pay-blanco-1 {
    flex-shrink: 0;
    width: 200px;
    height: auto;
    position: relative;
    object-fit: cover;
}

.entidades-barra {
    padding: 10px 34px 10px 34px;
    display: flex;
    flex-direction: row;
    gap: 115px;
    align-items: center;
    justify-content: center;
    /* flex-shrink: 0; */
    width: 100%;
    height: 61px;
    overflow: hidden;
}

.mensaje,
.mensaje2 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.mensaje.clicked,
.mensaje2.clicked {
    font-weight: 700;
}

.mensaje:hover::before,
.mensaje2:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #1f4680;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
}

.mensaje:hover::before,
.mensaje2:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.steps {
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(245, 241, 230, 0.7) 100%);
    padding: 40px 58px 40px 58px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: 870px;
    min-width: 360px;
    position: relative;
    overflow: hidden;
}

.club-the-strongest {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    padding: 0px 33px 0px 33px;
    display: flex;
    flex-direction: row;
    gap: 70px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 780px;
    height: 200px;
    position: relative;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
    overflow: hidden;
}

.contenedor-club {
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
}

.titulo-club {
    color: #13316c;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    font-weight: 700;
    position: relative;
}

.logo-club {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    position: relative;
    object-fit: cover;
}

.datos-club {
    padding: 39px 0px 39px 0px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    width: 891px;
    height: 279px;
    position: relative;
    overflow: hidden;
}

.telefono-club span,
.direccion-club span,
.nit-club span {
    font-size: 20px;
}


.telefono-club {
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    height: 46px;
    position: relative;
    overflow: hidden;
}

.tel-span {
    color: #1f4680;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

.tel-span2 {
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

.tel-span3 {
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

.direccion-club {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    height: 44px;
    position: relative;
    overflow: hidden;
    text-align: left;

}


.direccion1 {
    color: #1f4680;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

.direccion2 {
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

.nit-club {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    height: 27px;
    position: relative;
    overflow: hidden;
}

.nit-1 {
    text-align: left;
    color: #1f4680;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

.nit-2 {
    text-align: left;
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

.stepper-horizontal {
    padding: 30px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 1321px;
    position: relative;
}

.step-text-horizontal {
    flex-shrink: 0;
    width: 32px;
    height: 58px;
    position: relative;
}

.step-symbol {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
}

.circle {
    background: var(--light, #ffffff);
    border-radius: 50%;
    border-style: solid;
    border-color: var(--active, #0162dd);
    border-width: 2px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon-personal {
    height: auto;
    position: absolute;
    right: 12.5%;
    left: 12.5%;
    width: 75%;
    bottom: 15.62%;
    top: 9.38%;
    height: 75%;
    overflow: visible;
}



.text {
    color: #2360bc;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 700;
    position: absolute;
    left: -30px;
    top: 42px;
}

.step-trail {
    flex-shrink: 0;
    width: 595px;
    height: 32px;
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

.circle2 {
    background: var(--light, #ffffff);
    border-radius: 50%;
    border-style: solid;
    border-color: var(--default, #a1aebe);
    border-width: 2px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon-personal2 {
    height: auto;
    position: absolute;
    right: 14.06%;
    left: 10.94%;
    width: 75%;
    bottom: 14.06%;
    top: 10.94%;
    height: 75%;
    overflow: visible;
}

.text2 {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -44.5px;
    top: 42px;
}

.step-trail2 {
    flex-shrink: 0;
    width: 559px;
    height: 32px;
    position: relative;
}

.icon-personal3 {
    height: auto;
    position: absolute;
    right: 14.06%;
    left: 10.94%;
    width: 75%;
    bottom: 14.06%;
    top: 10.94%;
    height: 75%;
    overflow: visible;
}

.text3 {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -4.5px;
    top: 42px;
}


.informacion-1 {

    padding-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 100px;
    align-items: center;

}

.codigo-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-field {

    padding: 12px 16px;
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
    border: 1px solid rgba(38, 154, 212, 0.2);
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

.informacion-cliente {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.codigo-cliente span {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;
}

.codigo-cliente span:nth-child(2) {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 300;
    /* Ligero */
}
</style>
