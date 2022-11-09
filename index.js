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

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${lineConfig.channelAccessToken}`,
}

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const flexMsgCharacterElements = []

const characters = async () => {
  const getApi = await axios.get('https://api.genshin.dev/elements')
  try {
    const res = getApi
    return await res.data.map((data) => {
      flexMsgCharacterElements.push({
        type: 'bubble',
        size: 'micro',
        hero: {
          type: 'image',
          url: `https://api.genshin.dev/elements/${data}/icon`,
          aspectMode: 'cover',
          aspectRatio: '1:1',
          position: 'relative',
          offsetTop: '10px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: capitalizeFirstLetter(data),
              weight: 'bold',
              size: 'sm',
              wrap: true,
            },
          ],
          spacing: 'sm',
          paddingAll: '15px',
        },
        action: {
          type: 'message',
          label: capitalizeFirstLetter(data),
          text: capitalizeFirstLetter(data),
        },
      })
    })
  } catch {
    return
  }
}

const reply = async (bodyResponse, message) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${LINE_MESSAGING_API}/reply`,
      data: {
        replyToken: bodyResponse.events[0].replyToken,
        messages: [
          {
            type: 'flex',
            altText: message,
            contents: message,
          },
        ],
      },
      headers: LINE_HEADER,
    })
    return response
  } catch (error) {
    return null
  }
}

/* test */
const mock = undefined
characters()
/* test */

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
  if (event.message.text === 'characters') {
    await characters()
    reply(event, flexMsgCharacterElements)
  }
}

app.listen(4000, () => {
  console.log('listening')
})
