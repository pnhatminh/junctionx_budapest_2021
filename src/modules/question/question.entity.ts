import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { QuestionDto } from './dto/question-dto';

@Entity({ name: 'questions' })
@UseDto(QuestionDto)
export class QuestionEntity extends AbstractEntity<QuestionDto> {
  @Column({ nullable: false })
  name: string;
}
