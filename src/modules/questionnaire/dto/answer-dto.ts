import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { QuestionDto } from '../../question/dto/question-dto';
import { UserDto } from '../../user/dto/user-dto';
import { AnswerEntity } from '../answer.entity';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import { AssignmentDto } from './assignment-dto.dto';

export class AnswerDto extends AbstractDto {
    @ApiProperty()
    id: number

    @ApiPropertyOptional()
    patient: UserDto

    @ApiPropertyOptional()
    question: QuestionDto

    @ApiPropertyOptional()
    assignment: AssignmentDto

    @ApiProperty()
    answerFromPatient: string

    constructor(AnswerEntity: AnswerEntity) {
        super(AnswerEntity)
        this.id = AnswerEntity.id
        this.answerFromPatient = AnswerEntity.answerFromPatient
    }
}
