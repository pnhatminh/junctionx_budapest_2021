import { NotFoundException } from '@nestjs/common';

export class QuestionNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.question_not_found', error);
  }
}
