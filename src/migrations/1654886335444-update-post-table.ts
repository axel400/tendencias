import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1654886335444 implements MigrationInterface {
    name = 'updatePostTable1654886335444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
