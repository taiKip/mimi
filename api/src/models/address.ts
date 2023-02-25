import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("address_tbl")
export class Address{
    @PrimaryGeneratedColumn()
    id!: string
    
    @Column()
    streetAddress!: string;

    @Column()
    city!: string;

    @Column()
    zipCode!: string;

    @Column()
    country!: string;

}