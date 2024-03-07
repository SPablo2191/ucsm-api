import { Module } from '@nestjs/common';
import { SubjectRegistrationService } from './subject-registration.service';
import { SubjectRegistrationController } from './subject-registration.controller';

@Module({
  controllers: [SubjectRegistrationController],
  providers: [SubjectRegistrationService],
})
export class SubjectRegistrationModule {}
