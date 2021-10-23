import { EntityRepository, Repository } from "typeorm";
import { AnswerEntity } from "./answer.entity";

@EntityRepository(AnswerEntity)
export class AnswerRepository extends Repository<AnswerEntity> { }