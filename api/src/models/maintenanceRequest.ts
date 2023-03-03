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
import { User } from "./user";
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

  @Column({default:false,nullable:true})
  isApproved!: boolean;
  @ManyToOne((type) => Unit, (unit: Unit) => unit.maintenanceRequests)
  @JoinColumn()
  unit!: Unit;

  @ManyToOne((type) => Unit, (user: User) => user.maintenanceRequests)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export interface IMaintenancePayload{
  message: string,
  severity: severityEnum,
}