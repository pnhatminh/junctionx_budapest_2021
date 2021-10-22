import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePatientDiseasesTable1634938542911
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
                CREATE TABLE "patientDiseases" (
                    "id" SERIAL PRIMARY KEY,
                    "patientId" UUID REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
                    "diseaseId" UUID REFERENCES diseases(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL
                );
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patientDiseases');
  }
}
