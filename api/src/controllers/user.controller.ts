import {
  getUsers,
  IUserPayload,
  createUser,
  getUser,
  deleteUser,
} from "../repositories/user.repository";
import { User } from "../models";

export default class UserController {
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  public async getUser(id: String): Promise<User | null> {
    return getUser(Number(id));
  }

  public async deleteUser(id: String): Promise<string> {
    return deleteUser(Number(id));
  }
}
