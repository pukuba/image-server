import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http';
import cors from 'cors';
import expressPlayground from 'graphql-playground-middleware-express'

const app = express()

import resolvers from './resolvers';
import { schema } from './schema'

const server = new ApolloServer({
    resolvers,
    typeDefs: schema,
})
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

server.applyMiddleware({ app })

app.get('playground', expressPlayground({ endpoint: '/graphql' }))

const httpServer = createServer(app)

httpServer.listen({ port: 8000 }, () => console.log("http://localhost:8000/graphql"))