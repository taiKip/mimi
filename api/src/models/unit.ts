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

  @Column({ name: "number" })
  unitNumber!: string;

  @Column({ default: false })
  isTaken!: boolean;

  @OneToOne((type) => User, { nullable: true })
  user!: User;

  @ManyToOne((type) => Property, (property) => property.units)
  @JoinColumn()
  property!: Property;

  @OneToMany(
    (type) => MaintenanceRequest,
    (maintenanceRequest) => maintenanceRequest.unit
  )
  maintenanceRequests!: Array<MaintenanceRequest>;
}
