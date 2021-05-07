const logger = require('@b2wads/logger')
const mongoClient = require('../clients/mongo')

const MessageService = {
  async findAll() {
      const conn = await mongoClient.getConnection()
      const messages = await conn.db().collection('message').find({}, { projection: { _id: 0} }).toArray()

      return messages
  },
  /**
   * @param meetingId Integer
   */
  async findByMeeting(meetingId) {
    const conn = await mongoClient.getConnection()
    const messages = await conn.db().collection('message').find({meetingId}, { projection: { _id: 0} }).toArray()
    console.log(messages)
    return messages
  },

  async create(message) {
    const conn = await mongoClient.getConnection()
    const messages = await conn.db().collection('message').insertOne(message)
    return messages
},
}

module.exports = MessageService
