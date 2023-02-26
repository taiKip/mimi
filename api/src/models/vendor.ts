import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vendor")
export class Vendor{
    @PrimaryGeneratedColumn()
    id!: number

}