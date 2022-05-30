<script lang="ts">
    import ModifyShip from "../components/ModifyShip.vue";
    import { http } from "../main.js";

    export default {
        data(){
            return{
                shipment_id: '',
                shipment: {
                    order_id: '',
                    origin: '',
                    destination: '',
                    customer: '',
                    type: '',
                    carrier: '',
                    status: '',
                }
            }
        },
        components: {
            ModifyShip
        },
        methods: {
            async createShipment(shipment: any){
                try {
                    await http.post(`shipments/`, shipment);
                } catch (error) {
                    console.log(error);
                } finally {
                    // alert("Shipment created successfully!")
                    this.$router.push('/')
                }
            }
        },
        mounted(){
            // console.log(process.env.VUE_APP_NOT_SECRET_CODE)
        }
    }
</script>

<template>
    <div class="input">
        <h2> Create shipment </h2>
        <form>
            <ModifyShip :shipment="this.shipment" @shipment="(shipment) => { this.shipment = shipment }"></ModifyShip>
        </form>

        <button class="btn btn-primary" @click="createShipment(this.shipment)">Save</button> 
        <button class="btn btn-primary" @click="$router.push('/')" style="margin-left: 1rem">Cancel</button> 
    </div>
</template>

<style>
    .input{
        /* padding-top: 5rem; */
        width: 20%;
        margin: 5rem auto;
    }
</style>