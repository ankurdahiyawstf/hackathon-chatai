import { chatRoles } from "../../types/enums";
import { gptResponse } from "../../types";
declare function getResponoseFromGpt(userMessages: {
    role: chatRoles;
    content: string;
}[]): Promise<gptResponse>;
export { getResponoseFromGpt };
//# sourceMappingURL=gptService.d.ts.map