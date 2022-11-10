import axios from 'axios'
import { ICharacterDetail, IWeaponDetail } from '../types/api'

const getArtifact = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/artifacts`)
    const replyForChoose: string =
      'ฉันหา Artifact ทั้งหมดมาให้คุณนักเดินทางแล้วค่ะ'

    const getQuery: string = res.data.map((data: any, index: number) => {
      return `\n A${index + 1} : ${data}`
    })

    return {
      status: true,
      data: replyForChoose + getQuery,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

const getArtifactDetail = async (name: string) => {
  try {
    const res = await axios.get(`${process.env.API_URL}/artifacts/${name}`)
    return {
      status: true,
      data: res.data,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

const getCharacter = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/characters`)
    return {
      status: true,
      data: res.data,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

const getCharacterDetail = async (name: string) => {
  try {
    const res = await axios.get<ICharacterDetail>(
      `${process.env.API_URL}/characters/${name}`,
    )
    return {
      status: true,
      data: res.data,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

const getWeapon = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/weapons`)
    return {
      status: true,
      data: res.data,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

const getWeaponDetail = async (name: string) => {
  try {
    const res = await axios.get<IWeaponDetail>(
      `${process.env.API_URL}/weapons/${name}`,
    )
    return {
      status: true,
      data: res.data,
    }
  } catch (err) {
    return {
      status: false,
      data: null,
      msg: err,
    }
  }
}

export {
  getArtifact,
  getArtifactDetail,
  getCharacter,
  getCharacterDetail,
  getWeapon,
  getWeaponDetail,
}
