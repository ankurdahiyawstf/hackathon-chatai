"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ai_1 = __importDefault(require("../controller/ai"));
const router = express_1.default.Router();
router.post("/ask", ai_1.default.ask);
exports.default = router;
//# sourceMappingURL=ai.js.map