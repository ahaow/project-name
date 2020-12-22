import { Module } from '@nestjs/common';
import { BallsService } from './balls.service';
import { BallsController } from './balls.controller';

@Module({
  providers: [BallsService],
  controllers: [BallsController]
})
export class BallsModule {}
