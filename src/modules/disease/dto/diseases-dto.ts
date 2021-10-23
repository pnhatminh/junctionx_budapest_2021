import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { SideEffectEntity } from '../../sideEffects/side-effect.entity';
import type { DiseaseEntity } from '../disease.entity';

export class DiseaseDto extends AbstractDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  sideEffects: SideEffectEntity[];

  constructor(disease: DiseaseEntity) {
    super(disease);
    this.name = disease.name;
  }
}
