import Costumer from "../../../costumers/typeorm/entities/Costumer";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  costumer_id: string;

  @Column("simple-array")
  address: string[];

  @ManyToOne((type) => Costumer, (costumer) => costumer.id)
  @JoinColumn({ name: "costumer_id" })
  costumer: Costumer;
}

export default Address;
