export interface IEventLine {
    type: string,
    message: IEventMessage,
    webhookEventId: string,
    deliveryContext: IEventDevlivery,
    timestamp: Date,
    source: IEventSource,
    replyToken: string,
    mode: string
}

interface IEventMessage {
    type: string,
    id: string,
    text: string
}

interface IEventDevlivery {
    isRedelivery: boolean
}

interface IEventSource {
    type: string,
    userId: string
}