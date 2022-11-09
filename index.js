const line = require('@line/bot-sdk')
const express = require('express')
const app = express()
const { recieveHello, responseHello, noAnswer, artifacts } = require('./constant')
const { elements, weapons, artifactsDetails } = require('./optionsCard')
const { replyFlexMsg, LINE_CONFIG, randomWord, replyMsg } = require('./helper')
const { getArtifact, getArtifactDetail } = require('./handle_api')

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
    //elements
    else if (event.message.text === 'elements') {
      replyFlexMsg(event, elements)
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
    //artifacts list
    else if (artifacts.some(item => item.id === event.message.text)) {
      const { name } = artifacts.find(item => item.id === event.message.text)
      const { data } = await getArtifactDetail(name)
      replyFlexMsg(event, artifactsDetails(data.name))
      replyMsg(event, `
        Artifact ที่คุณนักเดินทางขอ ชื่อ ${data.name}\n
        ซึ่งมีระดับความหายากมากที่สุด ${data.max_rarity} ดาว\n
        เมื่อใส่เซ็ต 2 ชิ้นจะมีผลดังนี้\n
        ${data["2-piece_bonus"]}\n
        เมื่อใส่เซ็ต 4 ชิ้นจะมีผลดังนี้\n
        ${data["4-piece_bonus"]}
      `)
    }
    //no-text
    else {
      replyMsg(event, randomWord(noAnswer))
    }
  }
}

app.listen(4000, () => {
  console.log('Server is ready')
})
