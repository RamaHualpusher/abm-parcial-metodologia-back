// controllers/persona-controller.ts
import BaseController from './base-controller';
import personaService from '../services/persona-service';
import { PersonaModel } from '../models/persona';

class PersonaController extends BaseController<PersonaModel> {
  constructor() {
    super(personaService);
    this.create = this.create.bind(this);
    this.fetch = this.fetch.bind(this);
    this.list = this.list.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
}

export default new PersonaController();
