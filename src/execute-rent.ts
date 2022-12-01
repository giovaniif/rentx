import { Vehicle } from "./vehicle"
import { FAKE_VEHICLES_DATABASE } from "./vehicles-database"

const RENTS = [
  { id: 0, total: 100 }
]

export class ExecuteRent {
  execute ({ days, licensePlate, personAge }: Input): Output {
    const vehicleData = FAKE_VEHICLES_DATABASE.find(vehicle => vehicle.licensePlate === licensePlate)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.licensePlate, vehicleData.dailyRate, vehicleData.type)
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