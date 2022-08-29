"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var data_1 = __importDefault(require("./data"));
var app = (0, express_1.default)();
(0, data_1.default)();
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
