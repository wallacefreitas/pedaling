import express from 'express';
import cors from 'cors';

const app = express()
const port = 3003

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})