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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponoseFromGpt = getResponoseFromGpt;
const openai_1 = __importDefault(require("openai"));
const envConfig_1 = require("../../config/envConfig");
const main_pipeline_1 = require("./main.pipeline");
const openai = new openai_1.default({ apiKey: envConfig_1.envConfigs.openApi.key });
function getResponoseFromGpt(userMessages) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        try {
            const completion = yield openai.chat.completions.create({
                messages: [{ role: "system", content: main_pipeline_1.MainPipeline.systemMessage },
                    ...userMessages],
                functions: main_pipeline_1.MainPipeline.functions,
                model: envConfig_1.envConfigs.openApi.chat_model,
            });
            if (((_a = completion.choices[0]) === null || _a === void 0 ? void 0 : _a.finish_reason) === "stop")
                return (_b = completion.choices[0]) === null || _b === void 0 ? void 0 : _b.message.content;
            const function_name = (_c = completion.choices[0]) === null || _c === void 0 ? void 0 : _c.message.function_call.name;
            const function_arguments = JSON.parse((_d = completion.choices[0]) === null || _d === void 0 ? void 0 : _d.message.function_call.arguments);
            return { function_name, function_arguments };
        }
        catch (error) {
            throw new Error(`Error while getting response from chat assistant`);
        }
    });
}
//# sourceMappingURL=gptService.js.map