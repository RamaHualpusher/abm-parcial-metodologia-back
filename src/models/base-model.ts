// models/base-model.ts
import { Model, DataTypes, BuildOptions } from 'sequelize';

export interface BaseModel extends Model {
  readonly id: string;
}

export type BaseStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BaseModel;
};
