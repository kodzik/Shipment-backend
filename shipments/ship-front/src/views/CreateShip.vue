<template>
    <div class="main">
        <ModifyShip 
            v-if="shipment" 
            :shipment="shipment" 
            @shipment="(mod_shipment) => { this.shipment = mod_shipment }"
            @save="handleAdd(this.shipment)">
        </ModifyShip>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from '@vue/runtime-core';
    import { shipmentsAPI } from '../API/shipments.api';
    import ModifyShip from "../components/ModifyShip.vue";
    import Shipment from '../types/shipment';

    export default defineComponent({
        
        components: { ModifyShip },
        setup(){
            const error = ref<string>();
            const shipment = ref<Partial<Shipment>>({
                order_id: undefined,
                origin: '',
                destination: '',
                customer: '',
                type: '',
                carrier: '',
                status: '',
            })
            return { shipment, error }
        },
        methods:{
            handleAdd(newShipment: Partial<Shipment>){
                shipmentsAPI.createShipment(newShipment).then( (response) => {
                    const [error, shipment] = response
                    if(error) alert("Invalid data")
                    else{
                        console.log(`Shipment added: ${shipment}`);
                        this.$router.push('/');  
                    }
                })
            }
        }
    })
</script>

<style>
    .main{
        margin-top: 4rem
    }
</style>

