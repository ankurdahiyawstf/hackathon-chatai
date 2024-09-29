import { catchAsyncError } from "../types";
import { Request, Response, NextFunction } from "express";
declare const catchAsyncError: (func: catchAsyncError) => (req: Request, res: Response, next: NextFunction) => void;
export default catchAsyncError;
//# sourceMappingURL=catchAsyncError.d.ts.map