import express from 'express'
import compression from 'compression'
import cors from 'cors'
import graphqlHttp from 'express-graphql'
import schema from './schema'
const app = express()

app.use('*',cors())
app.use(compression())

app.use('/',graphqlHttp({
    schema,
    graphiql:true
}))

app.listen(
    {port : 5300},
    () => console.log('http://localhost:5300')
)