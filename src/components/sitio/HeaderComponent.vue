<template>
  <section class="header w-full">
    <div class="flex items-center max-w-[1300px] justify-between mx-auto h-full gap-10 px-6">
      <!-- solo para qas-->
      <!--<img src="./../../assets/sitio/no_valid.jpg" alt="no valido" width="200" height="50">-->
      <!-- =============== -->
      <div class="logo flex items-center">
        <a href="/#">
          <img class="LogoImagen" src="./../../assets/sitio/QuickPayLogo1.png" />
        </a>
      </div>
      <div class="nav-menu flex items-center xl:gap-24 lg:gap-16 md:gap-6 text-[16px] md:text-[23px]">
        <a href="/#seccion-quienes-somos" class="quienes-somos-text">Quiénes somos</a>
        <a href="/#seccion-entidades" class="entidades-text">Entidades</a>
        <a href="/#seccion-contactos" class="contactos-text">Contáctanos</a>
        <button class="registrate-button hidden">Regístrate</button>
      </div>
      <button @click="toggleMenu" class="menu-icon">
        <svg class="w-10 h-10" fill="none" stroke="#13316c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div v-show="showMenu" class="absolute top-[111px] right-0 bg-white w-1/2 h-[400px] z-10 rounded-bl-xl">
        <div
          class="flex flex-col text-[#13316c] font-bold items-center justify-center font-poppins text-[16px] sm:text-2xl gap-6 h-full">
          <a href="/#seccion-quienes-somos" @click="closeMenu" class="py-3">Quiénes somos</a>
          <a href="/#seccion-entidades" @click="closeMenu" class="py-2">Entidades</a>
          <a href="/#seccion-contactos" @click="closeMenu" class="py-2">Contáctanos</a>
          <button class="registrate-button py-2 hidden">Regístrate</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';

const showMenu = ref(false);
const toggleMenu = () =>{
  showMenu.value = !showMenu.value;
}
const closeMenu = () =>{
  showMenu.value = false;
}
onMounted(() => {
   // Detecta el evento de clic en cualquier parte del documento y cierra el menú si está abierto
   /*document.addEventListener("click", (event) => {
      const targetElement = event.target;
      if (!targetElement.closest(".header") && this.showMenu) {
        closeMenu();
      }
    });*/
})

/*export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
  mounted() {
    // Detecta el evento de clic en cualquier parte del documento y cierra el menú si está abierto
    document.addEventListener("click", (event) => {
      const targetElement = event.target;
      if (!targetElement.closest(".header") && this.showMenu) {
        this.closeMenu();
      }
    });
  },
};*/

</script>

<style scoped>
a {
  text-decoration: none;
}

.header {
  background: #ffffff;
  gap: 10px;
  height: 111px;
}

.hidden {
  display: none !important;
}

.logo {
  flex-shrink: 0;
  height: 104px;
  position: relative;
}

.LogoImagen {
  height: 48px;
  position: relative;
  object-fit: cover;
}

.quienes-somos-text,
.entidades-text,
.contactos-text,
.registrate-button {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  color: #13316c;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
}

.quienes-somos-text,
.entidades-text,
.contactos-text {
  height: 104px;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease;
}

.registrate-button {
  background: #13316c;
  border-radius: 65px;
  padding: 0px 50px;
  height: 60px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.quienes-somos-text:hover,
.entidades-text:hover,
.contactos-text:hover {
  border-bottom-color: #13316c;
  cursor: pointer;
}

.registrate-button:hover {
  background-color: #d19411;
  cursor: pointer;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 992px) {
  .menu-icon {
    display: block;
  }

  .nav-menu {
    display: none;
  }
}
</style>
