import { Injectable } from '@nestjs/common';

import type { PageDto } from '../../common/dto/page.dto';
import { DiseaseNotFoundException } from '../../exceptions/disease-not-found.exception';
import { DiseaseRepository } from './disease.repository';
import type { DiseasesPageOptionsDto } from './dto/disease-page-options.dto';
import type { DiseaseDto } from './dto/diseases-dto';

@Injectable()
export class DiseaseService {
    constructor(public readonly diseaseRepository: DiseaseRepository) { }

    async getDiseases(
        pageOptionsDto: DiseasesPageOptionsDto,
    ): Promise<PageDto<DiseaseDto>> {
        const queryBuilder = this.diseaseRepository.createQueryBuilder('disease');
        const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

        return items.toPageDto(pageMetaDto);
    }

    async getDisease(diseaseId: number): Promise<DiseaseDto> {
        const queryBuilder = this.diseaseRepository.createQueryBuilder('disease');

        queryBuilder.where('disease.id = :diseaseId', { diseaseId });

        const diseaseEntity = await queryBuilder.getOne();

        if (!diseaseEntity) {
            throw new DiseaseNotFoundException();
        }

        return diseaseEntity.toDto();
    }
}
