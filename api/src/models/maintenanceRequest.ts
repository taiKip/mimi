import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Entity,
} from "typeorm";
import { Unit } from "./unit";
export enum severityEnum {
  EMERGENCY = "emergency",
  NORMAL = "normal",
}

@Entity()
export class MaintenanceRequest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  message!: string;

  @Column({
    type: "enum",
    enum: severityEnum,
    default: severityEnum.NORMAL,
  })
  severity!: severityEnum;

  @Column({ default: false, name: "isfixed" })
  isFixed!: boolean;

  @ManyToOne((type) => Unit, (unit: Unit) => unit.maintenanceRequests)
  @JoinColumn()
  unit!: Unit;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
