import express from 'express'
import { createServer } from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
const app = express()
import { router } from './router'
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/img/', express.static(path.join(__dirname, 'img')))
app.use(express.Router())
app.use('/', router)
const httpServer = createServer(app)

httpServer.timeout = 5000

httpServer.listen({ port: 8000 }, () => console.log("http://localhost:8000/"))