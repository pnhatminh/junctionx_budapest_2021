import { UserDto } from '../../user/dto/user-dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { AssignmentEntity } from '../assignment.entity';
export class AssignmentDto extends AbstractDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    patient: UserDto

    @ApiProperty()
    dueDate: Date

    @ApiPropertyOptional()
    finishedAt: Date

    constructor(patientsQuestionnaireEntity: AssignmentEntity) {
        super(patientsQuestionnaireEntity)
        this.id = patientsQuestionnaireEntity.id
        this.dueDate = patientsQuestionnaireEntity.dueDate
        this.finishedAt = patientsQuestionnaireEntity.finishedAt
    }
}