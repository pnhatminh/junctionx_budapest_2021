import { QuestionnaireEntity } from './../questionnaire/questionnaire.entity';
import { Column, Entity, OneToMany } from 'typeorm';

// import { ArticleEntity } from '../articles/article.entity';
// import { SideEffectEntity } from '../sideEffects/side-effect.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { DiseaseDto } from './dto/diseases-dto';

@Entity({ name: 'diseases' })
@UseDto(DiseaseDto)
export class DiseaseEntity extends AbstractEntity<DiseaseDto> {
    @Column({ nullable: false })
    name: string;

    @OneToMany(() => QuestionnaireEntity, questionnaire => questionnaire.disease)
    questionnaires: QuestionnaireEntity[]

    // @ManyToMany(() => SideEffectEntity)
    // @JoinTable()
    // sideEffects: SideEffectEntity[]

    // // about to change to Article
    // @OneToMany(() => ArticleEntity, ArticleEntity => ArticleEntity.disease, { cascade: true })
    // @JoinTable()
    // articles: ArticleEntity[]
}
