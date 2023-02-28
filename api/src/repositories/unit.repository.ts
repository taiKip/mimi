import dataSource from "../config/datasource";
import { Unit } from "../models";

const unitRepository = dataSource.getRepository(Unit);
export interface IUnitPayload {
    unitNumber: string,
    isTaken?: boolean,
}

export const createUnit = async (
  payload: IUnitPayload
): Promise<Unit> => {
  const unit = new Unit();
  return unitRepository.save({...unit,...payload});
};

export const getProperties = async (): Promise<Array<Unit>> => {
  return unitRepository.find({
    relations: {
      maintenanceRequests: true,
    },
  });
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

