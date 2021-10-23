import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserDto } from '../../user/dto/user-dto';
import { QuestionnaireEntity } from '../questionnaire.entity';

export class QuestionnaireDto extends AbstractDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    question: string;

    @ApiProperty()
    doctor: UserDto;

    @ApiProperty()
    patient: UserDto;

    @ApiProperty()
    answersFromDoctor: [];

    @ApiPropertyOptional()
    answersFromPatient: [];

    constructor(questionnaire: QuestionnaireEntity) {
        super(questionnaire);
    }
}
