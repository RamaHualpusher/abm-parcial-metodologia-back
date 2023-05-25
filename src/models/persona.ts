// models/persona.ts
import { BuildOptions, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';
import { BaseModel, BaseStatic } from './base-model';

export interface PersonaModel extends BaseModel {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
}


export type PersonaStatic = BaseStatic & {
  new (values?: object, options?: BuildOptions): PersonaModel;
};

const Persona = <PersonaStatic>sequelize.define('personas', {
  id: {
    type: DataTypes.INTEGER,  // Cambia esto a INTEGER
    primaryKey: true,
    autoIncrement: true,  // Agrega esto
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  timestamps: false,
});


export default Persona;
