import { Vehicle } from "./vehicle"
import { FAKE_VEHICLE_DATABASE } from "./vehicle-database"

export class Preview {
  execute ({ days, idVehicle, personAge }: Input): number {
    const vehicleData = FAKE_VEHICLE_DATABASE.find(vehicle => vehicle.id === idVehicle)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.id, vehicleData.dailyRate, vehicleData.type) 
    return vehicle.calculateRent(days, personAge)
  }
}

type Input = {
  idVehicle: number,
  days: number,
  personAge: number
}
