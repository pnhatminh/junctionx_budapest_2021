import { QuestionnaireEntity } from './../questionnaire/questionnaire.entity';
import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { QuestionDto } from './dto/question-dto';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'questions' })
@UseDto(QuestionDto)
export class QuestionEntity extends AbstractEntity<QuestionDto> {
    @Column({ nullable: false })
    @IsNotEmpty()
    question: string;

    @Column('text', { array: true })
    @IsNotEmpty()
    options: string[]

    @Column()
    @IsNotEmpty()
    answerFromDoctor: string

    @Column()
    type: string

    @Column({ nullable: true })
    questionType: string

    @ManyToOne(() => QuestionnaireEntity, questionnaire => questionnaire.questions)
    @JoinTable()
    questionnaire: QuestionnaireEntity
}
