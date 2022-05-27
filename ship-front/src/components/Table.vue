<template>
  <div class="container">
    <h3 class="p-3 text-center">Shipments</h3>
    
    <table class="table table-striped table-bordered">
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
                    <button class="btn btn-success my-btn" style="margin: 0.5rem;" @click="$router.push(`/update/${ship.shipment_id}`)"><i class="material-icons">edit</i></button>
                    <button class="btn btn-danger my-btn" style="margin: 0.5rem;" @click="erase(ship.shipment_id)"><i class="material-icons">delete</i></button>
                </td>
            </tr>
        </tbody>
    </table>
    
    <button type="button" class="btn btn-primary" @click="$router.push('add')">New</button>

  </div>    
  
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        columns: ['Shipment ID', 'Order ID', 'Ship date', 'Origin', 'Destination', 'Customer', 'Type ', 'Carrier', 'Status'],
        shipments: [],
      };
    },
    watch: {},
    methods: {
        async getShipments() {
            try {
                const response = await axios.get(`api/shipments/`);
                this.shipments = await response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async erase(id){
            console.log("Delete",id);
            try {
                const response = await axios.delete(`api/shipments/${id}`);
                this.getShipments()
            } catch (error) {
                console.log(error);
            }
        },
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
    },
    },
    created() {
        this.getShipments();
    },
};
</script>

<style>
    #app {
    }

    .my-btn{
        font-size: 0.1rem;
        padding: 0px;
    }
</style>
