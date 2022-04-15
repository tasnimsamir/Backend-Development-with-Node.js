"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route1_1 = __importDefault(require("./api/route1"));
const route2_1 = __importDefault(require("./api/route2"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('Main API Route..');
});
routes.use('/route1', route1_1.default);
routes.use('/route2', route2_1.default);
exports.default = routes;
