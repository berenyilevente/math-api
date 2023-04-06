"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathRouter = void 0;
const controllers_1 = require("../../controllers");
const express_1 = __importDefault(require("express"));
exports.mathRouter = express_1.default.Router();
exports.mathRouter.post('/addition', controllers_1.additionController);
exports.mathRouter.post('/subtraction', controllers_1.subtractionController);
exports.mathRouter.post('/multiplication', controllers_1.multiplicationController);
exports.mathRouter.post('/division', controllers_1.divisionController);
exports.mathRouter.post('/addMultipleNumbers', controllers_1.addMultipleNumbers);
