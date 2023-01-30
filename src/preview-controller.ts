import { Preview } from "./preview";

export class PreviewController {
  constructor(private readonly preview: Preview) {}

  async handle(data: Input): Promise<Output> {
    const { days, licensePlate, personAge } = data;
    const previewValue = this.preview.execute({
      days: Number(days),
      licensePlate: String(licensePlate),
      personAge: Number(personAge),
    });
    return { total: previewValue };
  }
}

type Input = {
  days?: any;
  licensePlate?: any;
  personAge?: any;
};

type Output = { total: number };
