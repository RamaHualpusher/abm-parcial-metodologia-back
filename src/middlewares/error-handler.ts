// middlewares/error-handler.ts
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.message) {
    // This is an expected error and we log the message.
    console.error(error.message);
    return res.status(400).send({ error: error.message });
  }

  // This is an unexpected error, we log the entire error.
  console.error(error);
  return res.status(500).send({ error: 'Ha ocurrido un error inesperado' });
};
