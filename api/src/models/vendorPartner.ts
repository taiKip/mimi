import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vendorpartner")
export class VendorPartner{
    @PrimaryGeneratedColumn()
    id!: number

}