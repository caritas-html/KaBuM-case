import { Request, Response } from "express";
import CreateCostumerService from "../services/CreateCostumerService";
import DeleteCostumerService from "../services/DeleteCostumerService";
import ListCostumerService from "../services/ListCostumerService";
import UpdateCostumerService from "../services/UpdateCostumerService";

class CostumerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCostumers = new ListCostumerService();

    const costumers = await listCostumers.execute();

    return response.json(costumers);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birthday, cpf, rg, phone } = request.body;

    const createCostumer = new CreateCostumerService();

    const costumer = await createCostumer.execute({
      name,
      birthday,
      cpf,
      rg,
      phone,
    });

    return response.json(costumer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, birthday, cpf, rg, phone } = request.body;
    const { id } = request.params;

    const updateCostumer = new UpdateCostumerService();

    const costumer = await updateCostumer.execute({
      id,
      name,
      birthday,
      cpf,
      rg,
      phone,
    });

    return response.json(costumer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteCostumerService();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}

export default CostumerController;
