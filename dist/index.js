"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.APP_PORT || 5000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
app.get('/', (req, res) => {
    res.send('Welcome to the math api');
});
app.use('/', routes_1.mathRouter);
app.listen(PORT, () => console.log(`server running: ${PORT}`));
exports.api = app;
