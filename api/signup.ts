import { Request, Response } from 'express'

export default function signup(request: Request, response: Response) {
  console.log('signup', request.body)
  response.send({
    success: true,
  })
}
