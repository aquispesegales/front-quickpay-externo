<template>
    <div class="sponsors flex flex-col xl:flex-row justify-between xl:gap-0 gap-10">
        <div class="comercios-sponsors flex flex-col gap-5">
            <div class="titulo-sponsors text-[20px] md:text-[28px]">Respaldados por:</div>
            <div class="sponsors-container flex flex-wrap gap-3 items-center justify-center">
                <img class="cyber-source" src="@/assets/sitio/CyberSource.png" />
                <img class="red-enlace" src="@/assets/sitio/redEnlace.png" />
                <img class="visa" src="@/assets/sitio/Visa.png" />
                <img class="master-card" src="@/assets/sitio/MasterCard.png" />
                <img class="bancobisa-1" src="@/assets/sitio/bancobisa.png" />
                <img class="qrSimple" src="@/assets/sitio/QRsimple.png" />
            </div>
        </div>
        <div class="self-center xl:self-start">
            <div class="datos"><strong class="font-bold text-[28px]">&copy;</strong> 2024 Quick Pay</div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.sponsors {
    background: rgba(228, 235, 235, 0.7);
    /*border-radius: 65px;*/
    padding: 50px 30px;
}

.comercios-sponsors {
    padding: 10px;
    border-radius: 65px;
    padding: 30px 40px;
    box-shadow: 0px 13px 16px 13px rgba(19, 49, 108, 0.25);
}

.sponsors-container {
    padding: 10px;
}

.titulo-sponsors {
    text-align: center;
    color: #1f4680;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}

@media (min-width: 640px) {
    .titulo-sponsors {
        text-align: left;
    }
}

.cyber-source {
    flex-shrink: 0;
    width: 144px;
    height: 81px;
    position: relative;
    object-fit: cover;
}

.red-enlace {
    flex-shrink: 0;
    width: 70px;
    height: 72px;
    position: relative;
    object-fit: cover;
}

.visa {
    flex-shrink: 0;
    width: 134px;
    height: 41px;
    position: relative;
    object-fit: cover;
}

.master-card {
    flex-shrink: 0;
    width: 97px;
    height: 58px;
    position: relative;
    object-fit: cover;
}

.bancobisa-1 {
    flex-shrink: 0;
    width: 164px;
    height: 49px;
    position: relative;
    object-fit: cover;
}

.qrSimple {
    flex-shrink: 0;
    width: auto;
    height: auto;
    position: relative;
    object-fit: cover;
}

.datos {
    color: #1f4680;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: 300;
}
</style>