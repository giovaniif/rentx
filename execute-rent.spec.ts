import { ExecuteRent } from "./execute-rent"
import { VehicleRepositoryMemory } from "./vehicle-repository-memory"

describe('ExecuteRent', () => {
  it('should execute the rent for a car', () => {
    const executeRent = new ExecuteRent(new VehicleRepositoryMemory())

    const rent = executeRent.execute({
      licensePlate: 'AAA-1111',
      days: 7,
      personAge: 19
    })

    expect(rent.total).toBe(247.5)
    expect(rent.id).toBe(1)
  })

  it('should execute the rent for a motorcycle', () => {
    const executeRent = new ExecuteRent(new VehicleRepositoryMemory())

    const rent = executeRent.execute({
      licensePlate: 'AAA-2222',
      days: 7,
      personAge: 19
    })

    expect(rent.total).toBe(236.25)
    expect(rent.id).toBe(2)
  })
})