import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDBMovieLog1626578757232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "movie_log",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "endpoint",
                    type: "varchar"
                },
                {
                    name: "params",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "datetime",
                    default: "now()"
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movie_log");
    }

}
