<template>
    <div class="main">
        <v-card class="card">
            <ModifyShip 
                v-if="shipment" 
                :shipment="shipment" 
                @shipment="(mod_shipment) => { this.shipment = mod_shipment }">
            </ModifyShip>

            <div class="btns">
                <v-btn rounded="pill" color="primary" @click="handleAdd(this.shipment)">Save</v-btn>
                <v-btn rounded="pill" color="primary" @click="$router.push('/')" style="margin-left: 1rem">Cancel</v-btn>
            </div>

        </v-card>
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
                // shipment_id: 12,
                // ship_date: new Date(),
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
                        this.$router.push({ name: "home" });  
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
    .btns{
        padding: 1rem;
    }
    .card{
        width: 50%;
        margin: auto;
        background-color: rgb(236, 236, 236);
    }
</style>

