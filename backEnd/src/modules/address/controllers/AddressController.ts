import { Request, Response } from "express";
import CreateAddressService from "../services/CreateAddressService";
import DeleteAddressService from "../services/DeleteAddressService";
import FindAddressService from "../services/FindAddressService";
import ListAddressService from "../services/ListAddressService";

class AddressController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAddress = new ListAddressService();

    const addressList = await listAddress.execute();

    return response.json(addressList);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { costumer_id, address } = request.body;

    const createAddress = new CreateAddressService();

    const userAddress = await createAddress.execute({
      costumer_id,
      address,
    });

    return response.json(userAddress);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAddress = new FindAddressService();

    const userAddress = await findAddress.execute({
      id,
    });

    return response.json(userAddress);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { costumer_id, address } = request.body;

    const deleteAddress = new DeleteAddressService();

    await deleteAddress.execute({ costumer_id, address });

    return response.json([]);
  }
}

export default AddressController;
