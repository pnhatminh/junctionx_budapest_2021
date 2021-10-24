import { QuestionRepository } from './../question/question.repository';
import { UserRepository } from './../user/user.repository';
import { FailedAnswerQuestionnaireException } from './../../exceptions/failed-answer-questionnaire.exception';
import { Injectable } from '@nestjs/common';

import type { PageDto } from '../../common/dto/page.dto';
import { QuestionnaireNotFoundException } from '../../exceptions/questionnaire-not-found.exception';
import type { QuestionnaireDto } from './dto/questionnaire-dto';
import type { QuestionnairePageOptionsDto } from './dto/questionnaire-page-options.dto';
import { QuestionnaireRepository } from './questionnaire.repository';
import { AnswerQuestionnaireDto } from './dto/answer-questionnaire-dto.dto';
import { AssignmentRepository } from './AssignmentRepository.repository';
import { AnswerRepository } from './answer.repository';

@Injectable()
export class QuestionnaireService {
    constructor(
        public readonly questionRepository: QuestionRepository,
        public readonly assignmentRepository: AssignmentRepository,
        public readonly userRepository: UserRepository,
        public readonly questionnaireRepository: QuestionnaireRepository,
        public readonly answerRepository: AnswerRepository
    ) { }

    async getQuestions(
        pageOptionsDto: QuestionnairePageOptionsDto,
    ): Promise<PageDto<QuestionnaireDto>> {
        const queryBuilder = this.questionRepository.createQueryBuilder('questionnaire');
        const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

        return items.toPageDto(pageMetaDto);
    }

    async getQuestion(questionnaireId: number): Promise<QuestionnaireDto> {
        const queryBuilder = this.questionRepository.createQueryBuilder('questionnaire');

        queryBuilder.where('questionnaire.id = :questionnaireId', { questionnaireId });

        const questionnaireEntity = await queryBuilder.getOne();

        if (!questionnaireEntity) {
            throw new QuestionnaireNotFoundException();
        }

        return questionnaireEntity.toDto();
    }

    async answerQuestionnaire(payload: AnswerQuestionnaireDto): Promise<{ success: boolean }> {
        const patient = await this.userRepository.findOne({ id: payload.patientId })
        const questionnaire = await this.questionnaireRepository.findOne({ id: payload.questionnaireId })
        const assignment = await this.assignmentRepository.findOne({
            patient: patient,
            questionnaire: questionnaire
        })
        if (!assignment) throw new QuestionnaireNotFoundException
        else {
            for (let answer of payload.answers) {
                console.log(answer.questionId)
                const question = await this.questionRepository.createQueryBuilder("question")
                    .where("question.id = :question_id", { question_id: answer.questionId })
                    .getOne()

                const newAnswer = this.answerRepository.create({
                    question: question,
                    answerFromPatient: answer.answerFromPatient,
                    assignment: assignment
                })
                console.log(newAnswer)
                if (!newAnswer) throw new FailedAnswerQuestionnaireException
                this.answerRepository.save(newAnswer)
            }
            this.assignmentRepository.save({
                ...assignment,
                finishedAt: new Date()
            })
        }
        return { success: true }
    }
}
