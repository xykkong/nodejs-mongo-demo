const logger = require('@b2wads/logger')
const mongodb = require('mongodb').MongoClient

let mongoConnection

const mongoClient = {

  async getConnection() {
    if (!mongoConnection) {
      mongoConnection = await mongodb.connect('mongodb://localhost:27018/chat', { useUnifiedTopology: true })
    }
    return mongoConnection
  },

  async closeConnection() {
    if (mongoConnection) {
      await mongoConnection.close()
    }
    mongoConnection = undefined
    return true
  },
}

module.exports = mongoClient
