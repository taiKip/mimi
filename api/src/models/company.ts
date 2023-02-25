import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Company{
    @PrimaryGeneratedColumn()
    company_id!: number;
    
    @Column()
    name!: string;

    @Column()
    businesId!: string;  
        
    @Column({nullable:true})
    website!: string
    
    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}