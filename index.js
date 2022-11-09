const line = require('@line/bot-sdk')
const express = require('express')
const app = express()
const { 
  recieveHello, 
  responseHello, 
  noAnswer 
} = require('./constant')
const { weapons } = require('./optionsCard')
const { 
  replyFlexMsg, 
  LINE_CONFIG, 
  randomWord, 
  replyMsg 
} = require('./helper')

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
  if (recieveHello.includes(event.message.text)) {
    replyMsg(event, randomWord(responseHello))
  }
  if (event.message.text === 'weapons') {
    replyFlexMsg(event, weapons)
  }
  else {
    replyMsg(event, randomWord(noAnswer))
  }
}

app.listen(4000, () => {
  console.log('listening 4000')
})
