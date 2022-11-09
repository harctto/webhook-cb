const line = require('@line/bot-sdk')
const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const { hello } = require('./constant')
const app = express()
const env = dotenv.config().parsed

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN,
}

const client = new line.Client(lineConfig)

// [
//     {
//       type: 'message',
//       message: { type: 'text', id: '17097009291923', text: 'ดีจ้า' },
//       webhookEventId: '01GHE9N8JDHNTM2JYWHCP6DW6P',
//       deliveryContext: { isRedelivery: false },
//       timestamp: 1668000948661,
//       source: { type: 'user', userId: 'U2f964745ddad89144a356132fdb8b33f' },
//       replyToken: '7f7654ec5b3b472e8a86e5fba87bec1c',
//       mode: 'active'
//     }
//   ]

app.post('/webhook', line.middleware(lineConfig), async (req, res) => {
  try {
    const events = mock
    console.log('event ===>', events)
    return events.length > 0
      ? await events.map((item) => handleEvent(item))
      : res.status(200).send('ok')
  } catch (err) {
    res.status(500).end()
  }
})

const characters = async () => {
  const getApi = await axios.get('https://api.genshin.dev/characters')
  try {
    const res = getApi
    console.log(res.data)
    res.data
      ? res.data.map((data) => {
          return client.replyMessage(events.replyToken, {
            type: 'text',
            text: data,
          })
        })
      : null
  } catch {
    return
  }
}

const handleEvent = async (event) => {
  if (event.message.text === "Characters") {
    characters()
  }
}

app.listen(4000, () => {
  console.log('listening')
})
