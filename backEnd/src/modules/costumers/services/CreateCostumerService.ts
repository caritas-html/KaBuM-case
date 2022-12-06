import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Costumer from "../typeorm/entities/Costumer";
import { CostumerRepository } from "../typeorm/repositories/CostumersRepository";

interface IRequest {
  name: string;
  birthday: Date;
  cpf: string;
  rg: string;
  phone: string;
}

class CreateCostumerService {
  public async execute({
    name,
    birthday,
    cpf,
    rg,
    phone,
  }: IRequest): Promise<Costumer> {
    const costumersRepository = getCustomRepository(CostumerRepository);

    const costumerName = await costumersRepository.findByName(name);
    if (costumerName)
      throw new AppError("There is already a custumer with this name");

    const costumerCpf = await costumersRepository.findByCpf(cpf);
    if (costumerCpf)
      throw new AppError("There is already a custumer with this CPF");

    const costumerRg = await costumersRepository.findByRg(rg);
    if (costumerRg)
      throw new AppError("There is already a custumer with this RG");

    const costumer = costumersRepository.create({
      name,
      birthday,
      cpf,
      rg,
      phone,
    });

    await costumersRepository.save(costumer);

    return costumer;
  }
}

export default CreateCostumerService;
