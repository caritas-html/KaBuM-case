import { EntityRepository, Repository } from "typeorm";
import Costumer from "../entities/Costumer";

@EntityRepository(Costumer)
export class CostumerRepository extends Repository<Costumer> {
  public async findByName(name: string): Promise<Costumer | undefined> {
    const costumer = this.findOne({
      where: {
        name,
      },
    });

    return costumer;
  }

  public async findByCpf(cpf: string): Promise<Costumer | undefined> {
    const costumer = this.findOne({
      where: {
        cpf,
      },
    });

    return costumer;
  }

  public async findByRg(rg: string): Promise<Costumer | undefined> {
    const costumer = this.findOne({
      where: {
        rg,
      },
    });

    return costumer;
  }
}
