import prismaClient from '../database.js'

async function createComment(
    email: string,
    comment: string,
    pokemonId: number,
    name: string,
    img: string
) {
    const user = await prismaClient.user.upsert({
        where: { email },
        update: {},
        create: {
            name,
            email,
            img,
        },
    })

    const pokemon = await prismaClient.pokemon.upsert({
        where: { pokemonId },
        update: {},
        create: {
            pokemonId,
        },
    })

    await prismaClient.comment.create({
        data: {
            pokemonId: pokemon.id,
            userId: user.id,
            comment,
        },
    })
}

async function getComments(pokemonId: number) {
    const pokemon = await prismaClient.pokemon.findUnique({
        where: { pokemonId },
    })

    if (!pokemon) {
        return []
    }

    const comments = await prismaClient.comment.findMany({
        where: { pokemonId: pokemon.id },
        include: { user: true },
        orderBy: {id: 'desc'}
    })
    return comments
}

export default { createComment, getComments }
