import { IAddressPayload } from "src/models/address";
import {
  getAddresses,
  createAddress,
  getAddress,
  deleteAddress,

} from "../repositories/address.repository";
import { Address } from "../models";


export default class AddressController {
  public async getAddresses(): Promise<Array<Address>> {
    return getAddresses();
  }

  public async createAddress(body: IAddressPayload): Promise<Address> {
    return createAddress(body);
  }
  public async getAddress(id: String): Promise<Address | null> {
    return getAddress(Number(id));
  }

  public async deleteAddress(id: String): Promise<string> {
    return deleteAddress(Number(id));
  }
}
