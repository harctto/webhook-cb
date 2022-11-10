export interface IEventLine {
  type: string
  message: IEventMessage
  webhookEventId: string
  deliveryContext: IEventDevlivery
  timestamp: Date
  source: IEventSource
  replyToken: string
  mode: string
}

interface IEventMessage {
  type: string
  id: string
  text: string
}

interface IEventDevlivery {
  isRedelivery: boolean
}

interface IEventSource {
  type: string
  userId: string
}

export interface ICharacterDetail {
  name: string
  title: string
  vision: string
  weapon: string
  nation: string
  affiliation: string
  rarity: number
  constellation: string
  birthday: Date
  description: string
  skillTalents: Constellation[]
  passiveTalents: Constellation[]
  constellations: Constellation[]
  vision_key: string
  weapon_type: string
}

interface Constellation {
  name: string
  unlock: string
  description: string
  level?: number
  type?: string
}
