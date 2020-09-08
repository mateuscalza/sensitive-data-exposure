import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import sha1 from 'sha1'
import md5 from 'md5'
import client from './database'
import config from '../config.json'

const salt = config.security.salt

export default async function signup(request: Request, response: Response) {
  try {
    await client.query(
      `
      INSERT INTO "user" (
        name,
        cpf,
        email,
        password,
        password_md5,
        password_sha1,
        password_md5_with_salt,
        password_sha1_with_salt,
        password_hash
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
      [
        request.body.name,
        request.body.cpf,
        request.body.email,
        request.body.password,
        md5(request.body.password),
        sha1(request.body.password),
        md5(request.body.password + salt),
        sha1(request.body.password + salt),
        await bcrypt.hash(request.body.password, 10),
      ],
    )

    response.send({
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
