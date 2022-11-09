const line = require('@line/bot-sdk')
const express = require('express')
const app = express()
const {
  recieveHello,
  responseHello,
  noAnswer,
  artifacts,
} = require('./constant')
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
    //characters
    else if (event.message.text === 'characters') {
      await replyMsg(event, 'เลือกธาตุตัวละครก่อนนะคะ')
      await replyFlexMsg(event, elements, 'เลือกธาตุตัวละครก่อนนะคะ')
    }

    //characters list

    //weapons
    else if (event.message.text === 'weapons') {
      await replyMsg(event, 'เลือกประเภทของอาวุธได้เลย')
      await replyFlexMsg(event, weapons, 'เลือกประเภทของอาวุธได้เลย')
    }
    //weapons list

    //artifacts
    else if (event.message.text === 'artifacts') {
      const { data } = await getArtifact()
      replyMsg(event, data)
    }
    //artifacts list
    else if (artifacts.some((item) => item.id === event.message.text)) {
      const { name } = artifacts.find((item) => item.id === event.message.text)
      const { data } = await getArtifactDetail(name)
      const getDetail = artifactsDetails({ name: name, fullname: data.name })
      await replyFlexMsg(
        event,
        getDetail,
        data.name
      )
      //เพิ่ม emoji - ไม่
      await replyMsg(
        event,
        `Artifact ที่คุณนักเดินทางขอ ชื่อ ${data.name}
ซึ่งมีระดับความหายากมากที่สุด ${data.max_rarity} ดาว
เมื่อใส่เซ็ต 2 ชิ้นจะมีผลดังนี้ :
${data['2-piece_bonus']}
เมื่อใส่เซ็ต 4 ชิ้นจะมีผลดังนี้ :
${data['4-piece_bonus']}`,
      )
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
