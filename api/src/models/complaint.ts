import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
export enum severityEnum {
  EMERGENCY = "emergency",
  NORMAL = "normal",
}

export class Complaint {
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

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
