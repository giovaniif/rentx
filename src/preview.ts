import { Vehicle } from "./vehicle"
import { FAKE_VEHICLES_DATABASE } from "./vehicles-database"

export class Preview {
  execute ({ days, licensePlate, personAge }: Input): number {
    const vehicleData = FAKE_VEHICLES_DATABASE.find(vehicle => vehicle.licensePlate === licensePlate)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.licensePlate, vehicleData.dailyRate, vehicleData.type) 
    return vehicle.calculateRent(days, personAge)
  }
}

type Input = {
  personAge: number
  licensePlate: string
  days: number
}
