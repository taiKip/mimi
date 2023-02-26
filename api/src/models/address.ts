import { User } from 'src/models/user';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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

    @OneToOne(() => User, user => user.address)
    user!: User;
}