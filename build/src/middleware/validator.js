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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sanitizedValues = yield schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        req.body = sanitizedValues.body;
        req.query = sanitizedValues.query;
        req.params = sanitizedValues.params;
        return next();
    }
    catch (error) {
        const validationErrors = {};
        error.errors.forEach((errorMessage) => {
            const fieldName = errorMessage.path.join(".");
            validationErrors[fieldName] = errorMessage.message;
        });
        return res.status(400).json({ status: false, errors: validationErrors });
    }
});
exports.validateRequest = validateRequest;
//# sourceMappingURL=validator.js.map