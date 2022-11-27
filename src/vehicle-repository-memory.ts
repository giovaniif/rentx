import { Vehicle } from "./vehicle";
import { VehicleRepository } from "./vehicle-repository";
import { FAKE_VEHICLES_DATABASE } from "./vehicles-database";

export class VehicleRepositoryMemory implements VehicleRepository {
  loadByLicensePlate(licensePlate: string): Vehicle {
    const vehicleData = FAKE_VEHICLES_DATABASE.find(vehicle => vehicle.licensePlate === licensePlate)
    if (!vehicleData) throw new Error('vehicle not found')
    const vehicle = new Vehicle(vehicleData.licensePlate, vehicleData.dailyRate, vehicleData.type)
    return vehicle
  }
}