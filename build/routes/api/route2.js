"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route2 = express_1.default.Router();
route2.get('/', (req, res) => {
    res.send('Route2 ..');
});
exports.default = route2;
