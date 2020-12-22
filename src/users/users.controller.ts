import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service"

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/findOne/:id')
    async findOne(@Param('id') id) {
        const result = await this.usersService.findOne(id)
        return result;
    }

}
