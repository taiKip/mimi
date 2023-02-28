import { User } from'./user';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from './company';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  streetAddress!: string;

  @Column()
  city!: string;

  @Column()
  zipCode!: string;

  @Column()
  country!: string;

  @OneToOne(() => User, (user) => user.address)
  user!: User;

  @OneToOne(() => Company, (company) => company.address)
  company!: Company;
}