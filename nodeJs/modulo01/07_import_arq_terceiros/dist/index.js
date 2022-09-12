"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const email = 'jromario@email.com';
const ip = '192.168.0.1';
console.log(validator_1.default.isEmail(email));
console.log(validator_1.default.isIP(ip));
