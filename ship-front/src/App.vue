<script setup lang="ts">
  export interface IShipment {
    shipment_id: number
    order_id: number 
    ship_date: Date 
    origin: string
    destination: string
    customer: string
    type: string
    carrier: string
    status: string
  }
</script>

<template>
  <RouterView />
</template>

