export interface RentRepository {
  save (input: { total: number }): { id: number }
}
