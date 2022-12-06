import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Address from "../typeorm/entities/Address";
import AddressRepository from "../typeorm/repositories/AddressRepository";

interface IRequest {
  costumer_id: string;
  address: string;
}

class CreateAddressService {
  public async execute({ costumer_id, address }: IRequest): Promise<Address> {
    const addressRepository = getCustomRepository(AddressRepository);

    const spreadAddress = await addressRepository.findById(costumer_id);

    const findAddress = spreadAddress?.address.map(
      (el) => el.trim().toUpperCase() === address.trim().toUpperCase()
    );

    if (spreadAddress?.address.includes("undefined"))
      spreadAddress.address.unshift();

    if (address === "undefined") throw new AppError("Invalid address");

    if (findAddress?.includes(true))
      throw new AppError("This address already exists");

    spreadAddress?.address.push(address);

    const addressResult = addressRepository.create({
      costumer_id,
      address: spreadAddress?.address,
    });

    await addressRepository.saveAddress(
      costumer_id,
      spreadAddress?.address as string[]
    );

    return addressResult;
  }
}

export default CreateAddressService;
