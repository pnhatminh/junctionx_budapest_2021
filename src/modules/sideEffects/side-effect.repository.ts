import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { SideEffectEntity } from './side-effect.entity';

@EntityRepository(SideEffectEntity)
export class SideEffectRepository extends Repository<SideEffectEntity> {}
