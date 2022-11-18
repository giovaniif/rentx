import { RentRepository } from "./rent-repository"
import { VehicleRepository } from "./vehicle-repository"

export class ExecuteRent {
  constructor (
    private readonly vehicleRepository: VehicleRepository,
    private readonly rentRepository: RentRepository
  ) {}

  execute ({ days, licensePlate, personAge }: Input): Output {
    const vehicle = this.vehicleRepository.loadByLicensePlate(licensePlate)
    const totalRent = vehicle.calculateRent(days, personAge)
    const rentId = this.rentRepository.count() + 1
    this.rentRepository.save({ id: rentId, total: totalRent })
    return {
      id: rentId,
      total: totalRent
    }
  }
}

type Output = {
  total: number
  id: number
}

type Input = {
  personAge: number
  licensePlate: string
  days: number
}