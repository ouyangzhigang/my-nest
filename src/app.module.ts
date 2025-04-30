import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

import { RunModule } from './run/run.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/static/',
    }),
    // Other modules can be imported here
    RunModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
