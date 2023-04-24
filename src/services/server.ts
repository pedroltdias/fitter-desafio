import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API')
})

// Add more routes and functionality here

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
