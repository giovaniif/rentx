import { Vehicle } from "../src/vehicle"

describe('Vehicle', () => {
  it('should calculate the rent value correctly for car', () => {
    const vehicle = new Vehicle(
      'any_license_plate',
      500,
      'car'
    )

    const rent = vehicle.calculateRent(2, 20)

    expect(rent).toBe(550)
  })

  it('should calculate the rent value correctly for motorcycles', () => {
    const vehicle = new Vehicle(
      'any_license_plate',
      500,
      'motorcycle'
    )

    const rent = vehicle.calculateRent(2, 20)

    expect(rent).toBe(525)
  })
})