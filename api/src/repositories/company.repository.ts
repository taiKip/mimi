
import dataSource from "../config/datasource";
import { Company, Property } from "../models";
import { IPropertyPayload } from "./property.repository";

const companyRepository = dataSource.getRepository(Company);
const propertyRepository = dataSource.getRepository(Property);
export interface ICompanyPayload {
    name: string,
    businessId: string,
    website:string
}

export const createCompany = async (payload: ICompanyPayload): Promise<Company> => {
  const company = new Company();
  return companyRepository.save({ ...company, ...payload });
};

export const createCompanyProperty = async (
  id: number,
  payload: IPropertyPayload
): Promise<Company | string> => {
  const company = await companyRepository.findOneBy({ id: id });
  if (!company) return "Company not found";
  await propertyRepository.save({
    ...payload,
    company
})
  return company;
};
export const getCompanies = async (): Promise<Array<Company>> => {
  return companyRepository.find({
    relations: {
          properties: true,
      users: true,
        address:true
    },
  });
};


export const getCompany = async (id: number): Promise<Company | null> => {
  const company = await companyRepository.findOneBy({ id: id });
  if (!company) return null;
  return company;
};

export const deleteCompany = async (id: number): Promise<string> => {
  const company = await companyRepository.delete({ id: id });
  if (!company) return "Company not found";
  return `${id} deleted`;
};
