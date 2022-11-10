import { IEventLine } from '../types/api'
import axios from 'axios'
import { Client } from '@line/bot-sdk'
import { Config, Message, MiddlewareConfig } from '@line/bot-sdk/dist/types'
import dotenv from 'dotenv'
import { IMessagePayload, IReplyFlexMsg, IReplyMsg } from '../types/helper'
dotenv.config()

const SECRET_TOKEN = process.env.SECRET_TOKEN!
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!

const LINE_CONFIG: Config | MiddlewareConfig = {
  channelAccessToken: ACCESS_TOKEN,
  channelSecret: SECRET_TOKEN,
}

const LINE_CONFIG_MIDDLEWARE: MiddlewareConfig = {
  channelAccessToken: ACCESS_TOKEN,
  channelSecret: SECRET_TOKEN,
}

const client = new Client({
  channelAccessToken: ACCESS_TOKEN,
})

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const randomWord = (items: string[]) => {
  return items[Math.floor(Math.random() * items.length)]
}

const pushMsg = async ({ type, event, message, altText }: IReplyFlexMsg) => {
  const messagePush: any = [
    {
      type: type,
      altText: altText,
      contents: message,
    },
  ]
  client
    .pushMessage(event.source.userId, messagePush)
    .then(() => {
      return {
        status: true,
        msg: 'success',
      }
    })
    .catch((err) => {
      return {
        status: false,
        msg: err.message,
      }
    })
}

const replyMsg = async ({ event, message, isMulti, multiMessage }: IReplyMsg) => {
  let messagePush: Message[] = []
  if (isMulti) {
    if (multiMessage) {
      multiMessage.map((el) => {
        messagePush.push({
          type: 'text',
          text: el
        })
      })
    }
  } else {
    if (message) {
      messagePush = [
        {
          type: 'text',
          text: message,
        },
      ]
    }
  }
  client
    .replyMessage(event.replyToken, messagePush)
    .then(() => {
      return {
        status: true,
        msg: 'success',
      }
    })
    .catch((err) => {
      return {
        status: false,
        msg: err.message,
      }
    })
}

export {
  capitalizeFirstLetter,
  pushMsg,
  replyMsg,
  randomWord,
  LINE_CONFIG,
  LINE_CONFIG_MIDDLEWARE,
}
