export namespace RentRepository {
  export namespace Save {
    export type Input = { id: number, total: number }
  }
  export namespace Count {
    export type Output = number
  }
}

export interface RentRepository {
  save (input: RentRepository.Save.Input): void
  count (): number
}