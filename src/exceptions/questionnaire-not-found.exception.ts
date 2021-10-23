import { NotFoundException } from '@nestjs/common';

export class QuestionnaireNotFoundException extends NotFoundException {
    constructor(error?: string) {
        super('error.questionnaire_not_found', error);
    }
}
