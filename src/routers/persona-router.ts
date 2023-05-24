import express from 'express';

import personaController from '../controllers/persona-controller';

const personaRouter = express.Router();

personaRouter.get('/', personaController.list);
personaRouter.get('/:id', personaController.fetch);
personaRouter.post('/', personaController.create);
personaRouter.put('/:id', personaController.update);
personaRouter.delete('/:id', personaController.remove);

export default personaRouter;
