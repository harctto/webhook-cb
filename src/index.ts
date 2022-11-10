import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { recieveHello, responseHello, noAnswer, artifacts } from './utils/constant'
import { getArtifact, getArtifactDetail } from './services/api'
import { middleware } from '@line/bot-sdk'
import {
  LINE_CONFIG_MIDDLEWARE,
  randomWord,
  replyFlexMsg,
  replyMsg,
} from './utils/helper'
import { IEventLine } from './types/api'
import { artifactsDetails, elements, weapons } from './utils/optionsCard'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('Chatbot Webhook Server')
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



const handleEvent = async (event: IEventLine) => {
  if (event.message.text) {
    //greeting
    if (recieveHello.includes(event.message.text)) {
      replyMsg(event, randomWord(responseHello))
    }
    //characters
    else if (event.message.text === 'characters') {
      await replyMsg(event, 'เลือกธาตุตัวละครก่อนนะคะ')
      await replyFlexMsg(event, elements, 'เลือกธาตุตัวละครก่อนนะคะ')
    }

    //characters list

    //weapons
    else if (event.message.text === 'weapons') {
      await replyMsg(event, 'เลือกประเภทของอาวุธได้เลย')
      await replyFlexMsg(event, weapons, 'เลือกประเภทของอาวุธได้เลย')
    }
    //weapons list

    //artifacts
    else if (event.message.text === 'artifacts') {
      const { data } = await getArtifact()
      if (data) {
        replyMsg(event, data)
      }
    }
    //artifacts list
    else if (artifacts.some((item) => item.id === event.message.text)) {
      const { name } = artifacts.find((item) => 
        item.id === event.message.text
      )
      const { data } = await getArtifactDetail(name)
      const getDetail = artifactsDetails({ name: name, fullname: data.name })
      await replyFlexMsg(event, getDetail, data.name)
      //เพิ่ม emoji - ไม่
      await replyMsg(
        event,
        `Artifact ที่คุณนักเดินทางขอ ชื่อ ${data.name}
  ซึ่งมีระดับความหายากมากที่สุด ${data.max_rarity} ดาว
  ---------------------------
  เมื่อใส่เซ็ต 2 ชิ้นจะมีผลดังนี้ :
  ${data['2-piece_bonus']}
  เมื่อใส่เซ็ต 4 ชิ้นจะมีผลดังนี้ :
  ${data['4-piece_bonus']}`,
      )
    }
    //no-text
    else {
      replyMsg(event, randomWord(noAnswer))
    }
  }
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
