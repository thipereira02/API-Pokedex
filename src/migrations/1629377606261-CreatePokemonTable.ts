/* eslint-disable no-mixed-spaces-and-tabs */
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePokemonTable1629377606261 implements MigrationInterface {
    name = "CreatePokemonTable1629377606261"

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("CREATE TABLE \"pokemon\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"number\" character varying NOT NULL, \"image\" character varying NOT NULL, \"weight\" integer NOT NULL, \"height\" integer NOT NULL, \"baseExp\" integer NOT NULL, \"description\" character varying NOT NULL, CONSTRAINT \"PK_0b503db1369f46c43f8da0a6a0a\" PRIMARY KEY (\"id\"))");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("DROP TABLE \"pokemon\"");
    }

}
