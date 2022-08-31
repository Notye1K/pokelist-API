import { Router } from 'express';
import * as commentController from '../controller/commentController.js';
var commentRouter = Router();
commentRouter.get('/:pokemonId/comments', commentController.getComments);
commentRouter.post('/:pokemonId/comments', commentController.createComment);
export default commentRouter;
