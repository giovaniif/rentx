import { ExecuteRent } from "../src/execute-rent"
import { RentRepository } from "../src/rent-repository"
import { RentRepositoryMemory } from "../src/rent-repository-memory"
import { VehicleRepository } from "../src/vehicle-repository"
import { VehicleRepositoryMemory } from "../src/vehicle-repository-memory"

describe('ExecuteRent', () => {
  let vehicleRepository: VehicleRepository 
  let rentRepository: RentRepository
  let executeRent: ExecuteRent

  beforeAll(() => {
    vehicleRepository = new VehicleRepositoryMemory()
    rentRepository = new RentRepositoryMemory()
  })

  beforeEach(() => {
    executeRent = new ExecuteRent(vehicleRepository, rentRepository)
  })

  it('should execute the rent for a car', () => {
    const rent = executeRent.execute({
      licensePlate: 'AAA-1111',
      days: 7,
      personAge: 19
    })

    expect(rent.total).toBe(247.5)
    expect(rent.id).toBe(1)
  })

  it('should execute the rent for a motorcycle', () => {
    const rent = executeRent.execute({
      licensePlate: 'AAA-2222',
      days: 7,
      personAge: 19
    })

    expect(rent.total).toBe(236.25)
    expect(rent.id).toBe(2)
  })
})