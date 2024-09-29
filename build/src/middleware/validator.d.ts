import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
export declare const validateRequest: (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=validator.d.ts.map