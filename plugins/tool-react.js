let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react']
handler.tags = ['tools']
handler.command = /^(react)$/i

handler.exp = 3

export default handler