import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Query,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
    Body,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { AuthUser } from '../../decorators/auth-user.decorator';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/page.dto';
import { Auth } from '../../decorators/http.decorators';
import type { QuestionnaireDto } from './dto/questionnaire-dto';
import { QuestionnairePageOptionsDto } from './dto/questionnaire-page-options.dto';
import { QuestionnaireService } from './questionnaire.service';
import { UserEntity } from '../user/user.entity';
import { AnswerQuestionnaireBodyDto } from './dto/answer-questionnaire-body-dto.dto';

@Controller('/api/questionnaire')
export class QuestionnaireController {
    constructor(private questionnaireService: QuestionnaireService) { }

    @Get()
    @Auth([RoleType.USER])
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get questionnaires list',
        type: PageDto,
    })
    getAll(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: QuestionnairePageOptionsDto,
    ): Promise<PageDto<QuestionnaireDto>> {
        return this.questionnaireService.getQuestions(pageOptionsDto);
    }

    @Get(':id')
    @Auth([RoleType.USER])
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get questionnaire by id',
        type: PageDto,
    })
    getById(@Param('id') questionnaireId: number): Promise<QuestionnaireDto> {
        return this.questionnaireService.getQuestion(questionnaireId);
    }

    @Post('/answer/:id')
    @UseGuards(AuthGuard())
    @UseInterceptors(AuthUserInterceptor)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Submit answer for questionnaire',
        type: PageDto,
    })
    answerQuestionnaire(@Param('id') questionnaireId: number, @AuthUser() user: UserEntity,
        @Body('answers') answers: AnswerQuestionnaireBodyDto[]): Promise<{ success: boolean }> {
        return this.questionnaireService.answerQuestionnaire({
            questionnaireId: questionnaireId,
            patientId: user.id,
            answers
        })
    }

    // @Post('/create/:id')
    // @Auth([RoleType.USER])
    // @UseGuards(AuthGuard())
    // @UseInterceptors(AuthUserInterceptor)
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({
    //     status: HttpStatus.OK,
    //     description: 'Submit answer for questionnaire',
    //     type: PageDto,
    // })
    // createQuestionnaire(@Param('id') questionnaireId: number, @AuthUser() user: UserEntity, 
    //@Body() body: AnswerQuestionnaireBodyDto): Promise<{ success: boolean }> {
    //     return this.questionnaireService.answerQuestionnaire({
    //         questionnaireId: questionnaireId,
    //         patientId: user.id,
    //         ...body
    //     })
    // }

    // @Post('/assign/:d')
    // @Auth([RoleType.USER])
    // @UseGuards(AuthGuard())
    // @UseInterceptors(AuthUserInterceptor)
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({
    //     status: HttpStatus.OK,
    //     description: 'Submit answer for questionnaire',
    //     type: PageDto,
    // })
    // assignQuestionnaire(@Param('id') questionnaireId: number, @AuthUser() user: UserEntity, 
    // @Body() body: AnswerQuestionnaireBodyDto): Promise<{ success: boolean }> {
    //     return this.questionnaireService.answerQuestionnaire({
    //         questionnaireId: questionnaireId,
    //         patientId: user.id,
    //         answers: body.answers
    //     })
    // }
}
