const router = require('express').Router()
const MessageController = require('../controllers/message-controller')

// Prefix: /healthcheck
router.get('/:meetingId', MessageController.getByMeeting)
router.get('/', MessageController.getAll)
router.post('/', MessageController.create)

module.exports = router
