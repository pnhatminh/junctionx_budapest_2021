import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePatientsDoctorsTable1634918882110
  implements MigrationInterface
{
  table_name = 'patientsDoctors';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "${this.table_name}"
            (
                "id"         SERIAL PRIMARY KEY,
                "patient_id" UUID REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
                "doctor_id" UUID REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
                "created_at" TIMESTAMPTZ default now(),
                "updated_at" TIMESTAMPTZ default now()

            );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table_name);
  }
}
