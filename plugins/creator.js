let handler = async (m, { conn }) => {
	let text = `
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╔─╗╥   ╥╔╗╥╓─╓╮───░░█
█░░║   ║║║║║║║╟─╠╣───░░█
█░░╚─╝╚╩╝╨╙╜╙─╙╙───░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
›────────────────────────‹
                                 ▾`
    conn.sendHydrated(m.chat, text.trim(), global.wm, null, 'https://wa.me/62882007804496/', 'CHAT OWNER', '62882007804496', 'NUMBER OWNER', [
      ['THANKS', '.biodata'],
      ['OK', '.'],
      [null, null]
    ], m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler