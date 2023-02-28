import dataSource from "../config/datasource";
import { Property, Unit } from "../models";
import { createUnit, IUnitPayload } from "./unit.repository";

const propertyRepository = dataSource.getRepository(Property);
const unitRepository = dataSource.getRepository(Unit);
export interface IPropertyPayload {
  name: string;
  lastName: string;
  email: string;
}

export const createProperty = async (payload: IPropertyPayload): Promise<Property> => {
  const property = new Property();
  return propertyRepository.save({
    ...property,
    ...payload,
  });
};

export const createPropertyUnit = async (id: number, payload: IUnitPayload): Promise<Property|string> => {
  const property = await propertyRepository.findOneBy({ id: id });
  if (!property) return "Property not found";

   await unitRepository.save({
    ...payload,
    property
  })
  
  return property;
}
export const getProperties = async (): Promise<Array<Property>> => {
  return propertyRepository.find({
    relations: {
      company: true,
      address: true,
      units:true
    }
  });
};

export const getProperty = async (id: number): Promise<Property | null> => {
  const property = await propertyRepository.findOneBy({ id: id });
  if (!property) return null;
  return property;
};

export const deleteProperty = async (id: number): Promise<string> => {
  const property = await propertyRepository.delete({ id: id });
  if (!property) return "Property not found";
  return `${id} deleted`;
};
