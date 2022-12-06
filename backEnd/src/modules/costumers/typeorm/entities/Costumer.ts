import Address from "../../../address/typeorm/entities/Address";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("costumers")
class Costumer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("date")
  birthday: Date;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany((type) => Address, (address) => address.costumer, {
    cascade: true,
  })
  address: Address[];
}

export default Costumer;
