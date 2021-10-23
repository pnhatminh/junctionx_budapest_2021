import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDiseaseEntity1635013837263 implements MigrationInterface {
    name = 'CreateDiseaseEntity1635013837263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "side_effects_diseases_diseases" ("side_effects_id" integer NOT NULL, 
        "diseases_id" integer NOT NULL, CONSTRAINT "PK_1ce99d8fde21999815f94ca3833" PRIMARY KEY ("side_effects_id", "diseases_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d667a7ff2f81b0df541ae469ce" ON "side_effects_diseases_diseases" ("side_effects_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_fdcedb1e631886f44d8795d2c3" ON "side_effects_diseases_diseases" ("diseases_id") `);
        await queryRunner.query(`CREATE TABLE "articles_diseases_diseases" ("articles_id" integer NOT NULL, "diseases_id" integer NOT NULL, 
        CONSTRAINT "PK_d9a539c5ab7fb575457b9e92c2f" PRIMARY KEY ("articles_id", "diseases_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f74874a6b9d26f158be31e92ce" ON "articles_diseases_diseases" ("articles_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a8ea9fc3f88ced345eed7862a1" ON "articles_diseases_diseases" ("diseases_id") `);
        await queryRunner.query(`CREATE TABLE "articles_side_effects_side_effects" ("articles_id" integer NOT NULL, "side_effects_id" integer NOT NULL, 
        CONSTRAINT "PK_b9391bfa95380b0d475f35a1896" PRIMARY KEY ("articles_id", "side_effects_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fe336472d3b01fe9e85bb0317e" ON "articles_side_effects_side_effects" ("articles_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_41fb15be7e42fa7a2529e6ceff" ON "articles_side_effects_side_effects" ("side_effects_id") `);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_63701a17ec60c100d5d87ba2953"`);
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "questionnaire_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_63701a17ec60c100d5d87ba2953" FOREIGN KEY ("questionnaire_id") 
        REFERENCES "questionnaires"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "side_effects_diseases_diseases" ADD CONSTRAINT "FK_d667a7ff2f81b0df541ae469ce5" 
        FOREIGN KEY ("side_effects_id") REFERENCES "sideEffects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "side_effects_diseases_diseases" ADD CONSTRAINT "FK_fdcedb1e631886f44d8795d2c3f" 
        FOREIGN KEY ("diseases_id") REFERENCES "diseases"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_diseases_diseases" ADD CONSTRAINT "FK_f74874a6b9d26f158be31e92cef" 
        FOREIGN KEY ("articles_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_diseases_diseases" ADD CONSTRAINT "FK_a8ea9fc3f88ced345eed7862a1b" 
        FOREIGN KEY ("diseases_id") REFERENCES "diseases"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_side_effects_side_effects" ADD CONSTRAINT "FK_fe336472d3b01fe9e85bb0317ec" 
        FOREIGN KEY ("articles_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "articles_side_effects_side_effects" ADD CONSTRAINT "FK_41fb15be7e42fa7a2529e6ceff1" 
        FOREIGN KEY ("side_effects_id") REFERENCES "sideEffects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles_side_effects_side_effects" DROP CONSTRAINT "FK_41fb15be7e42fa7a2529e6ceff1"`);
        await queryRunner.query(`ALTER TABLE "articles_side_effects_side_effects" DROP CONSTRAINT "FK_fe336472d3b01fe9e85bb0317ec"`);
        await queryRunner.query(`ALTER TABLE "articles_diseases_diseases" DROP CONSTRAINT "FK_a8ea9fc3f88ced345eed7862a1b"`);
        await queryRunner.query(`ALTER TABLE "articles_diseases_diseases" DROP CONSTRAINT "FK_f74874a6b9d26f158be31e92cef"`);
        await queryRunner.query(`ALTER TABLE "side_effects_diseases_diseases" DROP CONSTRAINT "FK_fdcedb1e631886f44d8795d2c3f"`);
        await queryRunner.query(`ALTER TABLE "side_effects_diseases_diseases" DROP CONSTRAINT "FK_d667a7ff2f81b0df541ae469ce5"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_63701a17ec60c100d5d87ba2953"`);
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "questionnaire_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_63701a17ec60c100d5d87ba2953" 
        FOREIGN KEY ("questionnaire_id") REFERENCES "questionnaires"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX "public"."IDX_41fb15be7e42fa7a2529e6ceff"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fe336472d3b01fe9e85bb0317e"`);
        await queryRunner.query(`DROP TABLE "articles_side_effects_side_effects"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a8ea9fc3f88ced345eed7862a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f74874a6b9d26f158be31e92ce"`);
        await queryRunner.query(`DROP TABLE "articles_diseases_diseases"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fdcedb1e631886f44d8795d2c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d667a7ff2f81b0df541ae469ce"`);
        await queryRunner.query(`DROP TABLE "side_effects_diseases_diseases"`);
    }

}
