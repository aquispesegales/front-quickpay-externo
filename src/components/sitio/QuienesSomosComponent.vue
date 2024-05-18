<template>
  <div id="seccion-quienes-somos" class="quienes-somos flex flex-col w-full">
    <div class="mensaje-principal flex flex-col justify-center items-center">
      <div class="titulo-quienes-somos flex items-center justify-center text-4xl md:text-[64px]">
        Quiénes Somos
      </div>
      <div class="p-3">
        <p
          class="descripcion flex items-center justify-center w-full lg:w-[790px] h-full sm:h-[230px] text-[20px] md:text-[28px]"
        >
          “Desarrollamos una plataforma de cobros enfocada en brindar una
          solución integral al problema de los recaudaciones de nuestros
          clientes”
        </p>
      </div>
    </div>

    <div
      class="mensaje-secundario flex lg:flex-row flex-col justify-center items-center gap-[50px]"
    >
      <div class="mensaje-sec flex flex-col items-center justify-center w-full md:w-[500px] lg:w-[600px] p-5 sm:p-0 h-[400px] lg:h-[600px]">
        <p class="mensaje-sec-text sm:w-[425px] text-[20px] md:text-[28px]">
          31% de las empresas en Bolivia adoptaron algún método de cobro
          electrónico en línea. Con Quick Pay agilizarás esta tarea.
        </p>
      </div>

      <div class="mensaje-sec flex flex-col items-center justify-center w-full md:w-[500px] lg:w-[600px] p-5 sm:p-0 h-[400px] lg:h-[600px]">
        <img class="quienes-somos-imagen md:w-[70%]" :src="imageQuienesSomos" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageQuienesSomos from "@/assets/sitio/QuienesSomosImg.png";
</script>

<style scoped>
.quienes-somos {
  background: #f5f5f5;
  padding: 40px 30px 40px 30px;
}
.mensaje-principal {
  padding: 0px 0px 60px 0px;
}
.titulo-quienes-somos {
  padding: 10px;
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}

.descripcion-quienes-somos {
  margin: 0 0 0 -11px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
}

.descripcion {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

.mensaje-secundario {
  padding: 0px 0px 60px 0px;
}
.mensaje-sec {
  background: rgba(205, 158, 17, 0.23);
  border-radius: 65px;
  box-shadow: 23px 33px 45.1px -6px rgba(97, 63, 7, 0.32);
}

.mensaje-sec-text {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

.quienes-somos-imagen {
  height: auto;
  object-fit: cover;
}
</style>
