const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

const userEmitter = new UserEventEmitter();

module.exports = userEmitter;
