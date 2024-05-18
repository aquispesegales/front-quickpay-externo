<template>
  <section
    id="seccion-contactos"
    class="contactanos flex flex-col justify-center w-full p-5 sm:p-[50px]"
  >
    <div class="contactanos-container flex flex-col justify-center gap-5 p-8 sm:p-[55px] text-[30px] md:text-[64px]">
      <div class="titulo-contactanos self-center lg:self-start">
        CONTÁCTANOS
      </div>
      <div class="flex lg:flex-row flex-col justify-between gap-14">
        <form
          @submit.prevent="enviarMensaje"
          class="mensaje-usuario flex flex-col justify-between lg:w-1/2 gap-5"
        >
          <div
            class="nombre-contactanos flex flex-col items-start justify-start"
          >
            <div class="nombre">Nombre:</div>
            <input type="text" id="nombre" name="nombre" />
          </div>

          <div
            class="correo-contactanos flex flex-col items-start justify-start"
          >
            <div class="correo">Correo:</div>
            <input type="text" id="correo" name="correo" />
          </div>

          <div
            class="asunto-contactanos flex flex-col items-start justify-start"
          >
            <div class="asunto">Asunto:</div>
            <input type="text" id="asunto" name="asunto" />
          </div>

          <div
            class="mensaje-contactanos flex flex-col items-start justify-start"
          >
            <div class="mensaje">Mensaje:</div>
            <textarea
              type="text"
              id="mensaje"
              class="resize-y max-h-52"
              name="mensaje"
            />
          </div>

          <button
            type="submit"
            class="button-contacto mt-6 text-[20px] md:text-[28px]"
          >
            Enviar Mensaje
          </button>
        </form>

        <div class="datos-empresa flex flex-col gap-3">
          <div class="flex flex-row items-center justify-start gap-3">
            <img
              :src="iconUbicacion"
              class="contacto-icons w-[28px]"
              alt="ubicación-quickpay"
            />
            <p class="text-contactos">Ubicación</p>
          </div>
          <p class="ubicacion text-[20px] md:text-[28px]">La Paz, Bolivia</p>

          <div class="flex flex-row justify-start items-center gap-3">
            <img
              :src="iconCorreo"
              class="contacto-icons w-[30px]"
              alt="correo-quickpay"
            />
            <p class="text-contactos">Correo</p>
          </div>
          <p class="correo-empresa text-[20px] md:text-[28px] whitespace-normal overflow-auto max-w-full">ventas@quickpay.com.bo</p>

          <div class="flex flex-row items-center justify-start gap-3">
            <img
              :src="iconTelefono"
              class="contacto-icons w-[30px]"
              alt="telefono-quickpay"
            />
            <p class="text-contactos">Teléfono</p>
          </div>
          <p class="telefono-empresa text-[20px] md:text-[28px]">+591 12345678</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import iconUbicacion from "@/assets/iconos/ubicacion.svg";
import iconCorreo from "@/assets/iconos/correo.svg";
import iconTelefono from "@/assets/iconos/telefono.svg";
import { inject } from "vue";
const swal: any = inject("$swal");

const enviarMensaje = (evt: any) => {
  evt.preventDefault()
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value
  const correo = (document.getElementById("correo") as HTMLInputElement).value
  const asunto = (document.getElementById("asunto") as HTMLInputElement).value
  const mensaje = (document.getElementById("mensaje") as HTMLInputElement).value
  if (!nombre || !correo || !asunto || !mensaje) {
    let camposFaltantes = [];
    if (!nombre) camposFaltantes.push("Nombre");
    if (!correo) camposFaltantes.push("Correo");
    if (!asunto) camposFaltantes.push("Asunto");
    if (!mensaje) camposFaltantes.push("Mensaje");

    swal.fire({
      icon: 'error',
      title: 'Error',
      text: `Por favor complete los siguientes campos: ${camposFaltantes.join(", ")}`,
    });
    return;
  }
  swal.fire({
    icon: 'success',
    title: 'Mensaje enviado correctamente',
    text: 'Gracias por contactarnos',
  });
}

</script>

<style scoped>
.contacto-icons {
  height: 100%;
}

.contactanos input[type="text"] {
  padding: 10px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
}
.contactanos {
  background: rgba(228, 235, 235, 0.7);
}
.contactanos-container {
  background: rgba(183, 204, 219, 0.4);
  border-radius: 65px;
  box-shadow: 0px 13px 16px 13px rgba(19, 49, 108, 0.25);
}

.titulo-contactanos {
  padding: 10px 0px;
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.nombre {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.correo {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.asunto {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.mensaje {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
}

#mensaje {
  padding: 15px;
  font-size: 16px;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
}

.image-6 {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  position: relative;
  object-fit: cover;
}
.text-contactos {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.ubicacion {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  position: relative;
}
.correo-empresa {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  text-decoration: underline;
  position: relative;
}
.telefono-empresa {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  position: relative;
}
.button-contacto {
  background-color: #1f4680;
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.button-contacto:hover {
  background-color: #2b6cb0;
}

.button-contacto:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}.datos-empresa{
width:35%;
}
input{
font-size:20px;
}
</style>
