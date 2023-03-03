import { User } from "./user";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property";

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

  @Column({nullable:true})
  unitNumber!: string;
  @OneToOne(() => User, (user) => user.address)
  user!: User;

  @OneToOne(() =>Property, (property) => property.address)
  property!: Property;
}


export interface IAddressPayload{
    streetAddress: string,
    city: string,
    zipCode: string,
    country: string,
    unitNumber?:string
}