const dotenv = require('dotenv')
const env = dotenv.config().parsed
const axios = require('axios')

const LINE_CONFIG = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN,
}
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${LINE_CONFIG.channelAccessToken}`,
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const randomWord = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

const replyFlexMsg = async (event, message, altText) => {
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
    return 
  }
}

const replyMsg = async (event, message) => {
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
    return
  }
}

module.exports = {
  capitalizeFirstLetter,
  replyFlexMsg,
  replyMsg,
  randomWord,
  LINE_CONFIG,
  LINE_HEADER,
  LINE_MESSAGING_API,
}
