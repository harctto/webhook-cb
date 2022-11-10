import axios from 'axios'

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

export { getArtifact, getArtifactDetail }
