import sequelize from '../src/db'
import { DataTypes } from 'sequelize';
import {Table, Column, PrimaryKey, DataType, Model} from 'sequelize-typescript'

type userType = {
    email: string
    password: string
    role: string
}

interface userInstance extends Model<userType>,userType{}

const User = sequelize.define<userInstance>('user', {
    //id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    info: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}, 
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const DeviceType = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const DeviceBrand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
},
{timestamps: false,
createdAt: false,
updatedAt: false})

const DeviceRating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},
{timestamps: false,
    createdAt: false,
    updatedAt: false})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(DeviceRating)
DeviceRating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

DeviceType.hasMany(Device)
Device.belongsTo(DeviceType)

DeviceBrand.hasMany(Device)
Device.belongsTo(DeviceBrand)

Device.hasMany(DeviceRating)
DeviceRating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

DeviceType.belongsToMany(DeviceBrand, {through: TypeBrand })
DeviceBrand.belongsToMany(DeviceType, {through: TypeBrand })

export default {
    User,
    Basket,
    BasketDevice,
    Device,
    DeviceType,
    DeviceBrand,
    DeviceRating,
    TypeBrand,
}

