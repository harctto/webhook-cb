import { IEventLine } from "./api"

export interface IReplyFlexMsg {
    type: string
    event: IEventLine
    message: any
    altText?: string
}

export interface IReplyMsg {
    event: IEventLine
    message: string
}