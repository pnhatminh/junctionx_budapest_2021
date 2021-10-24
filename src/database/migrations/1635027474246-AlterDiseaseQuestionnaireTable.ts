import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterDiseaseQuestionnaireTable1635027474246 implements MigrationInterface {
    name = 'AlterDiseaseQuestionnaireTable1635027474246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diseases" DROP CONSTRAINT "FK_5c9f88269cd3b40030740f5b6a5"`);
        await queryRunner.query(`ALTER TABLE "diseases" DROP COLUMN "questionnaires_id"`);
        await queryRunner.query(`ALTER TABLE "questionnaires" ADD "disease_id" integer`);
        await queryRunner.query(`ALTER TABLE "questionnaires" ADD CONSTRAINT "FK_4ab5c99a66d8528489511a78030" FOREIGN KEY ("disease_id") REFERENCES "diseases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questionnaires" DROP CONSTRAINT "FK_4ab5c99a66d8528489511a78030"`);
        await queryRunner.query(`ALTER TABLE "questionnaires" DROP COLUMN "disease_id"`);
        await queryRunner.query(`ALTER TABLE "diseases" ADD "questionnaires_id" integer`);
        await queryRunner.query(`ALTER TABLE "diseases" ADD CONSTRAINT "FK_5c9f88269cd3b40030740f5b6a5" FOREIGN KEY ("questionnaires_id") REFERENCES "questionnaires"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
