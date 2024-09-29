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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const chains_1 = __importDefault(require("../../config/chains"));
class Helpers {
}
_a = Helpers;
Helpers.getInstance = (chainId, contractType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new ethers_1.ethers.JsonRpcProvider(chains_1.default[chainId].rpc);
        const contract = new ethers_1.ethers.Contract(chains_1.default[chainId].contract[contractType].address, chains_1.default[chainId].contract[contractType].abi, provider);
        return contract;
    }
    catch (error) {
        throw new Error(`Error while getting instance`);
    }
});
exports.default = Helpers;
//# sourceMappingURL=helper.js.map