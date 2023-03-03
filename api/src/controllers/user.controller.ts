
import {
  getUsers,
  IUserPayload,
  createUser,
  getUser,
  deleteUser,
  createMaintenanceRequest,
} from "../repositories/user.repository";
import { MaintenanceRequest, User } from "../models";
import { IMaintenancePayload } from "src/models/maintenanceRequest";

export default class UserController {
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }
  public async createMaintenanceRequest(id:string,body:IMaintenancePayload): Promise<MaintenanceRequest | string>{
    return createMaintenanceRequest(Number(id),body)
  
}
  public async getUser(id: String): Promise<User | null> {
    return getUser(Number(id));
  }

  public async deleteUser(id: String): Promise<string> {
    return deleteUser(Number(id));
  }
}
