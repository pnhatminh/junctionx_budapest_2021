import { UserRepository } from './../user/user.repository';
import { QuestionRepository } from './../question/question.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuestionnaireController } from './questionnaire.controller';
import { QuestionnaireService } from './questionnaire.service';
import { AssignmentRepository } from './AssignmentRepository.repository';
import { QuestionnaireRepository } from './questionnaire.repository';
import { AnswerRepository } from './answer.repository';

@Module({
    controllers: [QuestionnaireController],
    imports: [TypeOrmModule.forFeature([QuestionnaireRepository, AssignmentRepository, AnswerRepository, QuestionRepository, UserRepository])],
    providers: [QuestionnaireService],
    exports: [QuestionnaireService],
})
export class QuestionnaireModule { }
