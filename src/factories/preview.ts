import { VehicleRepositoryMemory } from "../vehicle-repository-memory";
import { Preview } from "../preview";
import { PreviewController } from "../preview-controller";

export const makePreviewController = () => {
  const vehicleRepository = new VehicleRepositoryMemory();
  const preview = new Preview(vehicleRepository);
  const previewController = new PreviewController(preview);
  return previewController;
};
