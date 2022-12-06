import AddressRepository from "@modules/address/typeorm/repositories/AddressRepository";
import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";

class ListAddressService {
  public async execute(): Promise<Address[]> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = await addressRepository.find();

    return address;
  }
}

export default ListAddressService;
