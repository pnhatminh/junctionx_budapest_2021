import { UnprocessableEntityException } from '@nestjs/common';

export class FailedAnswerQuestionnaireException extends UnprocessableEntityException {
    constructor(error?: string) {
        super('error.failed_answer_questionnaire', error);
    }
}
