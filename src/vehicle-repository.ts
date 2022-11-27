import { Vehicle } from "./vehicle";

export interface VehicleRepository {
  loadByLicensePlate(licensePlate: string): Vehicle
}