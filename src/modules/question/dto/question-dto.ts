import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { QuestionEntity } from '../question.entity';
import { UserDto } from './../../user/dto/user-dto';

export class QuestionDto extends AbstractDto {
  @ApiProperty()
  id: string;

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

  constructor(question: QuestionEntity) {
    super(question);
  }
}
