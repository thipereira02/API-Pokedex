/* eslint-disable no-mixed-spaces-and-tabs */
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSessionTable1629375218179 implements MigrationInterface {
    name = "CreateSessionTable1629375218179"

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("CREATE TABLE \"sessions\" (\"id\" SERIAL NOT NULL, \"token\" character varying NOT NULL, \"userId\" integer NOT NULL, CONSTRAINT \"PK_3238ef96f18b355b671619111bc\" PRIMARY KEY (\"id\"))");
    	await queryRunner.query("ALTER TABLE \"sessions\" ADD CONSTRAINT \"FK_57de40bc620f456c7311aa3a1e6\" FOREIGN KEY (\"userId\") REFERENCES \"users\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("ALTER TABLE \"sessions\" DROP CONSTRAINT \"FK_57de40bc620f456c7311aa3a1e6\"");
    	await queryRunner.query("DROP TABLE \"sessions\"");
    }

}
