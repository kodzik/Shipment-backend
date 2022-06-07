<template>
    <div>
        <v-card class="card">
            <ShipmentList 
            v-if="shipments" 
            :shipments="shipments"
            @delete="getShipments()"
            />
            <p v-else>Currently there are no shipments.</p>
        </v-card>
    </div> 
</template>

<script lang='ts'>
    import { defineComponent, ref } from "@vue/runtime-core";

    import ShipmentList from "../components/ShipmentList.vue";
    import { shipmentsAPI } from "../API/shipments.api"
    import Shipment from "../types/shipment";

    export default defineComponent({
        components: { ShipmentList },
        setup(){
            const shipments = ref<Shipment[]>()
            const error = ref<string>()

            const getShipments = () => {
                shipmentsAPI.getAllShipments().then( (response: any) =>{
                    [error.value, shipments.value] = response
                })
            }
            getShipments()
            return { error, shipments, getShipments }
        },
    })
</script>

<style scoped>
    .card{
        width: 90%;
        margin: auto;
    }
</style>