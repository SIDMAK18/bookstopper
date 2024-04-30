"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ficModel = exports.ficSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ficSchema = new mongoose_1.Schema({
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
exports.ficModel = (0, mongoose_1.model)('fic', exports.ficSchema);
