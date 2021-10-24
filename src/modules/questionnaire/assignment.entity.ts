import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { AssignmentDto } from './dto/assignment-dto.dto';
import { AnswerEntity } from './answer.entity';
import { QuestionnaireEntity } from './questionnaire.entity';
import { UserEntity } from '../user/user.entity';


@Entity({ name: 'assignments' })
@UseDto(AssignmentDto)
export class AssignmentEntity extends AbstractEntity<AssignmentDto> {
    @Column({ type: 'timestamptz' })
    dueDate: Date;

    @Column({ type: 'timestamptz', nullable: true })
    finishedAt: Date

    @ManyToOne(() => UserEntity, user => user.assignedQuestionnaires)
    patient: UserEntity;

    @ManyToOne(() => QuestionnaireEntity, questionnaire => questionnaire.assignments)
    questionnaire: QuestionnaireEntity;

    @OneToMany(() => AnswerEntity, answer => answer.assignment)
    answers: AnswerEntity[]
}
