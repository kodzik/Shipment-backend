<template>
    <div>
        <v-card>
            <v-form v-if="mod_shipment">
                <!-- <v-container> -->
                    <v-text-field
                        v-model="mod_shipment.shipment_id"
                        label="Shipment ID (readonly)"
                        readonly
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.ship_date"
                        label="Shipment Date (readonly)"
                        readonly
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.order_id"
                        label="Order ID"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.origin"
                        label="Origin"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.destination"
                        label="Destination"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.customer"
                        label="Customer"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.type"
                        label="Type"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.carrier"
                        label="Carrier"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="mod_shipment.status"
                        label="Status"
                        required
                    ></v-text-field>
                <!-- </v-container> -->
            </v-form>
        </v-card>


        <!-- <table v-if="mod_shipment">
            <tbody>
                <tr>
                    <td>Order id:</td>
                    <td>
                        <input type="number" v-model="mod_shipment.order_id">
                    </td>
                </tr>
                <tr>
                    <td>Origin:</td>
                    <td>
                        <input v-model="mod_shipment.origin">
                    </td>                
                </tr>
                <tr>
                    <td>Destination:</td>
                    <td>
                        <input v-model="mod_shipment.destination">
                    </td>                
                </tr>
                <tr>
                    <td>Customer:</td>
                    <td>
                        <input v-model="mod_shipment.customer">
                    </td>                   
                </tr>
                <tr>
                    <td>Type:</td>
                    <td><input v-model="mod_shipment.type"></td>
                </tr>
                <tr>
                    <td>Carrier:</td>
                    <td><input v-model="mod_shipment.carrier"></td>
                </tr>
                <tr>
                    <td>Status:</td>
                    <td><input v-model="mod_shipment.status"></td>
                </tr>                            
            </tbody>
        </table> -->

    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from "@vue/runtime-core"
import Shipment from "../types/shipment"

    export default defineComponent({
        props: {
            shipment: {
                required: true,
                type: Object as PropType<Shipment> 
            }
        },
        setup(){
            const mod_shipment = ref<Shipment>()
            return { mod_shipment }
        },
        mounted(){
            // console.log(`Modify shipment, shipment: ${this.shipment }`);
            this.mod_shipment = this.shipment
        },
        emits:['mod_shipment'],
        watch:{
            mod_shipment(){
                this.$emit('mod_shipment', this.mod_shipment)
            }
        }
    })
</script>