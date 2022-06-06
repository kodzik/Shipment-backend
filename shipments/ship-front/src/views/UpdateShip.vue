<template>
    <div class="main">
        <v-card class="card">
            <ModifyShip 
                v-if="shipment" 
                :shipment="shipment" 
                @shipment="(mod_shipment) => { this.shipment = mod_shipment }">
            </ModifyShip>

            <div class="btns">
                <v-btn rounded="pill" color="primary" @click="handleUpdate(this.shipment_id, this.shipment)">Save</v-btn>
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
            handleUpdate(id: string, shipment: Shipment){
            shipmentsAPI.updateShipment(id, shipment).then( (response) => {
                    const [error, shipment] = response
                    if(error) alert("Invalid data")
                    else{
                        console.log(`Shipment updated: ${shipment}`);
                        this.$router.push('/');  
                    }
               })
            }
        },
    })
</script>

<style scoped>
    .main{
        margin-top: 4rem
    }
    .card{
        width: 50%;
        margin: auto;
        background-color: rgb(236, 236, 236);
    }
    .btns{
        padding: 1rem;
    }    
</style>
