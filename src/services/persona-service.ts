// services/persona-service.ts
import { ValidationError } from 'sequelize';
import Persona, { PersonaModel } from "../models/persona";

const create = async (persona: Partial<PersonaModel>): Promise<PersonaModel> => {
  try {
    return await Persona.create(persona);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new Error(`Error al crear la Persona: ${error.message}`);
    }
    throw error;
  }
};

const list = async (): Promise<PersonaModel[]> => {
  try {
    return await Persona.findAll();
  } catch (error) {
    throw new Error(`Error al obtener la lista de Personas: ${error.message}`);
  }
};

const fetch = async (id: string): Promise<PersonaModel> => {
  try {
    const persona = await Persona.findByPk(id);
    if (!persona) {
      throw new Error(`Persona con id ${id} no encontrada.`);
    }
    return persona;
  } catch (error) {
    throw new Error(`Error al obtener la Persona: ${error.message}`);
  }
};

const update = async (id: string, persona: Partial<PersonaModel>): Promise<PersonaModel> => {
  try {
    const rows = await Persona.update(persona, {
      where: { id }
    });

    if (rows[0] === 0) {
      throw new Error(`Persona con id ${id} no encontrada.`);
    }

    return fetch(id);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new Error(`Error al actualizar la Persona: ${error.message}`);
    }
    throw error;
  }
};

const remove = async (id: string) => {
  try {
    const rows = await Persona.destroy({
      where: { id }
    });

    if (rows === 0) {
      throw new Error(`Persona con id ${id} no encontrada.`);
    }
  } catch (error) {
    throw new Error(`Error al eliminar la Persona: ${error.message}`);
  }
};

export default {
  create,
  list,
  fetch,
  update,
  remove,
};
