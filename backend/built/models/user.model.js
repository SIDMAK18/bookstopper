"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)('User', exports.userSchema);
