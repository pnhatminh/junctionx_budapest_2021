import { Injectable } from '@nestjs/common';

import type { PageDto } from '../../common/dto/page.dto';
import { QuestionNotFoundException } from './../../exceptions/question-not-found.exception';
import type { QuestionDto } from './dto/question-dto';
import type { QuestionPageOptionsDto } from './dto/question-page-options.dto';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
    constructor(
        public readonly questionRepository: QuestionRepository,
    ) { }

    async getQuestions(
        pageOptionsDto: QuestionPageOptionsDto,
    ): Promise<PageDto<QuestionDto>> {
        const queryBuilder = this.questionRepository.createQueryBuilder('question');
        const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);
        return items.toPageDto(pageMetaDto);
    }

    async getQuestion(questionId: number): Promise<QuestionDto> {
        const queryBuilder = this.questionRepository.createQueryBuilder('question');

        queryBuilder.where('question.id = :questionId', { questionId });

        const questionEntity = await queryBuilder.getOne();

        if (!questionEntity) {
            throw new QuestionNotFoundException();
        }

        return questionEntity.toDto();
    }
}
