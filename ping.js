module.exports = {
name: 'ping',
aliases: ['pong'],
run: async (client, massagem, args) => {
let ping = client.ws.ping
message.reply(`${ping}ms.`)
