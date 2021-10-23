import { AnswerQuestionnaireBodyDto } from "./answer-questionnaire-body-dto.dto"

export class AnswerQuestionnaireDto {
    patientId: number
    questionnaireId: number
    answers: AnswerQuestionnaireBodyDto[]
}