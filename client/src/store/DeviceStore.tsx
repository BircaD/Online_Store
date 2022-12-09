import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    _types;
    _brands;
    _devices;
    constructor () {
        this._types = [
            {id: 1, name: "Smartphone"},
            {id: 2, name: "Televizor"}

        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Xiaomi Redmi Note 11", price: 4300, rating: 0, info: "4Gb/128Gb Graphite Grey", img: "8d9fb337-7610-4e82-8a9e-1568eef4fd8e.jpg"},
            {id: 2,	name: "Xiaomi Redmi 10C", price: 3100, rating: 0, info : "4Gb/64Gb Grey", img: "d61bc8c1-c5f0-4504-a6a1-ff14130be3de.jpg"},
            {id: 3,	name: "Apple iPhone 11", price: 12800, rating: 0, info: "128Gb Black",	img: "7dcacf75-503b-42ff-99b8-95546ce7fa75.jpg"},	
            {id: 4,	name: "Apple iPhone 12", price: 17000, rating: 0, info: "128Gb Grey", img: "0f1b2457-31ab-4be7-825b-991d9e8af935.jpg"},	
            {id: 5,	name: "Apple iPhone 13 Pro", price: 26000, rating: 0, info: "256Gb Sierra Blue", img: "008fd943b-1495-4d98-810e-1acbe733c239.jpg"},
            {id: 6, name: "Samsung SM-A325 Galaxy A32", price: 4900, rating: 0, info: "4Gb/128Gb Black", img: "c8e1a716-c2e1-45e4-abc0-dded0e78e674.jpg"},
            {id: 7, name: "Samsung SM-S908 Galaxy S22 Ultra", price: 27900, rating: 0, info: "12Gb/512Gb Black", img: "83ec976b-5ac9-46e7-b1dc-da314b042d62.jpg"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types: {id: number, name: string}[]){
        this._types = types
    }

    setBrands(brands: {id: number, name: string}[]){
        this._brands = brands
    }

    setDevices(devices: { id: number; name: string; price: number; rating: number, info: string; img: string; }[]){
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}