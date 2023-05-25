// services/base-service.ts
import { BuildOptions, Model, ValidationError } from 'sequelize';
import { BaseModel } from '../models/base-model';
import SequelizeModelStatic from '../repository/sequalize-model-static';



export default abstract class BaseService<T extends BaseModel> {
    abstract getModel(): SequelizeModelStatic<T>;

  async create(entity: Partial<T>): Promise<T> {
    try {
      const model = this.getModel(); // No necesitamos el "new" aquí
      return await model.create(entity);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new Error(`Error al crear la entidad: ${error.message}`);
      }
      throw error;
    }
  }

  async list(): Promise<T[]> {
    try {
      const model = this.getModel();
      return await model.findAll();
    } catch (error) {
      throw new Error(`Error al obtener la lista de entidades: ${error.message}`);
    }
  }

  async fetch(id: string): Promise<T> {
    try {
      const model = this.getModel();
      const entity = await model.findByPk(id);
      if (!entity) {
        throw new Error(`Entidad con id ${id} no encontrada.`);
      }
      return entity;
    } catch (error) {
      throw new Error(`Error al obtener la entidad: ${error.message}`);
    }
  }

  async update(id: string, entity: Partial<T>): Promise<T> {
    try {
      const model = this.getModel();
      const rows = await model.update(entity, {
        where: { id }
      });

      if (rows[0] === 0) {
        throw new Error(`Entidad con id ${id} no encontrada.`);
      }

      return this.fetch(id);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new Error(`Error al actualizar la entidad: ${error.message}`);
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const model = this.getModel();
      const rows = await model.destroy({
        where: { id }
      });

      if (rows === 0) {
        throw new Error(`Entidad con id ${id} no encontrada.`);
      }
    } catch (error) {
      throw new Error(`Error al eliminar la entidad: ${error.message}`);
    }
  }
}
