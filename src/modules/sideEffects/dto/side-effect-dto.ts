import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { SideEffectEntity } from '../side-effect.entity';

export class SideEffectDto extends AbstractDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  constructor(sideEffect: SideEffectEntity) {
    super(sideEffect);
    this.name = sideEffect.name;
  }
}
