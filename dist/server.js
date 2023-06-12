"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const upload = new multer_1.default();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/data-source");
const router_1 = __importDefault(require("./src/controller/router"));
const PORT = 8080;
data_source_1.AppDataSource.initialize().then(() => { console.log("Data Source has been initialized!"); }).catch(err => { console.error("Error during Data Source initialization:", err); });
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(router_1.default);
app.listen(PORT);
//# sourceMappingURL=server.js.map