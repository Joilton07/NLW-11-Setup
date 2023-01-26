import cors from '@fastify/cors'
import Fastify from 'fastify'
import { appRoutes } from './routes'

async function server() {
    const app = Fastify()

    app.register(cors)
    app.register(appRoutes)

    await app.listen({ port: Number(process.env.PORT) || 3333, host: process.env.HOST || '0.0.0.0' }).then(() => {
        console.log('HTTP Server Running ', process.env.PORT)
    })
}

server()