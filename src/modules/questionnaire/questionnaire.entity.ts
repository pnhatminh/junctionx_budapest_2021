import { QuestionEntity } from './../question/question.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { QuestionnaireDto } from './dto/questionnaire-dto';
import { DiseaseEntity } from '../disease/disease.entity';
import { UserEntity } from '../user/user.entity';
import { AssignmentEntity } from './assignment.entity';

@Entity({ name: 'questionnaires' })
@UseDto(QuestionnaireDto)
export class QuestionnaireEntity extends AbstractEntity<QuestionnaireDto> {
    @Column({ nullable: false })
    name: string;

    @OneToMany(() => QuestionEntity, question => question.questionnaire)
    questions: QuestionEntity[]

    @ManyToOne(() => UserEntity, doctor => doctor.createdQuestionnaires)
    @JoinTable()
    doctor: UserEntity

    @OneToMany(() => AssignmentEntity, assignment => assignment.questionnaire)
    assignments: AssignmentEntity[]

    @ManyToOne(() => DiseaseEntity, disease => disease.questionnaires)
    disease: DiseaseEntity
}
