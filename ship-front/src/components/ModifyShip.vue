<script>
    export default {
        props: {
            shipment: Object
        },
        emits:['shipment'],
        watch:{
            shipment(){
                this.$emit('shipment', this.shipment)
            }
        }
    }
</script>

<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Order id:</td>
                    <td>
                        <input type="number" v-model="shipment.order_id">
                    </td>
                </tr>
                <tr>
                    <td>Origin:</td>
                    <td>
                        <input v-model="shipment.origin">
                    </td>                
                </tr>
                <tr>
                    <td>Destination:</td>
                    <td>
                        <input v-model="shipment.destination">
                    </td>                
                </tr>
                <tr>
                    <td>Customer:</td>
                    <td>
                        <input v-model="shipment.customer">
                    </td>                   
                </tr>
                <tr>
                    <td>Type:</td>
                    <td><input v-model="shipment.type"></td>
                </tr>
                <tr>
                    <td>Carrier:</td>
                    <td><input v-model="shipment.carrier"></td>
                </tr>
                <tr>
                    <td>Status:</td>
                    <td><input v-model="shipment.status"></td>
                </tr>                            
            </tbody>
        </table>
    </div>
</template>
