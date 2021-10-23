import { QuestionnaireEntity } from './../questionnaire/questionnaire.entity';
import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { UseDto } from '../../decorators/use-dto.decorator';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { UserDto } from './dto/user-dto';
import { AssignmentEntity } from '../questionnaire/assignment.entity';

@Entity({ name: 'users' })
@UseDto(UserDto)
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    role: RoleType;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    avatar?: string;

    @OneToMany(() => QuestionnaireEntity, questionnaire => questionnaire.doctor)
    createdQuestionnaires: QuestionnaireEntity[]

    @OneToMany(() => AssignmentEntity, assignment => assignment.patient)
    assignedQuestionnaire: AssignmentEntity

    @VirtualColumn()
    fullName?: string;
}
