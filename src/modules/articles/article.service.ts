import { Injectable } from '@nestjs/common';

import { ArticleNotFoundException } from '../../exceptions/article-not-found.exception';
import type { PageDto } from './../../common/dto/page.dto';
import { ArticleRepository } from './article.repository';
import type { ArticleDto } from './dto/article-dto';
import type { ArticlePageOptionsDto } from './dto/article-page-options.dto';

@Injectable()
export class ArticleService {
  constructor(public readonly articleRepository: ArticleRepository) {}

  async getArticles(
    pageOptionsDto: ArticlePageOptionsDto,
  ): Promise<PageDto<ArticleDto>> {
    const queryBuilder = this.articleRepository.createQueryBuilder('article');
    const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getArticle(articleId: string): Promise<ArticleDto> {
    const queryBuilder = this.articleRepository.createQueryBuilder('article');

    queryBuilder.where('article.id = :articleId', { articleId });

    const articleEntity = await queryBuilder.getOne();

    if (!articleEntity) {
      throw new ArticleNotFoundException();
    }

    return articleEntity.toDto();
  }
}
