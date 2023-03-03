import { Unit } from "./unit";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address";

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @OneToOne((type) => Address,{nullable:true})
  @JoinColumn()
  address!: Address;

  @OneToMany((type) => Unit, (unit: Unit) => unit.property,{nullable:true})
  units!: Array<Unit>;
}
