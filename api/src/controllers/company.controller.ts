import {
  getCompanies,
  ICompanyPayload,
  createCompany,
  getCompany,
    deleteCompany,
  createCompanyProperty
} from "../repositories/company.repository";
import { Company } from "../models";
import { IPropertyPayload } from "src/repositories/property.repository";

export default class CompanyController {
  public async getCompanies(): Promise<Array<Company>> {
    return getCompanies();
  }

  public async createCompany(body: ICompanyPayload): Promise<Company> {
    return createCompany(body);
  }

  public async createCompanyProperty(
    id: String,
    body: IPropertyPayload
  ): Promise<Company | string> {
    return createCompanyProperty(Number(id), body);
  }

  public async getCompany(id: String): Promise<Company | null> {
    return getCompany(Number(id));
  }

  public async deleteCompany(id: String): Promise<string> {
    return deleteCompany(Number(id));
  }
}
