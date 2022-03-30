import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await (await fetch('https://kannxapi.herokuapp.com/api/randomimage/loli')).buffer()
    conn.sendButton(m.chat, 'Tch, dasar pedofil', global.wm, res, [['Next', `${usedPrefix + command}`]], m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
export default handler