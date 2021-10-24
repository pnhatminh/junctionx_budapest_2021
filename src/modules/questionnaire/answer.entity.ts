import { QuestionEntity } from './../question/question.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { IsNotEmpty } from 'class-validator';
import { AnswerDto } from './dto/answer-dto';
import { AssignmentEntity } from './assignment.entity';

@Entity({ name: 'answers' })
@UseDto(AnswerDto)
export class AnswerEntity extends AbstractEntity<AnswerDto> {
    @ManyToOne(() => AssignmentEntity, assignment => assignment.answers)
    assignment: AssignmentEntity

    @OneToOne(() => QuestionEntity)
    @JoinColumn()
    question: QuestionEntity

    @Column()
    @IsNotEmpty()
    answerFromPatient: string
}
