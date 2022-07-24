import { Module } from "@nestjs/common";
import { CommonControler } from "./common.controller";

@Module({
    controllers: [CommonControler]
})
export class CommonModule {

}