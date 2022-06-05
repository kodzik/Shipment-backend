interface Shipment {
    shipment_id: number;
    ship_date: Date;
    order_id: number;
    origin: string;
    destination: string;
    customer: string;
    type: string;
    carrier: string;
    status: string;
}

export default Shipment