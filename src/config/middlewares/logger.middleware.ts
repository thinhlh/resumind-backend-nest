import { Injectable, NestMiddleware } from "@nestjs/common";
import { time } from "console";
import { Request } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: any, next: (error?: any) => void) {
        console.log(req.method, req.url, new Date().toUTCString());
        next();
    }

}