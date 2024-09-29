"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = exports.generateErrorForFunction = exports.formatUserMessage = void 0;
const enums_1 = require("../types/enums");
const messagemap_1 = __importDefault(require("./messagemap"));
const formatUserMessage = (messages) => {
    return messages.map((message) => ({ role: enums_1.chatRoles.user, content: message }));
};
exports.formatUserMessage = formatUserMessage;
const generateErrorForFunction = (functionName, functionArguments) => {
    const functionMessageMap = messagemap_1.default[functionName];
    let message = functionMessageMap.message;
    let isError = false;
    for (let key in functionArguments) {
        if (!functionArguments[key] || functionArguments[key] == 'null') {
            isError = true;
            message += `${functionMessageMap.arguments[key]}\n`;
        }
    }
    return { isError, message };
};
exports.generateErrorForFunction = generateErrorForFunction;
const isJson = (data) => {
    let flag = false;
    console.log(`data:${data}`);
    try {
        JSON.parse(data);
        flag = true;
    }
    catch (error) {
        console.log('not a json obj');
    }
    return flag;
};
exports.isJson = isJson;
//# sourceMappingURL=index.js.map