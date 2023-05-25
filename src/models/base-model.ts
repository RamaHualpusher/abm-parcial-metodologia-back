// models/base-model.ts
import { Model, DataTypes, BuildOptions } from 'sequelize';

export interface BaseModel extends Model {
  readonly id: number;
}

export type BaseStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BaseModel;
};
