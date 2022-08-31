import { Request, Response } from 'express'

import commentService from '../service/commentService.js'

export async function createComment(req: Request, res: Response) {
    const { comment, email, name, img } = req.body

    const { pokemonId } = req.params

    if (!comment || !email || !pokemonId || !name) {
        res.sendStatus(400)
        return
    }

    await commentService.createComment(email, comment, +pokemonId, name, img)

    res.sendStatus(201)
}

export async function getComments(req: Request, res: Response) {
    const { pokemonId } = req.params

    if (!pokemonId) {
        res.sendStatus(400)
        return
    }

    const comments = await commentService.getComments(+pokemonId)

    res.send(comments)
}

export default { getComments, createComment }
