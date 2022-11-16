import { Vehicle } from "./vehicle"
import { FAKE_VEHICLE_DATABASE } from "./vehicle-database"

const RENTS_DATABASE = [
  { id: 0, total: 100 }
]

export class ExecuteRent {
  execute ({ days, idVehicle, personAge }: Input): Output {
    const vehicleData = FAKE_VEHICLE_DATABASE.find(vehicle => vehicle.id === idVehicle)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.id, vehicleData.dailyRate, vehicleData.type)
    const finalRent = vehicle.calculateRent(days, personAge)

    // persistir o dado
    const lastRentId = RENTS_DATABASE[RENTS_DATABASE.length - 1].id
    const rentId = lastRentId + 1
    RENTS_DATABASE.push({ id: rentId, total: finalRent })

    return {
      id: rentId,
      total: finalRent
    }
  }
}

type Input = {
  idVehicle: number,
  days: number,
  personAge: number
}

type Output = {
  total: number,
  id: number
}
