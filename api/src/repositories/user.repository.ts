import { IMaintenancePayload, MaintenanceRequest } from "../models/maintenanceRequest";
import dataSource from "../config/datasource";
import { Unit, User } from "../models";


const userRepository = dataSource.getRepository(User);
const maintenaceRequestRepository = dataSource.getRepository(MaintenanceRequest);
const unitRepository = dataSource.getRepository(Unit);
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

//if user is admin, unit is required
//if user is tenant ,unit is already assigned to tenant.
export const createMaintenanceRequest = async (id:number,payload: IMaintenancePayload): Promise<MaintenanceRequest | string> => {
    const user = await userRepository.findOneBy({ id: id })
   
    const maitenance = new MaintenanceRequest();
    
    if (!user) return "user not found"
 
    const newRequest = await maintenaceRequestRepository.save({
        ...payload,
        user
    })
    return newRequest
}
export const getUsers = async (): Promise<Array<User>> => {
    return userRepository.find({
        relations: {
            unit:true
        }
    });
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

