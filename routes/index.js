const router = require('express').Router()
const HealthCheckRoutes = require('./healthcheck')
const MessageRoutes = require('./message')

router.use('/healthcheck', HealthCheckRoutes)
router.use('/message', MessageRoutes)

module.exports = router
