import { VehicleRepository } from './vehicles-repository'

export class Preview {
  private readonly vehicleRepository: VehicleRepository

  constructor (vehicleRepository: VehicleRepository) {
    this.vehicleRepository = vehicleRepository
  }

  execute ({ days, licensePlate, personAge }: Input): number {
    const vehicle = this.vehicleRepository.loadByLicensePlate(licensePlate)
    return vehicle.calculateRent(days, personAge)
  }
}

type Input = {
  personAge: number
  licensePlate: string
  days: number
}
