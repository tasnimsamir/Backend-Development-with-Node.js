"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route1 = express_1.default.Router();
route1.get('/', (req, res) => {
    res.send('Route1..');
});
exports.default = route1;
