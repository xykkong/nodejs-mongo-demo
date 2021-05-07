const MessageValidator = {
    async isValid(payload){
        const {meetingId, sourceClientId, message} = payload
        //Basic validation
        if(meetingId === undefined || sourceClientId === undefined || message === undefined){
            return false
        }
        else{
            return true
        }
    }
}

module.exports = MessageValidator