<template>
    <v-overlay persistent :model-value="utilStore.dialogLoading.loading" class="align-center justify-center">
        <v-card class="mx-auto" max-width="344" title="Procesando..">
            <template v-slot:prepend>
                <v-progress-circular :width="3" color="naranja" indeterminate></v-progress-circular>
            </template>
            <!--<template v-slot:append>
                <v-avatar size="24">
                  
                </v-avatar>
            </template>-->
            <v-card-text>{{ utilStore.dialogLoading.sms }}</v-card-text>
        </v-card>


    </v-overlay>
</template>
<script setup lang="ts">
import { useUtilStore } from "../store/UtilStore";
const utilStore = useUtilStore();
</script>