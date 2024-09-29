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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const gptService_1 = require("../services/gpt/gptService");
class Ai {
}
_a = Ai;
Ai.ask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query, address } = req.body;
        const userMessage = (0, helper_1.formatUserMessage)(query);
        let data = yield (0, gptService_1.getResponoseFromGpt)(userMessage);
        let [success, message] = [true, 'query complete',];
        if (!data) {
            throw new Error('please try again later.');
        }
        if (typeof data === 'string' && (0, helper_1.isJson)(data.trim())) {
            data = JSON.parse(data.trim());
        }
        // if(typeof data === 'string'){
        //     success = false;
        //     // message = data;
        //     message = `please write your query around: bridge,swap,liquidity pool,cross chain token deployment`;
        //     data = "";
        //     return res.status(200).json({success, message,data});
        // }
        const { function_arguments, function_name } = data;
        if (!function_arguments || !function_name) {
            success = false;
            message = `please write your query around: bridge,swap,liquidity pool,cross chain token deployment`;
        }
        else {
            const errorMessage = (0, helper_1.generateErrorForFunction)(function_name, function_arguments);
            if (errorMessage.isError) {
                success = false;
                message = errorMessage.message;
                data = "";
            }
        }
        res.status(200).json({ success, message, data });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.default = Ai;
//# sourceMappingURL=ai.js.map