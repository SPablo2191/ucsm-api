import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from './config/database-config/database-config.service';
import { StudentModule } from './modules/student/student.module';
import { DebtModule } from './modules/debt/debt.module';
import { InstallmentModule } from './modules/installment/installment.module';
import { PlanModule } from './modules/plan/plan.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { BuildingModule } from './modules/building/building.module';
import { SemesterModule } from './modules/semester/semester.module';
import { CommissionModule } from './modules/commission/commission.module';
import { CommissionScheduleModule } from './modules/commission-schedule/commission-schedule.module';
import { AcademicProgramModule } from './modules/academic-program/academic-program.module';
import * as dotenv from 'dotenv';
import { SubjectModule } from './modules/subject/subject.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { SubjectRegistrationModule } from './modules/subject-registration/subject-registration.module';
import { StudentCommissionModule } from './modules/student-commission/student-commission.module';
import { GradeModule } from './modules/grade/grade.module';

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
    CommissionScheduleModule,
    CommissionModule,
    AcademicProgramModule,
    SubjectModule,
    EnrollmentModule,
    SubjectRegistrationModule,
    StudentCommissionModule,
    GradeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
