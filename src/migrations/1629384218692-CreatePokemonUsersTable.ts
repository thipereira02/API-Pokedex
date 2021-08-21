/* eslint-disable no-mixed-spaces-and-tabs */
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePokemonUsersTable1629384218692 implements MigrationInterface {
    name = "CreatePokemonUsersTable1629384218692"

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("CREATE TABLE \"pokemonUsers\" (\"id\" SERIAL NOT NULL, \"userId\" integer NOT NULL, \"pokemonId\" integer NOT NULL, CONSTRAINT \"PK_b06d0165912f2f2d8314ca96b4c\" PRIMARY KEY (\"id\"))");
    	await queryRunner.query("ALTER TABLE \"pokemonUsers\" ADD CONSTRAINT \"FK_ce7339a9bfcbc82563dfbe47d0e\" FOREIGN KEY (\"userId\") REFERENCES \"users\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    	await queryRunner.query("ALTER TABLE \"pokemonUsers\" ADD CONSTRAINT \"FK_b9e7c05d3d30eb84677a1bf4a7e\" FOREIGN KEY (\"pokemonId\") REFERENCES \"pokemon\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query("ALTER TABLE \"pokemonUsers\" DROP CONSTRAINT \"FK_b9e7c05d3d30eb84677a1bf4a7e\"");
    	await queryRunner.query("ALTER TABLE \"pokemonUsers\" DROP CONSTRAINT \"FK_ce7339a9bfcbc82563dfbe47d0e\"");
    	await queryRunner.query("DROP TABLE \"pokemonUsers\"");
    }

}
