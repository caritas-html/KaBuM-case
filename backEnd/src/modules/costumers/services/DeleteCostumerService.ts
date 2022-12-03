import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { CostumerRepository } from "../typeorm/repositories/CostumersRepository";

interface IRequest {
  id: string;
}

class DeleteCostumerService {
  public async execute({ id }: IRequest): Promise<void> {
    const costumersRepository = getCustomRepository(CostumerRepository);

    const costumer = await costumersRepository.findOne(id);

    if (!costumer) throw new AppError("Costumer not found");

    await costumersRepository.remove(costumer);
  }
}

export default DeleteCostumerService;
