<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="$router.push('/')"></v-app-bar-nav-icon>

        <v-toolbar-title @click="$router.push('/')">Shipments</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn color="primary" @click="$router.push('/add')">New Shipment</v-btn>

      </v-toolbar>
    </v-card>

    <router-view/>

  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
