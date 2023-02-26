
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Property } from "./property";
import { User } from "./user";

export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  businesId!: string;

  @Column({ nullable: true })
  website!: string;

  @OneToMany((type) => Property, (property: Property) => property.company)
  properties!: Array<Property>;

  @OneToMany((type) => User, (user: User) => user.company)
  users!: Array<User>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}