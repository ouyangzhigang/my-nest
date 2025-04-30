import { Module } from '@nestjs/common';
import { RunController } from './run.controller';
import { RunService } from './run.service';

@Module({
  imports: [],
  controllers: [RunController],
  providers: [RunService],
})
export class RunModule {}
