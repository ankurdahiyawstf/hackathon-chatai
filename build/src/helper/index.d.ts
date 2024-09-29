import { chatRoles } from "../types/enums";
export declare const formatUserMessage: (messages: string[]) => {
    role: chatRoles;
    content: string;
}[];
export declare const generateErrorForFunction: (functionName: string, functionArguments: Object) => {
    isError: boolean;
    message: any;
};
export declare const isJson: (data: string) => boolean;
//# sourceMappingURL=index.d.ts.map