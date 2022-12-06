import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateAddress1670229686095 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "costumer_id",
            type: "varchar",
            generationStrategy: "uuid",
            isNullable: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "address",
      new TableForeignKey({
        name: "costumer_address",
        columnNames: ["costumer_id"],
        referencedTableName: "costumers",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("address", "costumer_address");
    await queryRunner.dropTable("address");
  }
}
