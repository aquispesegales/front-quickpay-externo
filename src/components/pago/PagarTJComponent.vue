<template>
    <v-container class="text-center">
        <v-row>
            <v-col cols="6">
                <v-text-field label="Nro de Tarjeta" prepend-inner-icon="mdi-credit-card" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="MM/YY" prepend-inner-icon="mdi-calendar" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="CVV" prepend-inner-icon="mdi-lock" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-col cols="auto">
                    <v-btn color="naranja" size="large" variant="flat">Pagar</v-btn>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>