<script lang="ts">
    import ModifyShip from "../components/ModifyShip.vue";
    import axios from 'axios';
    
    export default {
        data(){
            return{
                shipment_id: '',
                shipment: {
                    order_id: 'elo',
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
            async getShipment(id: string) {
                try {             
                    const response = await axios.get(`http://localhost:8000/api/shipments/${id}`);
                    this.shipment = await response.data[0];
                } catch (error) {
                    console.log(error);
                }
            },
            async updateShipment(id: string, shipment: any){
                try {
                    await axios.put(`http://localhost:8000/api/shipments/${id}`, shipment);
                } catch (error) {
                    console.log(error);
                } finally {
                    // alert("Shipmend changed successfully!")
                    this.$router.push('/')
                }
            }
        },
        mounted() {
            this.shipment_id = this.$route.params.id.toString()
            this.getShipment(this.shipment_id);
        },
    }
</script>

<template>
    <div class="input">
        <h2> Update shipment </h2>
        <form>
            <ModifyShip :shipment="this.shipment" @shipment="(shipment) => { this.shipment = shipment }"></ModifyShip>
        </form>

        <button class="btn btn-primary" @click="updateShipment(this.shipment_id, this.shipment)">Save</button> 
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