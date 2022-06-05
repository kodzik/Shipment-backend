<template>
    <div>
        <ShipmentList v-if="shipments" :shipments="shipments"/>
        ERROR: {{error}}
        <button type="button" class="btn btn-primary" @click="$router.push('add')">New</button>
    </div> 
</template>

<script lang='ts'>
    import { defineComponent, PropType, ref } from "@vue/runtime-core";

    import ShipmentList from "../components/ShipmentList.vue";
    import { shipmentsAPI } from "../API/shipments.api"
    import Shipment from "../types/shipment";

    export default defineComponent({
        components: { ShipmentList },
        setup(){
            const shipments = ref<Shipment[]>()
            const error = ref<string>()

            shipmentsAPI.getAllShipments().then( (response: any) => {
                [error.value, shipments.value] = response 
            })
            return { error, shipments }
        },
        // methods:{
        //     async getShipments(){
        //         [this.error.values, this.shipments.value] = await shipmentsAPI.getAllShipments()
        //         // if(error) console.error(error);
        //         // else this.shipments = await shipments;
        //     }
        // },

        // data(){
        //     return{
        //         shipments: Array as PropType<Shipment[]>,
        //         // shipments: null,
        //         error: null
        //     }
        // },
        // async created(){
        //     const [error, shipments] = await shipmentsAPI.getAllShipments()
        //     if(error) console.error(error);
        //     else this.shipments = await shipments;
        //     console.log("Home", this.shipments);
        // }     
    })
</script>

<style>

</style>