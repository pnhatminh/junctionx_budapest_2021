import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDoctorPatients1635010893356 implements MigrationInterface {

    table_name = 'doctorPatients';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "${this.table_name}"(
            "id" SERIAL PRIMARY KEY,
            "doctorId" INT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
            "patientId" INT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
            "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
            "createdAt" TIMESTAMPTZ DEFAULT NOW()
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table_name);
    }

}
