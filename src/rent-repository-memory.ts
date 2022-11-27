import { RentRepository } from "./rent-repository";

export class RentRepositoryMemory implements RentRepository {
  private RENTS = [{ id: 0, total: 100 }]

  save({ total }: RentRepository.Save.Input): RentRepository.Save.Output {
    const lastRentId = this.RENTS[this.RENTS.length - 1].id
    const rentId = lastRentId + 1
    this.RENTS.push({
      id: rentId,
      total 
    })
    return { rentId }
  }
}