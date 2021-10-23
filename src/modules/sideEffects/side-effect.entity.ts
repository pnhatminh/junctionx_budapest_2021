import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { SideEffectDto } from './dto/side-effect-dto';

@Entity({ name: 'sideEffects' })
@UseDto(SideEffectDto)
export class SideEffectEntity extends AbstractEntity<SideEffectDto> {
  @Column({ nullable: false })
  name: string;
}
