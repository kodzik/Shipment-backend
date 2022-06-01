import{_ as p,h as c,o as a,c as o,a as t,F as d,r as u,t as s,d as h,b}from"./index.0fb9949a.js";const y={data(){return{columns:["Shipment ID","Order ID","Ship date","Origin","Destination","Customer","Type ","Carrier","Status"],shipments:[]}},watch:{},methods:{async getShipments(){try{const n=await c.get("/api/shipments/");this.shipments=await n.data}catch(n){console.log(n)}},async erase(n){console.log("Delete",n);try{const r=await c.delete(`/api/shipments/${n}`);this.getShipments()}catch(r){console.log(r)}},formatDate(n){const r={year:"numeric",month:"long",day:"numeric"};return new Date(n).toLocaleDateString("en",r)}},created(){this.getShipments()}},g={class:"container"},f=t("h3",{class:"p-3 text-center"},"Shipments",-1),k={class:"table table-striped table-bordered"},D=["onClick"],S=t("i",{class:"material-icons"},"edit",-1),v=[S],C=["onClick"],$=t("i",{class:"material-icons"},"delete",-1),w=[$];function x(n,r,m,N,l,i){return a(),o("div",g,[f,t("table",k,[t("thead",null,[t("tr",null,[(a(!0),o(d,null,u(l.columns,e=>(a(),o("th",{key:e},s(e),1))),128))])]),t("tbody",null,[(a(!0),o(d,null,u(l.shipments,e=>(a(),o("tr",{key:e.shipment_id},[t("td",null,s(e.shipment_id),1),t("td",null,s(e.order_id),1),t("td",null,s(i.formatDate(e.ship_date)),1),t("td",null,s(e.origin),1),t("td",null,s(e.destination),1),t("td",null,s(e.customer),1),t("td",null,s(e.type),1),t("td",null,s(e.carrier),1),t("td",null,s(e.status),1),t("td",null,[t("button",{class:"btn btn-success my-btn",style:{margin:"0.5rem"},onClick:_=>n.$router.push(`/update/${e.shipment_id}`)},v,8,D),t("button",{class:"btn btn-danger my-btn",style:{margin:"0.5rem"},onClick:_=>i.erase(e.shipment_id)},w,8,C)])]))),128))])]),t("button",{type:"button",class:"btn btn-primary",onClick:r[0]||(r[0]=e=>n.$router.push("add"))},"New")])}var B=p(y,[["render",x]]);const V=h({name:"HomeView",setup(n){return(r,m)=>(a(),o("main",null,[b(B)]))}});export{V as default};
