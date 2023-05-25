// services/persona-service.ts
import Persona, { PersonaModel } from '../models/persona';
import SequelizeModelStatic from '../repository/sequalize-model-static';
import BaseService from './base-service';

class PersonaService extends BaseService<PersonaModel> {
  getModel(): SequelizeModelStatic<PersonaModel> {
    return Persona as unknown as SequelizeModelStatic<PersonaModel>;
  }
}


export default new PersonaService();
