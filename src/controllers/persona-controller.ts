// controllers/persona-controller.ts
import { NextFunction, Request, Response } from 'express';

import personaService from '../services/persona-service';

const create = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { body } = request;

    const persona = await personaService.create(body);

    return response.status(201).send(persona);
  } catch (error) {
    return next(error);
  }
};

const fetch = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;

    const persona = await personaService.fetch(id as string);

    return response.status(200).send(persona);
  } catch (error) {
    return next(error);
  }
};

const list = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const personas = await personaService.list();

    return response.status(200).send(personas);
  } catch (error) {
    return next(error);
  }
};

const remove = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;

    await personaService.remove(id as string);

    return response.status(204).end();
  } catch (error) {
    return next(error);
  }
};

const update = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    const { body } = request;

    const persona = await personaService.update(id as string, body);

    return response.status(200).send(persona);
  } catch (error) {
    return next(error);
  }
};

export default {
  create,
  fetch,
  list,
  remove,
  update,
};
