import {
  getProperties,
  IPropertyPayload,
  createProperty,
  getProperty,
  deleteProperty,
} from "../repositories/property.repository";
import { Property } from "../models";

export default class PropertyController {
  public async getProperties(): Promise<Array<Property>> {
    return getProperties();
  }

  public async createProperty(body: IPropertyPayload): Promise<Property> {
    return createProperty(body);
  }

  public async getProperty(id: String): Promise<Property | null> {
    return getProperty(Number(id));
  }

  public async deleteProperty(id: String): Promise<string> {
    return deleteProperty(Number(id));
  }
}
