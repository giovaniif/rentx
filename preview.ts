import { VehicleRepository } from "./vehicle-repository"

export class Preview {
  constructor (private readonly vehicleRepository: VehicleRepository) {}

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
