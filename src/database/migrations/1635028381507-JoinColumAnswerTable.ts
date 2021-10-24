import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinColumAnswerTable1635028381507 implements MigrationInterface {
    name = 'JoinColumAnswerTable1635028381507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" ADD "question_id" integer`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "UQ_677120094cf6d3f12df0b9dc5d3" UNIQUE ("question_id")`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "UQ_677120094cf6d3f12df0b9dc5d3"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "question_id"`);
    }

}
