"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderItemSchema = exports.LatLngSchema = void 0;
var mongoose_1 = require("mongoose");
var orderstatus_1 = require("../constants/orderstatus");
var textdata_model_1 = require("./textdata.model");
exports.LatLngSchema = new mongoose_1.Schema({
    lat: { type: String, required: true },
    lng: { type: String, required: true },
});
exports.OrderItemSchema = new mongoose_1.Schema({
    book: { type: textdata_model_1.textSchema, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
var orderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    addressLatLng: { type: String, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [exports.OrderItemSchema], required: true },
    status: { type: String, default: orderstatus_1.OrderStatus.NEW },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.OrderModel = (0, mongoose_1.model)('order', orderSchema);
