<template>
    <div class="input">
        <h2> Update shipment </h2>

            <ModifyShip 
                v-if="shipment" 
                :shipment="shipment" 
                @shipment="(mod_shipment) => { this.shipment = mod_shipment }">
            </ModifyShip>

        <button class="btn btn-primary" @click="handleUpdate(this.shipment_id, this.shipment)">Save</button> 
        <button class="btn btn-primary" @click="$router.push('/')" style="margin-left: 1rem">Cancel</button> 
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from '@vue/runtime-core';
    import { shipmentsAPI } from '../API/shipments.api';
    import ModifyShip from "../components/ModifyShip.vue";
    import Shipment from '../types/shipment';
    import { useRoute } from 'vue-router';

    export default defineComponent({
        
        components: { ModifyShip },
        setup(){
            const route = useRoute();
            const shipment = ref<Shipment>();
            const error = ref<string>();
            const shipment_id = ref<string>()

            shipment_id.value = route.params.id.toString()
            shipmentsAPI.getShipment(shipment_id.value).then( (response: any) => {
                [error.value, shipment.value] = response
            })
            return { shipment, shipment_id, error }
        },
        methods:{
            async handleUpdate(id: string, shipment: Shipment){
               const [error, updatedShipment] = await shipmentsAPI.updateShipment(id, shipment)
               if(error) console.error(error);
               else console.log("Shipment updated", updatedShipment);
            }
        },
    })
</script>

<style>
    .input{
        /* padding-top: 5rem; */
        width: 20%;
        margin: 5rem auto;
    }
</style>

