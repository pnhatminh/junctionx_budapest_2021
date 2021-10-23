import { EntityRepository, Repository } from "typeorm";
import { AssignmentEntity } from "./assignment.entity";

@EntityRepository(AssignmentEntity)
export class AssignmentRepository extends Repository<AssignmentEntity> { }