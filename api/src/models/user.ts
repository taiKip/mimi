import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./address";
import { Company } from "./company";
import { Unit } from "./unit";
import { MaintenanceRequest } from "./maintenanceRequest";

// https://meet.google.com/eeg-raxg-iyx

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

  @OneToOne(() => User)
  @JoinColumn()
  unit!: Unit;

  @Column({ default: false })
  isAdmin!: boolean;

  @ManyToOne((type) => Company, (company: Company) => company.users)
  @JoinColumn()
  company!: Company;

  @OneToMany(
    (type) => MaintenanceRequest,
    (maintenanceRequest) => maintenanceRequest.user
  )
  maintenanceRequests!: Array<MaintenanceRequest>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
