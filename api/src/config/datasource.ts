import { DataSource } from "typeorm";
import {
  User,
  Address,
  MaintenanceRequest,
  Property,
  Unit,
} from "../models";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "postgres",
  entities: [
    User,
    Address,
    MaintenanceRequest,
    Property,
    Unit,
  ],
  synchronize: true,
});

export const unitRepository = dataSource.getRepository(Unit)
export const addressRepository = dataSource.getRepository(Address);
export const maintenanceRepository = dataSource.getRepository(MaintenanceRequest);
export const userRepository = dataSource.getRepository(User);
export default dataSource;
