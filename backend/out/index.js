"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// connect database
(0, db_1.default)();
app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Hello home route changed second change 3rd change' });
});
app.listen(PORT, () => {
    console.log(`You server is running on port number: ${PORT}`);
});
