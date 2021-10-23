import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuestionController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuestionController],
  imports: [TypeOrmModule.forFeature([QuestionRepository])],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
