import { Vehicle } from "./vehicle"
import { VehicleRepository } from "./vehicles-repository"

export class VehicleRepositoryMemory implements VehicleRepository {
  MEMORY_DATABASE: Array<{
    l_plate: string,
    v_type: string
    d_tax: number
  }> = [
    { l_plate: 'AAA-1111', d_tax: 100, v_type: 'car' },
    { l_plate: 'AAA-2222', d_tax: 100, v_type: 'motorcycle' }
  ]

  loadByLicensePlate (licensePlate: string): Vehicle {
    const vehicleData = this.MEMORY_DATABASE.find(vehicle => vehicle.l_plate === licensePlate)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.l_plate, vehicleData.d_tax, vehicleData.v_type)
    return vehicle
  }
}
