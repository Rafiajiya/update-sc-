let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `bisa tod`
conn.sendHydrated(m.chat, info.trim(), '                「 Xtreshe BOT あ⁩ 」', null, 'https://chat.whatsapp.com/Lvq5C2fpQ2U8Cg5NtmpUIF', 'SUPPORT', null, null, [
      ['MENU', '.menu'],
      [null, null],
      [null, null]
    ], m)
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler
let wm = global.botwm