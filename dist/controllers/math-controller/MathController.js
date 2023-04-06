"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMultipleNumbers = exports.divisionController = exports.multiplicationController = exports.subtractionController = exports.additionController = void 0;
const additionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number1, number2 } = req.body;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, expected numbers',
            });
        }
        const result = number1 + number2;
        return res.json({ result, errorMessage: null });
    }
    catch (error) {
        return res.status(500).json({
            result: null,
            errorMessage: 'Something went wrong',
        });
    }
});
exports.additionController = additionController;
const subtractionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number1, number2 } = req.body;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, expected numbers',
            });
        }
        const result = number1 - number2;
        return res.json({ result, errorMessage: null });
    }
    catch (error) {
        return res.status(500).json({
            result: null,
            errorMessage: 'Something went wrong',
        });
    }
});
exports.subtractionController = subtractionController;
const multiplicationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number1, number2 } = req.body;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, expected numbers',
            });
        }
        const result = number1 * number2;
        return res.json({ result, errorMessage: null });
    }
    catch (error) {
        return res.status(500).json({
            result: null,
            errorMessage: 'Something went wrong',
        });
    }
});
exports.multiplicationController = multiplicationController;
const divisionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number1, number2 } = req.body;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, expected numbers',
            });
        }
        if (number2 === 0) {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, cannot divide by zero',
            });
        }
        const result = number1 / number2;
        if (Number.isInteger(result) === false) {
            return res.json({ result: result.toFixed(2), errorMessage: null });
        }
        return res.json({ result, errorMessage: null });
    }
    catch (error) {
        return res.status(500).json({
            result: null,
            errorMessage: 'Something went wrong',
        });
    }
});
exports.divisionController = divisionController;
const addMultipleNumbers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { numbers } = req.body;
        if (Array.isArray(numbers) &&
            numbers.filter((number) => typeof number === 'number')) {
            return res.status(422).json({
                result: null,
                errorMessage: 'Invalid input, expected numbers only',
            });
        }
        let result = null;
        for (let i = 0; i < numbers.length; i++) {
            if (i === 0) {
                result = numbers[i];
            }
            if (i !== 0) {
                result = result !== null ? result + numbers[i] : null;
            }
        }
        return res.json({ result, errorMessage: null });
    }
    catch (error) {
        return res.status(500).json({
            result: null,
            errorMessage: 'Something went wrong',
        });
    }
});
exports.addMultipleNumbers = addMultipleNumbers;
