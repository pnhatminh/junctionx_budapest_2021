import { Module } from '@nestjs/common';

import { DiseaseController } from './question.controller';

@Module({
  controllers: [DiseaseController],
})
export class DiseaseModule {}
