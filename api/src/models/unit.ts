import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MaintenanceRequest } from "./maintenanceRequest";
import { Property } from "./property";
import { User } from "./user";
@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "number", unique: true })
  unitNumber!: string;

  @Column({ default: false })
  isTaken!: boolean;

  @Column({ nullable: true })
  rooms!: number;

  @Column({ nullable: true })
  size!: number;

  @OneToOne((type) => User, (user) => user.unit)
  user!: User;

  @ManyToOne((type) => Property, (property) => property.units)
  @JoinColumn()
  property!: Property;

  @OneToMany(
    (type) => MaintenanceRequest,
    (maintenanceRequest) => maintenanceRequest.unit,
    {nullable:true}
  )
  maintenanceRequests!: Array<MaintenanceRequest>;
}
