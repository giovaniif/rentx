import { Vehicle } from "./vehicle";
import { FAKE_VEHICLES_DATABASE } from "./vehicles-database";

export class VehicleRepository {
  loadByLicensePlate (licensePlate: string): Vehicle {
    const vehicleData = FAKE_VEHICLES_DATABASE.find(vehicle => vehicle.licensePlate === licensePlate)
    if (!vehicleData) throw new Error('vehicle not found')
    return new Vehicle(vehicleData.licensePlate, vehicleData.dailyRate, vehicleData.type)
  }
}