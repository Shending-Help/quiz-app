"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var dataPath = path_1.default.join(__dirname, "TestData.json");
var data = JSON.parse(fs_1.default.readFileSync(dataPath, "utf8"));
var getRandomData = function () {
    var randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
};
exports.default = getRandomData;
