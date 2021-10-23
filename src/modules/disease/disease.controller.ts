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
import { DiseaseService } from './disease.service';
import { DiseasesPageOptionsDto } from './dto/disease-page-options.dto';
import type { DiseaseDto } from './dto/diseases-dto';

@Controller('/api/disease')
export class DiseaseController {
  constructor(private diseaseService: DiseaseService) {}

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
    pageOptionsDto: DiseasesPageOptionsDto,
  ): Promise<PageDto<DiseaseDto>> {
    return this.diseaseService.getDiseases(pageOptionsDto);
  }

  @Get(':id')
  @Auth([RoleType.USER])
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get disease by id',
    type: PageDto,
  })
  getById(@Param('id') diseaseId: string): Promise<DiseaseDto> {
    return this.diseaseService.getDisease(diseaseId);
  }
}
