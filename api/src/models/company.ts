
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn ,Entity, OneToOne, JoinColumn} from "typeorm";
import { Address } from "./address";
import { Property } from "./property";
import { User } from "./user";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  businessId!: string;

  @Column({ nullable: true })
  website!: string;

  @OneToMany((type) => Property, (property: Property) => property.company,{nullable:true})
  properties!: Array<Property>;

  @OneToMany((type) => User, (user: User) => user.company,{nullable:true})
  users!: Array<User>;

  @OneToOne(() => Address)
    @JoinColumn()
  address!: Address
  
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}