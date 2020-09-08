import express from 'express'
import bodyParser from 'body-parser'
import signup from './api/signup'
import people from './api/people'

const app = express()

app
  .post('/api/signup', bodyParser.json(), signup)
  .post('/api/people', bodyParser.json(), people)
  .use(express.static('pages'))
  .listen(8000)
