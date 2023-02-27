import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Address } from "./address";
import { Company } from "./company";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address!: Address;

 
  @Column({ default: false })
    isAdmin!:boolean

  @ManyToOne((type) => Company, (company: Company) => company.users)
  @JoinColumn()
  company!: Company;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
