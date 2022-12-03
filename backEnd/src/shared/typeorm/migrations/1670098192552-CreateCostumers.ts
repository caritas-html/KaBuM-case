import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCostumers1670098192552 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "costumers",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "birthday",
            type: "timestamp",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "rg",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("costumers");
  }
}
