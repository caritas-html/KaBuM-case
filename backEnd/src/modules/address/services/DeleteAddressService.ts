import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import AddressRepository from "../typeorm/repositories/AddressRepository";

interface IRequest {
  costumer_id: string;
  address: string;
}

class DeleteAddressService {
  public async execute({
    costumer_id,
    address,
  }: IRequest): Promise<string[] | undefined> {
    const addressRepository = getCustomRepository(AddressRepository);

    const findAddress = await addressRepository.findById(costumer_id);

    const addressExists = findAddress?.address.find(
      (el) => el.trim().toUpperCase() === address.trim().toUpperCase()
    );
    if (!addressExists)
      throw new AppError("There is no address with this name");

    const resultArray = findAddress?.address.filter(
      (el) => el.trim().toUpperCase() !== address.trim().toUpperCase()
    );

    await addressRepository.saveAddress(costumer_id, resultArray as string[]);

    return resultArray;
  }
}

export default DeleteAddressService;
