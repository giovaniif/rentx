import { RentRepository } from "./rent-repository"
import { VehicleRepository } from "./vehicles-repository"

export class ExecuteRent {
  private readonly vehicleRepository: VehicleRepository 
  private readonly rentRepository: RentRepository 

  constructor (vehicleRepository: VehicleRepository, rentRepository: RentRepository) {
    this.vehicleRepository = vehicleRepository
    this.rentRepository = rentRepository
  }

  execute ({ days, licensePlate, personAge }: Input): Output {
    const vehicle = this.vehicleRepository.loadByLicensePlate(licensePlate)
    const total = vehicle.calculateRent(days, personAge)
    const { id } = this.rentRepository.save({ total }) 
    return {
      id,
      total
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