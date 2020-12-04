import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http';
import cors from 'cors';

const app = express()

import resolvers from './resolvers';
import { schema } from './schema'

const server = new ApolloServer({
    resolvers,
    typeDefs: schema,
})

app.use("*", cors())

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen({ port: 8000 }, () => console.log("http://localhost:8000/graphql"))