import supertest from 'supertest'
import app from '../../src/app'
import prismaClient from '../../src/database'

describe('POST /comments', () => {
    it('given a valid comment it should return 201', async () => {
        const body = {
            comment: 'test comment',
            email: 'test@example.com',
            name: 'tester',
        }

        const before = await prismaClient.comment.findMany()
        const result = await supertest(app)
            .post('/pokemons/1/comments')
            .send(body)
        const status = result.status
        const after = await prismaClient.comment.findMany()

        expect(status).toEqual(201)
        expect(after.length).toEqual(before.length + 1)
    })

    it('given a invalid comment it should return 400', async () => {
        const body = {
            comment: 'test comment',
            name: 'tester',
        }

        const before = await prismaClient.comment.findMany()
        const result = await supertest(app)
            .post('/pokemons/1/comments')
            .send(body)
        const status = result.status
        const after = await prismaClient.comment.findMany()

        expect(status).toEqual(400)
        expect(before.length).toEqual(after.length)
    })
})

describe('GET /comments', () => {
    it('should return array', async () => {
        const result = await supertest(app).get('/pokemons/1/comments')
        expect(result.body).toBeTruthy()
    })
})

describe('GET /health', () => {
    it('should return 200', async () => {
        const result = await supertest(app).get('/health')
        expect(result.status).toEqual(200)
    })
})
