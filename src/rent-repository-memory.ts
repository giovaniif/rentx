import { RentRepository } from "./rent-repository";

export class RentRepositoryMemory implements RentRepository {
  RENTS = [
    { id: 0, total: 100 }
  ]

  save(input: { total: number; }): { id: number } {
    const lastRentId = this.RENTS[this.RENTS.length - 1].id
    const rentId = lastRentId + 1
    this.RENTS.push({
      id: rentId,
      total: input.total
    })
    return { id: rentId }
  }
}