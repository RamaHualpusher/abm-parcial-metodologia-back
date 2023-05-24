import { Model, DataTypes, BuildOptions } from 'sequelize';
import { sequelize } from '../lib/db';

export interface PersonaModel extends Model {
  readonly id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
}

export type PersonaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PersonaModel;
};

const Persona = <PersonaStatic>sequelize.define('personas', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
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
