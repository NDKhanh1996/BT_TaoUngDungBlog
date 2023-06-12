"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/home", (req, res) => {
    res.render("home");
});
router.post("/home", (req, res) => {
    res.render("show", { content: req.body.content });
});
exports.default = router;
//# sourceMappingURL=router.js.map