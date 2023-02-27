import dataSource from "../config/datasource";
import { User } from "../models";


const userRepository = dataSource.getRepository(User);
export interface IUserPayload{
    firstName: string;
    lastName: string;
    email: string;

}

export const createUser = async (payload: IUserPayload): Promise<User> => {
    const user = new User();
    return userRepository.save({
        ...user,
        ...payload,
    })
}

export const getUsers = async (): Promise<Array<User>> => {
    return userRepository.find();
}

export const getUser = async (id: number): Promise<User | null> => {
    const user = await userRepository.findOneBy({ id: id });
    if (!user) return null;
    return user;
}

export const deleteUser = async (id: number): Promise<string> => {
  const user = await userRepository.delete({ id: id });
  if (!user) return "User not found";
  return `${id} deleted`;
};

