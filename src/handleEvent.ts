import {
  recieveHello,
  responseHello,
  noAnswer,
  artifacts,
  characters,
  elementsConstant,
  weapons,
} from './utils/constant'
import {
  getArtifact,
  getArtifactDetail,
  getCharacter,
  getCharacterDetail,
} from './services/api'
import { randomWord, pushMsg, replyMsg } from './utils/helper'
import { ICharacterDetail, IEventLine } from './types/api'
import {
  artifactsDetails,
  charactersPick,
  elements,
  weaponsType,
} from './utils/optionsCard'
import { ICharacter } from './types/constant'

const test = async () => {
  
}

const handleEvent = async (event: IEventLine) => {
  if (event.message.text) {
    //greeting
    if (recieveHello.includes(event.message.text)) {
      replyMsg({
        event,
        message: randomWord(responseHello),
      })
    }
    //characters
    else if (event.message.text === 'characters') {
      await replyMsg({
        event,
        message: 'เลือกธาตุตัวละครก่อนนะคะ',
      })
      await pushMsg({
        type: 'flex',
        event,
        message: elements,
        altText: 'เลือกธาตุตัวละครก่อนนะคะ',
      })
    }

    //characters list
    else if (elementsConstant.includes(event.message.text)) {
      const payload = characters.filter(
        (el) => el.elements === event.message.text,
      )
      const flexMsg = charactersPick(payload)
      await replyMsg({
        event,
        message: 'เลือกตัวละครได้เลย',
      })
      await pushMsg({
        type: 'flex',
        event,
        message: flexMsg,
        altText: 'เลือกตัวละครได้เลย',
      })
    }

    //weapons
    else if (event.message.text === 'weapons') {
      await replyMsg({
        event,
        message: 'เลือกประเภทของอาวุธได้เลย',
      })
      await pushMsg({
        type: 'flex',
        event,
        message: weapons,
        altText: 'เลือกประเภทของอาวุธได้เลย',
      })
    }
    //weapons list

    //artifacts
    else if (event.message.text === 'artifacts') {
      const { data } = await getArtifact()
      if (data) {
        replyMsg({
          event,
          message: data,
        })
      }
    }
    //artifacts list
    else if (artifacts.some((item) => item.id === event.message.text)) {
      const { name } = artifacts.find((item) => item.id === event.message.text)
      const { data } = await getArtifactDetail(name)
      const getDetail = artifactsDetails({ name: name, fullname: data.name })
      await pushMsg({
        type: 'flex',
        event,
        message: getDetail,
        altText: data.name,
      })
      //เพิ่ม emoji - ไม่
      await replyMsg({
        event,
        message: `Artifact ที่คุณนักเดินทางขอ ชื่อ ${data.name}
ซึ่งมีระดับความหายากมากที่สุด ${data.max_rarity} ดาว
---------------------------
${
  data['2-piece_bonus'] && data['4-piece_bonus']
    ? `เมื่อใส่เซ็ต 2 ชิ้นจะมีผลดังนี้ :
  ${data['2-piece_bonus']}
---------------------------
เมื่อใส่เซ็ต 4 ชิ้นจะมีผลดังนี้ :
  ${data['4-piece_bonus']}`
    : `เมื่อใส่เซ็ต 1 ชิ้นจะมีผลดังนี้ :
  ${data['1-piece_bonus']}`
}
`,
      })
    }
    //no-text
    else {
      replyMsg({
        event,
        message: randomWord(noAnswer),
      })
    }
  }
}

export { handleEvent, test }
