export class Vehicle {
  constructor (
    readonly id: number,
    readonly dailyRate: number,
    readonly type: string
  ) {}

  calculateRent (days: number, personAge: number) {
    const rent = (this.dailyRate * days) - (personAge * 100 / 4)
    const rentTax = rent * this.getTax()
    return rent + rentTax
  }

  getTax () {
    return this.type === 'car' ? 0.1 : 0.05
  }
}