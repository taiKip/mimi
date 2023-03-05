
import dataSource from "../config/datasource";
import { Unit, User } from "../models";
import {
  MaintenanceRequest,
} from "../models";
  import { IMaintenancePayload } from '../models/maintenanceRequest';
const unitRepository = dataSource.getRepository(Unit);
const maintenanceRequestRepository = dataSource.getRepository(MaintenanceRequest)
const userRepository = dataSource.getRepository(User)
export interface IUnitPayload {
    unitNumber: string,
  isTaken?: boolean,
  size: number,
    rooms:number
}

export const createUnit = async (
  payload: IUnitPayload
): Promise<Unit> => {
  const unit = new Unit();
  return unitRepository.save({...unit,...payload});
};

export const createMaintenanceRequest = async (
  id: number,
  payload: IMaintenancePayload
): Promise<MaintenanceRequest | string> => {
  const unit = await unitRepository.findOneBy({ id: id });


  if (!unit) return "unit not found";
  const newRequest = await maintenanceRequestRepository.save({
    ...payload,
    unit,
  });
  return newRequest;
};

export const assignUnitUser=async (id:number,payload:number) => {
  const unit = await unitRepository.findOneBy({ id: id });
  const user = await userRepository.findOneBy({ id: payload })
  if (!user) return "user not available"
  if (!unit) return "unit is not available"
  if(unit.isTaken) return "Unit is not available"
await userRepository.save({
    ...user,
    unit
  })
  const updatedUnit = await unitRepository.save({
    ...unit,
    isTaken:true
  })

  return updatedUnit;
}
export const getUnits = async (): Promise<Array<Unit>> => {
 // const response = await unitRepository.createQueryBuilder("unit").leftJoinAndSelect("unit.user", "user").getMany();
  const response = await unitRepository.find({
    relations: {
      user: true,
      maintenanceRequests:true
    }
  })
  return response;
};

export const getUnit = async (id: number): Promise<Unit | null> => {
  const unit = await unitRepository.findOneBy({ id: id });
  if (!unit) return null;
  return unit;
};

export const deleteUnit = async (id: number): Promise<string> => {
  const unit = await unitRepository.delete({ id: id });
  if (!unit) return "Unit not found";
  return `${id} deleted`;
};

