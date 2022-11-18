import { RentRepository } from "./rent-repository";

export class RentRepositoryMemory implements RentRepository {
  rents: Array<{ id: number, total: number }> = [{ id: 0, total: 100 }]

  save ({ id, total }: RentRepository.Save.Input): void {
    this.rents.push({
      id,
      total
    })
  }

  count (): number {
    return this.rents.length
  }
}