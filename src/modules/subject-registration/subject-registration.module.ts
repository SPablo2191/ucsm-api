import { Module } from '@nestjs/common';
import { SubjectRegistrationService } from './subject-registration.service';
import { SubjectRegistrationController } from './subject-registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectRegistration } from './entities/subject-registration.entity';
import { SubjectRegistrationMapper } from './subject-registration.mapper';
import { SubjectRegistrationRepository } from './subject-registration.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectRegistration])],
  controllers: [SubjectRegistrationController],
  providers: [
    SubjectRegistrationService,
    SubjectRegistrationMapper,
    SubjectRegistrationRepository,
  ],
})
export class SubjectRegistrationModule {}
