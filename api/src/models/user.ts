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

  @Column()
  password!:string
  @OneToOne(() => Address,{nullable:true})
  @JoinColumn()
  address!: Address;

  @OneToOne(() => User,{nullable:true})
    @JoinColumn()
  unit!: Unit;

 
  @Column({ default: false })
  isAdmin!: boolean;

  @OneToMany(
    (type) => MaintenanceRequest,
    (maintenanceRequest) => maintenanceRequest.user,
    {nullable:true}
  )
  maintenanceRequests!: Array<MaintenanceRequest>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export interface IloginDetails {
  password: string;
  email: string;
}