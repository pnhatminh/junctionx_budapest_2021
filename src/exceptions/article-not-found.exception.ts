import { NotFoundException } from '@nestjs/common';

export class ArticleNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.artivle_not_found', error);
  }
}
