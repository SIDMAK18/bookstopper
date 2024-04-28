"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextModel = exports.textSchema = void 0;
var mongoose_1 = require("mongoose");
exports.textSchema = new mongoose_1.Schema({
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
exports.TextModel = (0, mongoose_1.model)('Text', exports.textSchema);
