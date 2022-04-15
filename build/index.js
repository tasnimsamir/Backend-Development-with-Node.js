"use strict";
// try simple example to test jasmine configuration
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myFunc = (num) => {
    return num * num;
};
exports.default = myFunc;
// try simple example to test express (building the server) configuration
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// define a route handler for the default home page
app.get('/api', (req, res) => {
    res.send('Hello World!');
});
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
