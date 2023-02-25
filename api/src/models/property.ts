import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Property{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({nullable:true})
    name!: string
    
}