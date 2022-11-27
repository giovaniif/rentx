export namespace RentRepository {
  export namespace Save {
    export type Input = {
      total: number
    }
    export type Output = {
      rentId: number
    }
  }
}

export interface RentRepository {
  save (input: RentRepository.Save.Input): RentRepository.Save.Output
}
