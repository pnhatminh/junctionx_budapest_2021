import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { DiseaseDto } from '../../disease/dto/diseases-dto';
import type { ArticleEntity } from '../article.entity';

export class ArticleDto extends AbstractDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiPropertyOptional()
    disease: DiseaseDto;

    constructor(article: ArticleEntity) {
        super(article);
        this.id = article.id;
        this.title = article.title;
        this.content = article.content;
    }
}
