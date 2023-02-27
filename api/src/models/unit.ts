import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MaintenanceRequest } from "./maintenanceRequest";
import { Property } from "./property";

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "number" })
  unitNumber!: number;

  @Column({ default: false })
  isTaken!: boolean;

  @ManyToOne((type) => Property, (property) => property.units)
  @JoinColumn()
  property!: Property;

  @OneToMany((type) => MaintenanceRequest, (maintenanceRequest) => maintenanceRequest.unit)
  maintenanceRequests!: Array<MaintenanceRequest>;
}
