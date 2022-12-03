import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Costumer from "../typeorm/entities/Costumer";
import { CostumerRepository } from "../typeorm/repositories/CostumersRepository";

interface IRequest {
  id: string;
  name: string;
  birthday: Date;
  cpf: string;
  rg: string;
  phone: string;
}

class UpdateCostumerService {
  public async execute({
    id,
    name,
    birthday,
    cpf,
    rg,
    phone,
  }: IRequest): Promise<Costumer> {
    const costumersRepository = getCustomRepository(CostumerRepository);

    const costumer = await costumersRepository.findOne(id);
    if (!costumer) throw new AppError("Costumer not found");

    const costumerExistsByName = await costumersRepository.findByName(name);
    if (costumerExistsByName && name !== costumer.name)
      throw new AppError("There is already one costumer with this name");

    const costumerExistsByCpf = await costumersRepository.findByCpf(cpf);
    if (costumerExistsByCpf && cpf !== costumer.cpf)
      throw new AppError("There is already one costumer with this CPF");

    const costumerExistsByRg = await costumersRepository.findByRg(rg);
    if (costumerExistsByRg && rg !== costumer.rg)
      throw new AppError("There is already one costumer with this RG");

    costumer.name = name;
    costumer.birthday = birthday;
    costumer.cpf = cpf;
    costumer.rg = rg;
    costumer.phone = phone;

    await costumersRepository.save(costumer);

    return costumer;
  }
}

export default UpdateCostumerService;
