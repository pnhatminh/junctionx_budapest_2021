import { SideEffectEntity } from '../sideEffects/side-effect.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators/use-dto.decorator';
import { DiseaseEntity } from '../../modules/disease/disease.entity';
import { ArticleDto } from './dto/article-dto';

@Entity({ name: 'articles' })
@UseDto(ArticleDto)
export class ArticleEntity extends AbstractEntity<ArticleDto> {
    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    content: string;

    @ManyToMany(() => DiseaseEntity)
    @JoinTable()
    diseases: DiseaseEntity[]

    @ManyToMany(() => SideEffectEntity)
    @JoinTable()
    sideEffects: SideEffectEntity[]
}
