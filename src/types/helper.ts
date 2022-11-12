import { type } from "os"
import { IEventLine } from "./api"

export interface IReplyFlexMsg {
    type: string
    event: IEventLine
    message: any
    altText?: string
}

export interface IReplyMsg {
    event: IEventLine
    message?: string
    isMulti? : boolean
    multiMessage?: string[]
}

export interface IReplyImg {
    event: IEventLine
    src: string
}

export interface IMessagePayload {
    type: string
    text: string
}