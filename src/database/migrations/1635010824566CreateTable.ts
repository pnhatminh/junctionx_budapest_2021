import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1635010824566 implements MigrationInterface {
    name = 'CreateTable1635010824566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "question" character varying NOT NULL, "options" text array NOT NULL, 
        "answer_from_doctor" character varying NOT NULL, 
        "type" character varying NOT NULL, "question_type" character varying NOT NULL, 
        "questionnaire_id" integer, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "answer_from_patient" character varying NOT NULL, "assignment_id" integer, 
        CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assignments" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "due_date" TIMESTAMP WITH TIME ZONE NOT NULL, 
        "finished_at" TIMESTAMP WITH TIME ZONE, "patient_id" integer, "questionnaire_id" integer, 
        CONSTRAINT "PK_c54ca359535e0012b04dcbd80ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questionnaires" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "doctor_id" integer, 
        CONSTRAINT "PK_a01d7cdea895ed9796b29233610" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'ADMIN', 'DOCTOR')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, 
        "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER', 
        "email" character varying NOT NULL, "password" character varying NOT NULL, 
        "phone" character varying, "avatar" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), 
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "content" character varying NOT NULL, 
        CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "diseases" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, 
        CONSTRAINT "PK_79ddc936b1458d8a079b62dc210" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sideEffects" ("id" SERIAL NOT NULL, 
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, 
        CONSTRAINT "PK_53ee47be4c4d1f155540d61a61d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_63701a17ec60c100d5d87ba2953" 
        FOREIGN KEY ("questionnaire_id") REFERENCES "questionnaires"("id") 
        ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_a025c08dbd5e48ef2609965ca7e" 
        FOREIGN KEY ("assignment_id") REFERENCES "assignments"("id") 
        ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD CONSTRAINT "FK_4d1e391842904b3c7febab565da" 
        FOREIGN KEY ("patient_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignments" ADD CONSTRAINT "FK_f35fb91d50ca940f986a6a670f0" 
        FOREIGN KEY ("questionnaire_id") REFERENCES "questionnaires"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questionnaires" ADD CONSTRAINT "FK_b71133095f56719ae64a0e9b04d" 
        FOREIGN KEY ("doctor_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questionnaires" DROP CONSTRAINT "FK_b71133095f56719ae64a0e9b04d"`);
        await queryRunner.query(`ALTER TABLE "assignments" DROP CONSTRAINT "FK_f35fb91d50ca940f986a6a670f0"`);
        await queryRunner.query(`ALTER TABLE "assignments" DROP CONSTRAINT "FK_4d1e391842904b3c7febab565da"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_a025c08dbd5e48ef2609965ca7e"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_63701a17ec60c100d5d87ba2953"`);
        await queryRunner.query(`DROP TABLE "sideEffects"`);
        await queryRunner.query(`DROP TABLE "diseases"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "questionnaires"`);
        await queryRunner.query(`DROP TABLE "assignments"`);
        await queryRunner.query(`DROP TABLE "answers"`);
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
