export class Vehicle {
  constructor (
    readonly licensePlate: string,
    readonly dailyRate: number,
    readonly type: string
  ) {}

  calculateRent (days: number, personAge: number): number {
    const totalPeriodValue = days * this.dailyRate 
    const discountPerAge = personAge * 100 / 4
    const rent = totalPeriodValue - discountPerAge
    const taxByVehicleType = this.type === 'car' ? 0.1 : 0.05
    const rentTax = rent * taxByVehicleType 
    const totalRent = rent + rentTax
    return totalRent
  }
}