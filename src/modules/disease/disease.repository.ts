import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { DiseaseEntity } from './disease.entity';

@EntityRepository(DiseaseEntity)
export class DiseaseRepository extends Repository<DiseaseEntity> {}
