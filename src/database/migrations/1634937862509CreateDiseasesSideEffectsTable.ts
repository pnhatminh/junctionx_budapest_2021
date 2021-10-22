import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDiseasesSideEffectsTable1634937862509
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "diseasesSideEffects" (
                "id" SERIAL PRIMARY KEY,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "diseaseId" UUID REFERENCES "diseases"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
                "sideEffectId" UUID REFERENCES "sideEffects"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('diseasesSideEffects');
  }
}
