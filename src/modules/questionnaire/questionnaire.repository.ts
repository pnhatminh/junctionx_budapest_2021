import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { QuestionnaireEntity } from './questionnaire.entity';

@EntityRepository(QuestionnaireEntity)
export class QuestionnaireRepository extends Repository<QuestionnaireEntity> { }