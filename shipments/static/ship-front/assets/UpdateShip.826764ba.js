import{M as r}from"./ModifyShip.0f0532bc.js";import{_ as h,a as o}from"./plugin-vue_export-helper.1b0097eb.js";import{e as m,o as l,c as d,a as s,b as c}from"./index.81b40c9c.js";const u={data(){return{shipment_id:"",shipment:{order_id:"elo",origin:"",destination:"",customer:"",type:"",carrier:"",status:""}}},components:{ModifyShip:r},methods:{async getShipment(e){try{const t=await o.get(`api/shipments/${e}`);this.shipment=await t.data[0]}catch(t){console.log(t)}},async updateShipment(e,t){try{await o.put(`api/shipments/${e}`,t)}catch(n){console.log(n)}finally{this.$router.push("/")}}},mounted(){this.shipment_id=this.$route.params.id.toString(),this.getShipment(this.shipment_id)}},_={class:"input"},f=s("h2",null," Update shipment ",-1);function y(e,t,n,S,$,a){const p=m("ModifyShip");return l(),d("div",_,[f,s("form",null,[c(p,{shipment:this.shipment,onShipment:t[0]||(t[0]=i=>{this.shipment=i})},null,8,["shipment"])]),s("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=i=>a.updateShipment(this.shipment_id,this.shipment))},"Save"),s("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=i=>e.$router.push("/")),style:{"margin-left":"1rem"}},"Cancel")])}var k=h(u,[["render",y]]);export{k as default};
