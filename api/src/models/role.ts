import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
export enum UserRole{
    ADMIN = "admin",
    MANAGER = "manager",
    TENANT = "tenant",
    USER="user"
}
export class Role {
    @PrimaryGeneratedColumn()
    id!: number
    @Column({default:UserRole.USER})
    name!: UserRole
    
    @ManyToOne(type=>User,user =>user.roles)
    user!:User
}