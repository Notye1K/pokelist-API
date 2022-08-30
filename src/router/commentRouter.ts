import { Router } from 'express'

import * as commentController from '../controller/commentController.js'

const commentRouter = Router()

commentRouter.get('/:pokemonId/comment', commentController.getComments)
commentRouter.post('/comment', commentController.createComment)

export default commentRouter
