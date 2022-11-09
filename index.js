const line = require('@line/bot-sdk')
const express = require('express')
const app = express()
const { recieveHello, responseHello, noAnswer } = require('./constant')
const { weapons } = require('./optionsCard')
const { replyFlexMsg, LINE_CONFIG, randomWord, replyMsg } = require('./helper')
const { getArtifact } = require('./handle_api')

app.post('/webhook', line.middleware(LINE_CONFIG), async (req, res) => {
  try {
    const events = req.body.events
    return events.length > 0
      ? await events.map((item) => handleEvent(item))
      : res.status(200).send('ok')
  } catch (err) {
    res.status(500).end()
  }
})

const handleEvent = async (event) => {
  if (event.message.text) {
    //greeting
    if (recieveHello.includes(event.message.text)) {
      replyMsg(event, randomWord(responseHello))
    }
    //weapons
    else if (event.message.text === 'weapons') {
      replyFlexMsg(event, weapons)
    }
    //artifacts
    else if (event.message.text === 'artifacts') {
      const { data } = await getArtifact()
      replyMsg(event, data)
    }
    //no-text
    else {
      replyMsg(event, randomWord(noAnswer))
    }
  }
}

app.listen(4000, () => {
  console.log('listening 4000')
})
