<template>
    <div class="input">
        <h2> Add new shipment: </h2>

            <ModifyShip 
                v-if="shipment" 
                :shipment="shipment" 
                @shipment="(mod_shipment) => { this.shipment = mod_shipment }">
            </ModifyShip>

        <button class="btn btn-primary" @click="handleAdd(this.shipment)">Save</button> 
        <button class="btn btn-primary" @click="$router.push('/')" style="margin-left: 1rem">Cancel</button> 
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

                // await console.log(`Error: ${error}, createdShipment: ${createdShipment}`);
                // if(error){
                //     await alert("Invalid data")
                // } 
                // else{
                //     await console.log(`Shipment added: ${createdShipment}`);
                //     await this.$router.push({ name: "home" });  
                // }
            }
        }
    })
</script>

<style>
    .input{
        /* padding-top: 5rem; */
        width: 20%;
        margin: 5rem auto;
    }
</style>

