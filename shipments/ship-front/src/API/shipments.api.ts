import Shipment from "@/types/shipment";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class ShipmentsAPIService{
    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8000/api/shipments"
        })
    }

    private async axiosCall<T>(config: AxiosRequestConfig){
        try {
            const {data} = await this.axiosInstance.request<T>(config);
            return [null, data];
        } catch (error) {
            return[error];
        }
    }

    async getShipment(id:string) {
        return this.axiosCall<Shipment>( {method: 'get', url: `/${id}`})
    }

    async getAllShipments() {
        return this.axiosCall<Shipment[]>( {method: 'get', url: `/`})
    }

    async createShipment(shipment: Partial<Shipment>) {
        return this.axiosCall<Shipment>( {method: 'post', url: `/`, data: shipment})
    }

    async updateShipment(id:string, shipment: Partial<Shipment>) {
        return this.axiosCall<Shipment>( {method: 'put', url: `/${id}`, data: shipment})
    }

    async deleteShipment(id:number) {
        return this.axiosCall<Shipment>( {method: 'delete', url: `/${id}`})
    }

    test(id: string): Promise<Shipment>{
        return this.axiosInstance.get(`/${id}`)
    }
}

export const shipmentsAPI = new ShipmentsAPIService();