import { Preview } from "./preview"

// Deve receber: 
// o id do veiculo, a quantidade de dias, a idade de quem esta alugando
// deve retornar o valor estimado do aluguel com a seguinte fórmula:

/*
  (Diaria do carro X dias) - (idade * 100 / 4) + taxa por tipo de veículo
  Carro = 10%
  Moto = 5%
*/

// 100 x 7 = 700 - 475 = 225 = 250,5


describe('Preview', () => {
  it('should simulate the rent value', () => {
    const preview = new Preview()

    const rent = preview.execute({
      days: 7,
      idVehicle: 3,
      personAge: 19
    })

    expect(rent).toBe(3176.25)
  })
})
