"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfigs = void 0;
require("dotenv/config");
exports.envConfigs = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    openApi: {
        key: process.env.OPENAI_API_KEY,
        chat_model: process.env.OPENAI_CHAT_MODEL
    },
};
//# sourceMappingURL=envConfig.js.map