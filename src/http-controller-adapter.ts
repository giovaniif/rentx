import { Request, Response } from "express";

import { Controller } from "./controller";

export const httpControllerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const data = { ...req.body, ...req.query, ...req.params };
      const result = await controller.handle(data);
      return res.status(200).json(result);
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  };
};
