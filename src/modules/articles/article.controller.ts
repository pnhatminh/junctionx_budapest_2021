import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/page.dto';
import { Auth } from '../../decorators/http.decorators';
import { ArticleService } from './article.service';
import type { ArticleDto } from './dto/article-dto';
import { ArticlePageOptionsDto } from './dto/article-page-options.dto';

@Controller('/api/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  @Auth([RoleType.USER])
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: PageDto,
  })
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: ArticlePageOptionsDto,
  ): Promise<PageDto<ArticleDto>> {
    return this.articleService.getArticles(pageOptionsDto);
  }

  @Get(':id')
  @Auth([RoleType.USER])
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get disease by id',
    type: PageDto,
  })
  getById(@Param('id') articleId: string): Promise<ArticleDto> {
    return this.articleService.getArticle(articleId);
  }
}
