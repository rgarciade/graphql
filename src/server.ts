import express from 'express'
import compression from 'compression'
import cors from 'cors'
import schema from './schema'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
const app = express()

app.use('*',cors())
app.use(compression())

const server = new ApolloServer({
    schema,
    introspection:true
})

server.applyMiddleware({app})
const httpServer = createServer(app)

httpServer.listen(
    {port : 5300},
    () => console.log('http://localhost:5300/graphql')
)