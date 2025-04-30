import { Controller, Get } from '@nestjs/common';
import { RunService } from './run.service';

@Controller()
export class RunController {
  constructor(private readonly runService: RunService) {}

  @Get('/run/hello')
  getHello(): string {
    return this.runService.getHello();
  }
}
