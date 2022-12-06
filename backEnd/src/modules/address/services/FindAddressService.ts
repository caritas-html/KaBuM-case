import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repositories/AddressRepository";

interface IRequest {
  id: string;
}

class FindAddressService {
  public async execute({ id }: IRequest): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);

    const address = await addressRepository.findById(id);

    if (!address) throw new AppError("there is no custumer with this id");

    return address as Address;
  }
}
export default FindAddressService;
