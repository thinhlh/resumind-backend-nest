import { Controller, Get } from "@nestjs/common";

@Controller()
export class CommonControler {
    @Get("/")
    ping(): string {
        return "Success!"
    }
}