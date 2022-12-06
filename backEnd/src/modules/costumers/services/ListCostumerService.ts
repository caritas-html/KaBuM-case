import { getCustomRepository } from "typeorm";
import Costumer from "../typeorm/entities/Costumer";
import { CostumerRepository } from "../typeorm/repositories/CostumersRepository";
class ListCostumerService {
  public async execute(): Promise<Costumer[]> {
    const costumerRepository = getCustomRepository(CostumerRepository);

    const costumers = await costumerRepository.find();

    return costumers;
  }
}

export default ListCostumerService;
