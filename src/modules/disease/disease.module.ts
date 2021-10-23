import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DiseaseController } from './disease.controller';
import { DiseaseRepository } from './disease.repository';
import { DiseaseService } from './disease.service';

@Module({
  imports: [TypeOrmModule.forFeature([DiseaseRepository])],
  controllers: [DiseaseController],
  exports: [DiseaseService],
  providers: [DiseaseService],
})
export class DiseaseModule {}
