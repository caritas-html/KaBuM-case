import { EntityRepository, Repository } from "typeorm";
import Address from "../entities/Address";

@EntityRepository(Address)
class AddressRepository extends Repository<Address> {
  public async findById(costumer_id: string): Promise<Address | undefined> {
    const address = await this.findOne({
      where: {
        costumer_id,
      },
    });

    return address;
  }

  public async findByAddress(address: string): Promise<Address | undefined> {
    const addressResponse = await this.findOne({
      where: {
        address,
      },
    });

    return addressResponse;
  }

  public async saveAddress(
    costumer_id: string,
    address: string[]
  ): Promise<Address | undefined> {
    // const costumerIdItem = await this.findById(costumer_id);
    const response = await this.save({ costumer_id, address });

    return response;
  }
}

export default AddressRepository;
