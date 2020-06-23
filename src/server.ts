import express from 'express'
import compression from 'compression'
import cors from 'cors'

const app = express()

app.use('*',cors())
app.use(compression())

app.use('/',(req,res) => {
    res.send(' welcome ')
})

app.listen(
    {port : 5300},
    () => console.log('http://localhost:5300')
)