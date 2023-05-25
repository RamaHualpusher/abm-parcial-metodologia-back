import { BuildOptions, Model } from "sequelize";

export default interface SequelizeModelStatic<T extends Model> {
    new(values?: object, options?: BuildOptions): T;
    create: (this: new () => T, values?: object, options?: BuildOptions) => Promise<T>;
    findAll: (this: new () => T, options?: object) => Promise<T[]>;
    findByPk: (this: new () => T, identifier: string) => Promise<T | null>;
    update: (this: new () => T, values: object, options: object) => Promise<[number, T[]]>;
    destroy: (this: new () => T, options: object) => Promise<number>;
  }