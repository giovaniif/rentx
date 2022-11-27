import { Preview } from '../src/preview'
import { VehicleRepository } from '../src/vehicle-repository'
import { VehicleRepositoryMemory } from '../src/vehicle-repository-memory'

describe('Preview', () => {
  let preview: Preview
  let vehicleRepository: VehicleRepository

  beforeAll(() => {
    vehicleRepository = new VehicleRepositoryMemory()
  })

  beforeEach(() => {
    preview = new Preview(vehicleRepository)
  })

  it('should simulate the rent for cars', () => {
    const rent = preview.execute({
      licensePlate: 'AAA-1111',
      days: 7,
      personAge: 19
    })

    expect(rent).toBe(247.5)
  })

  it('should simulate the rent for motorcycles', () => {
    const rent = preview.execute({
      licensePlate: 'AAA-2222',
      days: 7,
      personAge: 19
    })

    expect(rent).toBe(236.25)
  })

  it('should throw if vehicle is not found', () => {
    expect(
      () => preview.execute({
        licensePlate: 'INVALID_PLATE',
        days: 7,
        personAge: 19
      }) 
    ).toThrowError(new Error('vehicle not found'))
  })
})