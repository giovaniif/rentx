import { VehicleRepository } from "./vehicle-repository"

const RENTS = [
  { id: 0, total: 100 }
]

export class ExecuteRent {
  execute ({ days, licensePlate, personAge }: Input): Output {
    const vehicleRepository = new VehicleRepository()
    const vehicle = vehicleRepository.loadByLicensePlate(licensePlate)
    const totalRent = vehicle.calculateRent(days, personAge)

    const lastRentId = RENTS[RENTS.length - 1].id
    const rentId = lastRentId + 1
    RENTS.push({
      id: rentId,
      total: totalRent
    })

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