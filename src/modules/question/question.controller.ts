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
import type { QuestionDto } from './dto/question-dto';
import { QuestionPageOptionsDto } from './dto/question-page-options.dto';
import { QuestionService } from './question.service';

@Controller('/api/question')
export class QuestionController {
    constructor(private questionService: QuestionService) { }

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
        pageOptionsDto: QuestionPageOptionsDto,
    ): Promise<PageDto<QuestionDto>> {
        return this.questionService.getQuestions(pageOptionsDto);
    }

    @Get(':id')
    @Auth([RoleType.USER])
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get disease by id',
        type: PageDto,
    })
    getById(@Param('id') questionId: number): Promise<QuestionDto> {
        return this.questionService.getQuestion(questionId);
    }
}

