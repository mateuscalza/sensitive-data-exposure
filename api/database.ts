import { Pool } from 'pg'
import config from '../config.json'

const client = new Pool({
  keepAlive: true,
  ...config.database,
})

export default client
