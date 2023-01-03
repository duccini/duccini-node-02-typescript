"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourse_1 = __importDefault(require("./CreateCourse"));
function createCourse(req, res) {
    CreateCourse_1.default.execute({
        // duration: 10,
        name: 'Node 7',
        educator: 'Dani Leão'
    });
    return res.send();
}
exports.createCourse = createCourse;
