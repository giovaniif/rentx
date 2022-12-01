import { Preview } from '../src/preview'

describe('Preview', () => {
  it('should simulate the rent for cars', () => {
    const preview = new Preview()

    const rent = preview.execute({
      licensePlate: 'AAA-1111',
      days: 7,
      personAge: 19
    })

    expect(rent).toBe(247.5)
  })

  it('should simulate the rent for motorcycles', () => {
    const preview = new Preview()

    const rent = preview.execute({
      licensePlate: 'AAA-2222',
      days: 7,
      personAge: 19
    })

    expect(rent).toBe(236.25)
  })

  it('should throw if vehicle is not found', () => {
    const preview = new Preview()

    expect(
      () => preview.execute({
        licensePlate: 'INVALID_PLATE',
        days: 7,
        personAge: 19
      }) 
    ).toThrowError(new Error('vehicle not found'))
  })
})