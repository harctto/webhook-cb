const axios = require('axios')

const getArtifact = async (req, res) => {
  try {
    const res = await axios.get('https://api.genshin.dev/artifacts')
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

module.exports = {
  getArtifact,
}
