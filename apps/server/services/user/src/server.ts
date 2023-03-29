import "reflect-metadata"

import express from 'express';
import cors from 'cors';
import { router } from "./routes"

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})