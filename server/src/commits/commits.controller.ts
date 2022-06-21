import { Controller, Post, Get } from "@nestjs/common";
import { CommitsService } from "./commits.service";

@Controller('repository')
export class CommitsController{
    constructor(private readcommitsService: CommitsService) {}
    
    @Get('commits')
    getcommits() {
        return this.readcommitsService.getcommits()
    }
}

