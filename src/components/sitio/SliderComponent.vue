<template>
  <section class="hero-section px-4 py-10 md:px-10">
    <div class="h-full flex flex-col gap-10">
      <div class="flex flex-row gap-3 justify-start flex-wrap text-6xl sm:text-[81px] md:max-w-[686px] sm:mt-8 md:mt-32 2xl:ml-64 xl:ml-24 ">
        <div>
          <div class="titulo-hero-text">
            <span style="width:100%;" class="">
              <span class="titulo-hero-text-span ">
                Pagos simples,
              </span>
              <span class="titulo-hero-text-span2">
                confianza sólida.
              </span>
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div>
            <div class="subtitulo-hero-text">
              Paga rápido, paga seguro.
            </div>
          </div>

          <a href="#seccion-entidades" class="boton-hero"> Iniciar</a>
        </div>
      </div>

      <div class="hero block md:absolute md:right-2 lg:right-16 right-36 2xl:right-72 xl:bottom-40 bottom-14 self-end">
        <img class="hero-imagen-src xl:max-h-[500px] md:max-h-[450px] max-h-[400px]" src="./../../assets/sitio/heroImageOld.png" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-section {
  background: linear-gradient(112.07deg,
      rgba(221, 230, 241, 1) 39%,
      rgba(253, 196, 71, 0.5) 100%);
  gap: 32px;
  width: 100%;
  height: 913px;
  position: relative;
}


.titulo-hero-text {
  text-align: left;
  font-family: "Poppins", sans-serif;
  line-height: 122.35%;
  font-weight: 500;
  position: relative;
  width: 100%;
  letter-spacing: -3px
}

.titulo-hero-text-span {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  line-height: 122.35%;
  letter-spacing: -4px;
  font-weight: 500;
}

.titulo-hero-text-span2 {
  color: #EAB339;
  font-family: "Poppins", sans-serif;
  line-height: 122.35%;
  letter-spacing: -4px;
  font-weight: 500;
}

.subtitulo-hero-text {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  line-height: 122.35%;
  font-weight: 450;
  position: relative;
  width: 100%;
}

.boton-hero {
  text-decoration: none;
  background: #13316c;
  border-radius: 65px;
  padding: 9px 148px 9px 148px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 292px;
  box-shadow: 0px 1px 5.8px 5px rgba(19, 49, 108, 0.28);
  overflow: hidden;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 122.35%;
  font-weight: 500;
  height: 60px;
}
@media (min-width: 1535px) and (max-width: 1700px) {
  .hero{
    right: 64px
  }
}


.hero-imagen-src {
  object-fit: cover;
}
</style>
