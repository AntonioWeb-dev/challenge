import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';

dotenv.config();

@Module({
  imports: [EmpresaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
