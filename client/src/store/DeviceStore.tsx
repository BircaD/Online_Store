import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    _types;
    _brands;
    _devices;
    constructor () {
        this._types = [
            {id: 1, name: "Telefon"},
            {id: 2, name: "Televizor"}

        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Galaxy", price: 7500, brandId: 1, typeId: 1, info: "Smartfon de ultima generatie", img: "87c6bc89-4e3b-4494-b1ff-35b405148668.jpg"},
            {id: 2, name: "Iphone 13", price: 16000, brandId: 1, typeId: 1, info: "Not bad", img: "da70f54e-04aa-4c1a-81ff-d607cb38719e.jpg"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types: {id: number, name: string}[]){
        this._types = types
    }

    setBrands(brands: {id: number, name: string}[]){
        this._brands = brands
    }

    setDevices(devices: { id: number; name: string; price: number; brandId: number; typeId: number; info: string; img: string; }[]){
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