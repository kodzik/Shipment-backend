<template>
  <div>

    <v-table>
        <thead>
            <tr>
                <th v-for="column in columns" v-bind:key="column">
                    {{column}}
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="ship in shipments" v-bind:key="ship.shipment_id">
                <td>{{ship.shipment_id}}</td>
                <td>{{ship.order_id}}</td>
                <td>{{formatDate(ship.ship_date)}}</td>
                <td>{{ship.origin}}</td>
                <td>{{ship.destination}}</td>
                <td>{{ship.customer}}</td>
                <td>{{ship.type}}</td>
                <td>{{ship.carrier}}</td>
                <td>{{ship.status}}</td>
                <td>
                    <button class="btn btn-success my-btn" style="margin: 0.5rem;" @click="handleOnEdit(ship.shipment_id)"><i class="material-icons">edit</i></button>
                    <button class="btn btn-danger my-btn" style="margin: 0.5rem;" @click="handleOnDelete(ship.shipment_id)"><i class="material-icons">delete</i></button>
                </td>
            </tr>
        </tbody>
    </v-table>
  </div>
</template>

<script lang='ts'>
    import { defineComponent, PropType } from "@vue/runtime-core";
    import { shipmentsAPI } from "../API/shipments.api";
    import Shipment from "../types/shipment";

    export default defineComponent({
        props: {
            shipments: {
                required: true,
                type: Array as PropType<Shipment[]>
            }
        },
        setup(){
            const columns = ['Shipment ID', 'Order ID', 'Ship date', 'Origin', 'Destination', 'Customer', 'Type ', 'Carrier', 'Status']            
            return { columns }
        },
        methods: {
            formatDate(date: Date) {
                // const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('en')
            },
            handleOnEdit(id: number){
                this.$router.push(`/update/${id}`)
            },
            async handleOnDelete(id: number){
                const [error, shipment] = await shipmentsAPI.deleteShipment(id)
                if(error) await console.error(error);
                else {
                    await console.log(`Shipment id: ${id} has been deleted.`);
                    await this.$router.push({ name: "home" });  
                }
            },
        },
    })
</script>

<style>

</style>