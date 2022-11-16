import { ExecuteRent } from "./execute-rent"

describe('ExecuteRent', () => {
  it('should execute the rent', () => {
    const executeRent = new ExecuteRent()

    const rent = executeRent.execute({
      days: 7,
      idVehicle: 3,
      personAge: 19
    })

    expect(rent.total).toBe(3176.25)
    expect(rent.id).toBe(1)
  })
})