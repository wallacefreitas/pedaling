import { Request, Response } from "express"
import { User } from "./core/entities/user"

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World Teste!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})