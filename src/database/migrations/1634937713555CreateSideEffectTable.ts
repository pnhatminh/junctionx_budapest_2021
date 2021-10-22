import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSideEffectTable1634937713555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "sideEffects" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "name" VARCHAR
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sideEffects');
  }
}
