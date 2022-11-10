import { IEventLine } from '../types/api'
import axios from 'axios'
import { Config, MiddlewareConfig } from '@line/bot-sdk/dist/types'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_TOKEN = process.env.SECRET_TOKEN!
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!

const LINE_CONFIG: Config | MiddlewareConfig = {
  channelAccessToken: ACCESS_TOKEN,
  channelSecret: SECRET_TOKEN
}

const LINE_CONFIG_MIDDLEWARE: MiddlewareConfig = {
  channelAccessToken: ACCESS_TOKEN,
  channelSecret: SECRET_TOKEN,
}

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${LINE_CONFIG.channelAccessToken}`,
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const randomWord = (items: String[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

const replyFlexMsg = async (
  event: IEventLine,
  message: any,
  altText: string,
) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${LINE_MESSAGING_API}/push `,
      data: {
        to: event.source.userId,
        messages: [
          {
            type: 'flex',
            altText: altText,
            contents: message,
          },
        ],
      },
      headers: LINE_HEADER,
    })
    return response
  } catch (error) {
    return error
  }
}

const replyMsg = async (event: IEventLine, message: String) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${LINE_MESSAGING_API}/reply  `,
      data: {
        replyToken: event.replyToken,
        messages: [
          {
            type: 'text',
            text: message,
          },
        ],
      },
      headers: LINE_HEADER,
    })
    return response
  } catch (error) {
    return error
  }
}

export {
  capitalizeFirstLetter,
  replyFlexMsg,
  replyMsg,
  randomWord,
  LINE_CONFIG,
  LINE_HEADER,
  LINE_MESSAGING_API,
  LINE_CONFIG_MIDDLEWARE,
}
