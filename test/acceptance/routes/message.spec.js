const request = require('supertest')
const app = require('../../../app')

describe('Message endpoint test', () => {
  describe('GET /message', () => {
    let res

    before(async () => {
      res = await request(app).get('/message')
    })

    it('should return 200', () => {
      expect(res.status).to.be.eql(200)
    })
  })
})
