const { Command } = require('sylphy')
const snekfetch = require('snekfetch')
const rp = require('request-promise-native')

class Yomama extends Command {
  constructor (...args) {
    super(...args, {
      name: 'yomama',
      description: 'Shows a random joke of yomomma from <http://api.yomomma.info/>.',
      group: 'search'
    })
  }

  async handle ({ msg, client }, responder) {
    try {
      const res = await rp.get('http://api.yomomma.info').then(JSON.parse)
      client.createMessage(msg.channel.id, {
        embed: {
          color: 0xffff00,
          description: res.joke
        }
      })
    } catch (error) {
      responder.error('There was an error, please try again!')
    }
  }
}

module.exports = Yomama
