import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './config/database-config/database-config.service';
import * as dotenv from 'dotenv';
import { StudentModule } from './modules/student/student.module';

dotenv.config();
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${ENV}`,
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
