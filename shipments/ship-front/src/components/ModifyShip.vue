<template>
    <div>
        <v-form ref="form" v-if="mod_shipment">
            <v-container>
                <v-row v-if="$route.name!='add'">
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.shipment_id"
                            label="Shipment ID (readonly)"
                            readonly
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.ship_date"
                            label="Shipment Date (readonly)"
                            readonly
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.order_id"
                            label="Order ID"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.origin"
                            label="Origin"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.destination"
                            label="Destination"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="mod_shipment.customer"
                            label="Customer"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-select
                            v-model="mod_shipment.type"
                            :items="shipType"
                            label="Type"
                            required
                        ></v-select>                           
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="mod_shipment.carrier"
                            :items="carrier"
                            label="Carrier"
                            required
                        ></v-select>   
                    </v-col>
                </v-row>      

                <v-select
                    v-model="mod_shipment.status"
                    :items="shipStatus"
                    label="Status"
                    required
                ></v-select>               

            </v-container>
            <!-- <v-btn @click="validate()"></v-btn> -->
        </v-form>
    </div>
</template>

<script lang='ts'>
    import { defineComponent, PropType, ref } from "@vue/runtime-core"
    import Shipment from "../types/shipment"

    export default defineComponent({
        data(){
            return{
                shipStatus: [
                    'Ordered',
                    'Packed',
                    'In transit',
                    'Delivered'
                ],
                shipType: [
                    'Standard',
                    'Priority ',
                    'First'
                ],
                carrier: [
                    'DPD',
                    'FedEx',
                    'UPS',
                ]
            }
        },
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
            this.mod_shipment = this.shipment
        },
        methods:{
            validate () {
                // this.$refs.form.validate()
            },
        },
        emits:['mod_shipment'],
        watch:{
            mod_shipment(){
                this.$emit('mod_shipment', this.mod_shipment)
            }
        }
    })
</script>

<style scoped>
    .card{
        width: 60%;
        margin: auto;
        background-color: rgb(236, 236, 236);
    }
</style>