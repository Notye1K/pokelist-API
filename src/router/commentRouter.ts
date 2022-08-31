import { Router } from 'express'

import * as commentController from '../controller/commentController.js'

const commentRouter = Router()

commentRouter.get('/:pokemonId/comments', commentController.getComments)
commentRouter.post('/:pokemonId/comments', commentController.createComment)

export default commentRouter
