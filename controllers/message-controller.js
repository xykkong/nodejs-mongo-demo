const MessageService = require('../services/message-service')
const MessageValidator = require('../validators/messageValidator')

const MessageController = {
  async getAll(req, res) {
    const messages = await MessageService.findAll()
    console.log(messages)
    res.status(200).json(messages)
  },

  async getByMeeting(req, res) {
    let meetingId
    try{
      meetingId = parseInt(req.params.meetingId)
    } catch(e){
      return res.status(400).json({error:'id is not a integer'})
    }
    
    const messages = await MessageService.findByMeeting(meetingId)
    console.log(messages)
    res.status(200).json(messages)
  },

  async create(req, res) {
    const payload = req.body
    const isValid = await MessageValidator.isValid(payload)
    
    if(!isValid){
      return res.status(400).json({error:'payload not valid'})
    }
    payload.timestamp = new Date()
    const ok = await MessageService.create(payload)
    if(ok)
      res.status(201).json("message: ok")
    else 
    res.status(400).json({error:'error on saving the message'})
  },
}

module.exports = MessageController
