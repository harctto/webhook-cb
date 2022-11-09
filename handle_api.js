const dotenv = require('dotenv')
const env = dotenv.config().parsed
const axios = require('axios')

const getArtifact = async () => {
  try {
    const res = await axios.get(`${env.API_URL}/artifacts`)
    const replyForChoose = 'ฉันหา Artifact ทั้งหมดมาให้คุณนักเดินทางแล้วค่ะ'
    const getQuery = res.data.map((data, index) => {
      return `\n A${index + 1} : ${data}`
    })
    return {
      status: true,
      data: replyForChoose + getQuery,
    }
  } catch (err) {
    return
  }
}

const getArtifactDetail = async (name) => {
  try {
    const res = await axios.get(`${env.API_URL}/artifacts/${name}`)
    return {
        status: true,
        data: res.data
    }
  } catch (err) {
    return
  }
}

module.exports = {
  getArtifact,
  getArtifactDetail
}
