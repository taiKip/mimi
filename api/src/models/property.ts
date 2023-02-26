import { Unit } from "./unit";
import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address";
import { Company } from "./company";

export class Property {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @ManyToOne((type) => Company, (company: Company) => company.properties)
  @JoinColumn()
  company!: Company;
  @OneToOne((type) => Address)
  @JoinColumn()
  address!: Address;

  @OneToMany((type) => Unit, (unit: Unit) => unit.property)
  units!: Array<Unit>;
}
