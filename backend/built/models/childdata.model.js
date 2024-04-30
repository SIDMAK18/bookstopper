"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childModel = exports.childSchema = void 0;
var mongoose_1 = require("mongoose");
exports.childSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String] },
    description: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.childModel = (0, mongoose_1.model)('child', exports.childSchema);
