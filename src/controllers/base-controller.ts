// controllers/base-controller.ts
import { NextFunction, Request, Response } from 'express';
import BaseService from '../services/base-service';
import { BaseModel } from '../models/base-model';

export default abstract class BaseController<T extends BaseModel> {
  constructor(private service: BaseService<T>) {}

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { body } = request;

      const entity = await this.service.create(body);

      return response.status(201).send(entity);
    } catch (error) {
      return next(error);
    }
  }

  async fetch(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      const entity = await this.service.fetch(id as string);

      return response.status(200).send(entity);
    } catch (error) {
      return next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const entities = await this.service.list();

      return response.status(200).send(entities);
    } catch (error) {
      return next(error);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;

      await this.service.remove(id as string);

      return response.status(204).end();
    } catch (error) {
      return next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const { body } = request;

      const entity = await this.service.update(id as string, body);

      return response.status(200).send(entity);
    } catch (error) {
      return next(error);
    }
  }
}
