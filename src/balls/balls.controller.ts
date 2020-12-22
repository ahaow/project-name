import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BallsService } from './balls.service'
import { result } from './../config/response.data'

@Controller('balls')
export class BallsController {
    constructor(private readonly ballsService: BallsService) { }

    // 创建球类
    @Post('/create')
    async create(@Body() body): Promise<result> {
        const result = this.ballsService.createBall(body)
        return result;
    }

    // 查找单个
    @Get('/selectOne/:id')
    async selectOne(@Param('id') id) {
        const result = this.ballsService.selectOneBall(id)
        return result;
    }

    // 查找所有
    @Get('/selectAll')
    async selectAll() {
        const result = this.ballsService.selectAllBall()
        return result;
    }

    // 更新某个
    @Put('/update/:id')
    async updateOne(@Param('id') id, @Body() body) {
        console.log('id', id)
        console.log('body', body)
    }


}
