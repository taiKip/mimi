import {
  getProperties,
  IPropertyPayload,
  createProperty,
  getProperty,
  deleteProperty,
  createPropertyUnit
} from "../repositories/property.repository";
import { Property } from "../models";
import { IUnitPayload } from "src/repositories/unit.repository";

export default class PropertyController {
  public async getProperties(): Promise<Array<Property>> {
    return getProperties();
  }

  public async createProperty(body: IPropertyPayload): Promise<Property> {
    return createProperty(body);
  }
  public async createPropertyUnit(id:String,body:IUnitPayload): Promise<Property|string> {
    return createPropertyUnit(Number(id),body);
  }
  public async getProperty(id: String): Promise<Property | null> {
    return getProperty(Number(id));
  }

  public async deleteProperty(id: String): Promise<string> {
    return deleteProperty(Number(id));
  }
}
