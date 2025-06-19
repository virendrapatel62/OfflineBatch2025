import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  root() {
    return {
      status: 'ok',
      docs: '/api/docs',
    };
  }

  @Get('/ping')
  ping() {
    return {
      status: 'pong',
    };
  }
}
