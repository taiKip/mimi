import { Unit } from "./unit";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address";
import { Company } from "./company";

@Entity()
export class Property extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name!: string;

  @ManyToOne((type) => Company, (company: Company) => company.properties,{nullable:true})
  @JoinColumn()
  company!: Company;
  
  @OneToOne((type) => Address,{nullable:true})
  @JoinColumn()
  address!: Address;

  @OneToMany((type) => Unit, (unit: Unit) => unit.property,{nullable:true})
  units!: Array<Unit>;
}
