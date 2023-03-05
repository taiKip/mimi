import dataSource from "../config/datasource";
import { Address, User } from "../models";
import { IAddressPayload } from "src/models/address";
import { addressRepository } from "../config/datasource";

export const createAddress = async (payload: IAddressPayload): Promise<Address> => {
  const address = new Address();
  return addressRepository.save({ ...address, ...payload });
};

export const getAddresses = async (): Promise<Array<Address>> => {
  // const response = await addressRepository.createQueryBuilder("address").leftJoinAndSelect("address.user", "user").getMany();
  const response = await addressRepository.find();
  return response;
};

export const getAddress = async (id: number): Promise<Address | null> => {
  const address = await addressRepository.findOneBy({ id: id });
  if (!address) return null;
  return address;
};

export const deleteAddress = async (id: number): Promise<string> => {
  const address = await addressRepository.delete({ id: id });
  if (!address) return "Address not found";
  return `${id} deleted`;
};
