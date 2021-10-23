import { Injectable } from '@nestjs/common';

import type { PageDto } from '../../common/dto/page.dto';
import { SideEffectNotFoundException } from '../../exceptions/side-effect-not-found.except';
import type { SideEffectDto } from './dto/side-effect-dto';
import type { SideEffectPageOptionsDto } from './dto/side-effect-page-options.dto';
import { SideEffectRepository } from './side-effect.repository';

@Injectable()
export class SideEffectService {
  constructor(public readonly sideEffectRepository: SideEffectRepository) {}

  async getSideEffects(
    pageOptionsDto: SideEffectPageOptionsDto,
  ): Promise<PageDto<SideEffectDto>> {
    const queryBuilder =
      this.sideEffectRepository.createQueryBuilder('sideEffect');
    const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getSideEffect(sideEffectId: string): Promise<SideEffectDto> {
    const queryBuilder =
      this.sideEffectRepository.createQueryBuilder('sideEffect');

    queryBuilder.where('sideEffect.id = :sideEffectId', { sideEffectId });

    const sideEffectEntity = await queryBuilder.getOne();

    if (!sideEffectEntity) {
      throw new SideEffectNotFoundException();
    }

    return sideEffectEntity.toDto();
  }
}
