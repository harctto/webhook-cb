const line = require('@line/bot-sdk')
const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const { hello } = require('./constant')
const { weapons } = require('./optionsCard')
const app = express()
const env = dotenv.config().parsed

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN,
}

const client = new line.Client(lineConfig)

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${lineConfig.channelAccessToken}`,
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const replyFlexMsg = async (event, message) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${LINE_MESSAGING_API}/push `,
      data: {
        to: event.source.userId,
        messages: [
          {
            type: 'flex',
            altText: 'flex',
            contents: message,
          },
        ],
      },
      headers: LINE_HEADER,
    })
        console.log("test2")  

    return response
  } catch (error) {
    return console.log(error)
  }
}

app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
  try {
    const events = req.body.events
    console.log('event ===>', events)
    return events.length > 0
      ? await events.map((item) => handleEvent(item))
      : res.status(200).send('ok')
  } catch (err) {
    res.status(500).end()
  }
})

const handleEvent = async (event) => {
  if (event.message.text === 'weapons') {
    replyFlexMsg(event, weapons)
  }
}

app.listen(4000, () => {
  console.log('listening')
})
