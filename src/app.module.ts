import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './config/database-config/database-config.service';
import * as dotenv from 'dotenv';
import { StudentModule } from './modules/student/student.module';
import { DebtModule } from './modules/debt/debt.module';
import { InstallmentModule } from './modules/installment/installment.module';
import { PlanModule } from './modules/plan/plan.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { BuildingModule } from './modules/building/building.module';
import { SemesterModule } from './modules/semester/semester.module';

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
    DebtModule,
    InstallmentModule,
    PlanModule,
    ProfessorModule,
    BuildingModule,
    ClassroomModule,
    SemesterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
