import express, { Application } from 'express'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config()

const PORT = process.env.PORT || 3000
const app: Application = express()

app.use(express.json())
routes(app)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))