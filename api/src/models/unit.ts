import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property";

@Entity()
export class Unit{
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column({name:"number"})
    unitNumber!: number
    
    @Column({default:false})
    isTaken!: boolean
    
    @ManyToOne(type => Property,property=>property.units)
    property!:Property
}