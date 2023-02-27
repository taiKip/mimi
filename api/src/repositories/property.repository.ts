import dataSource from "../config/datasource";
import { Property } from "../models";

const propPropertyRepository = dataSource.getRepository(Property);
export interface IPropertyPayload {
  name: string;
  lastName: string;
  email: string;
}

export const createProperty = async (payload: IPropertyPayload): Promise<Property> => {
  const propProperty = new Property();
  return propPropertyRepository.save({
    ...propProperty,
    ...payload,
  });
};

export const getProperties = async (): Promise<Array<Property>> => {
  return propPropertyRepository.find({
    relations: {
      company: true,
      address: true,
      units:true
    }
  });
};

export const getProperty = async (id: number): Promise<Property | null> => {
  const propProperty = await propPropertyRepository.findOneBy({ id: id });
  if (!propProperty) return null;
  return propProperty;
};

export const deleteProperty = async (id: number): Promise<string> => {
  const propProperty = await propPropertyRepository.delete({ id: id });
  if (!propProperty) return "Property not found";
  return `${id} deleted`;
};
