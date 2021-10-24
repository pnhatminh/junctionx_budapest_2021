import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiseaseRepository } from '../disease/disease.repository';
import { AnswerRepository } from '../questionnaire/answer.repository';
import { AssignmentRepository } from '../questionnaire/AssignmentRepository.repository';

import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository, AssignmentRepository, AnswerRepository, DiseaseRepository])],
    controllers: [UserController],
    exports: [UserService],
    providers: [UserService],
})
export class UserModule { }
