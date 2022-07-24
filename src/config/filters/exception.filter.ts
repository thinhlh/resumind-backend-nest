import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { BaseResponse } from "../dto/base.response";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();

        let body: BaseResponse<any>;

        if (exception instanceof HttpException) {
            const status = exception.getStatus();

            const body: BaseResponse<any> = {
                success: false,
                message: exception.message,
                data: null,
            }

            response.json(body);
        } else {
            const body: BaseResponse<any> = {
                success: false,
                message: "Internal server error.",
                data: null,
            }

            response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(body)
        }
    }

}