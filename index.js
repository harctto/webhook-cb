const line = require('@line/bot-sdk')
const express = require('express')
const axios = require('axios').default
const dotenv = require('dotenv')

const app = express()
const env = dotenv.config().parsed

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN,
}

const client = new line.Client(lineConfig)

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
  console.log(event)
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'test',
  })
}

app.listen(4000, () => {
    console.log("listening");
})