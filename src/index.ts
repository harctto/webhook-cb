import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { middleware } from '@line/bot-sdk'
import {
  LINE_CONFIG_MIDDLEWARE,
} from './utils/helper'
import { handleEvent } from './handleEvent'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('<image src="https://qr-official.line.me/sid/L/184sqnjh.png" alt="qrCode"/>')
})

app.post(
  '/webhook',
  middleware(LINE_CONFIG_MIDDLEWARE),
  async (req, res) => {
    try {
      const events = req.body.events
      return events.length > 0
        ? await events.map((item: any) => handleEvent(item))
        : res.status(200).send('ok')
    } catch (err) {
      res.status(500).end()
    }
  },
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
