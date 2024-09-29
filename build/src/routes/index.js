"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ai_1 = __importDefault(require("./ai"));
const router = express_1.default.Router();
const routes = [{
        route: '/ai',
        router: ai_1.default
    }];
routes.forEach((route) => {
    router.use(route.route, route.router);
});
exports.default = router;
//# sourceMappingURL=index.js.map