import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDiseaseTable1634918148311 implements MigrationInterface {
  table_name = 'diseases';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "${this.table_name}"
            (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "name" VARCHAR
            )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table_name);
  }
}
