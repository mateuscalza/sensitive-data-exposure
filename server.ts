import express from 'express'
import bodyParser from 'body-parser'
import signup from './api/signup'

const app = express()

app.post('/api/signup', bodyParser.json(), signup).use(express.static('pages')).listen(8000)
