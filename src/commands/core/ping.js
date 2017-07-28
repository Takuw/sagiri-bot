const { Command } = require('sylphy')

class Ping extends Command {
  constructor (...args) {
    super(...args, {
      name: 'ping',
      description: 'Pong!',
      group: 'core',
      options: { hidden: true }
    })
  }

  handle ({ msg }, responder) {
    return responder.format('emoji:info').send('Pong!').then(m =>
			m.edit(`${m.content} - Time taken: **${m.timestamp - msg.timestamp}ms**`)
				.catch(this.logger.error)
		)
  }
}

module.exports = Ping
