import { Request, Response } from 'express'
import client from './database'

export default async function people(request: Request, response: Response) {
  try {
    const { rows } = await client.query(
      `
        SELECT
          *
        FROM
          "user"
    `,
    )

    response.send({
      people: rows,
      success: true,
      error: null,
    })
  } catch (error) {
    console.error(error)
    response.status(500).send({
      success: false,
      error: error.message,
    })
  }
}
