"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRoles = exports.Chains = exports.ContractTypes = void 0;
var ContractTypes;
(function (ContractTypes) {
    ContractTypes["router"] = "router";
    ContractTypes["crossCToken"] = "crossCToken";
    ContractTypes["bridge"] = "bridge";
})(ContractTypes || (exports.ContractTypes = ContractTypes = {}));
var Chains;
(function (Chains) {
    Chains["sepolia"] = "sepolia";
    Chains["bsc"] = "bsc";
    Chains["bssepolia"] = "bssepolia";
    Chains["arbsepolia"] = "arbsepolia";
})(Chains || (exports.Chains = Chains = {}));
var chatRoles;
(function (chatRoles) {
    chatRoles["user"] = "user";
    chatRoles["system"] = "system";
})(chatRoles || (exports.chatRoles = chatRoles = {}));
//# sourceMappingURL=index.js.map