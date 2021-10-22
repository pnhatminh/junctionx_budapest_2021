import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1634936018810 implements MigrationInterface {
  table_name = 'articles';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
                CREATE TABLE "${this.table_name}" (
                    "id"         uuid              NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
                    "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
                    "updated_at" TIMESTAMP         NOT NULL DEFAULT now(),
                    "title" character varying,
                    "content"  character varying,
                    "diseaseId" uuid REFERENCES "diseases"(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
                );
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table_name);
  }
}
