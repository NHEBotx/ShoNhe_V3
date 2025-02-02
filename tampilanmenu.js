require ("./case")
const chalk = require("chalk")
const fs = require("fs")
global.n = "`"
global.menuforu = (prefix, simbols) => {
return `┌╾⚟┉➲【𝙎𝙔𝙎𝙏𝙀𝙈 𝙈𝙀𝙉𝙐】─═⚔️═─┐
│  
│  🔗 *Social Media Links* 🔗
│  ⟿ TikTok: ${ttk}
│  ⟿ YouTube: ${ytbb}
│  ⟿ Instagram: ${itg}
│  ⟿ Github NHEBotx:\nhttps://github.com/NHEBotx
│  ⟿ Github Sychyy:\nhttps://github.com/sychyy
│  
└────────────────────────┘

┌╾⚟┉➲【𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐】─═⚔️═─┐
│  
│  ⟿ ${simbols} ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ  (Akses terbatas)
│  ⟿ ${simbols} ${prefix}ɢᴀᴍᴇᴍᴇɴᴜ  (Permainan & tantangan)
│  ⟿ ${simbols} ${prefix}ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ  (Pengunduhan konten)
│  ⟿ ${simbols} ${prefix}ʀᴀɴᴅᴏᴍᴍᴇɴᴜ  (Random commands)
│  ⟿ ${simbols} ${prefix}ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ  (Tools konversi)
│  ⟿ ${simbols} ${prefix}ɢʀᴏᴜᴘᴍᴇɴᴜ  (Fitur grup)
│  ⟿ ${simbols} ${prefix}ᴏᴛʜᴇʀᴍᴇɴᴜ  (Lain-lain)
│  ⟿ ${simbols} ${prefix}ᴀᴜᴅɪᴏᴍᴇɴᴜ  (Pengolahan audio)
│  ⟿ ${simbols} ${prefix}ᴀɪᴍᴇɴᴜ  (AI-based commands)
│  ⟿ ${simbols} ${prefix}ᴀɴɪᴍᴇᴍᴇɴᴜ  (Fitur Anime)
│  
└────────────────────────┘

┌╾⚟┉➲ ${n}【 ғᴇᴀᴛᴜʀᴇᴅ】${n} ⟢
├────────────────
│  冬 ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅs
│  ⟿ ${simbols} ${prefix}listuserfire
│  ⟿ ${simbols} ${prefix}cekfire
│  ⟿ ${simbols} ${prefix}bensin
│  ⟿ ${simbols} ${prefix}afk
│  ⟿ ${simbols} ${prefix}listcmd
│  ⟿ ${simbols} ${prefix}cek
│  ⟿ ${simbols} ${prefix}find
│  ⟿ ${simbols} ${prefix}ceksaldo
│  ⟿ ${simbols} ${prefix}scriptnoenc
│
│  冬 sᴜᴘᴘᴏʀᴛᴇᴅ
│  ⟿ ${simbols} ${prefix}tqto
│  ⟿ ${simbols} ${prefix}realown
└──────────────────╼.✗

┌╾⚟┉➲ ${n}【 ɢᴜɪᴅᴇ 】${n} ⟢
├────────────────
│  冬 ꜰᴏʀ ᴍᴇɴᴜ: ${prefix}allmenu
│  冬 ᴄᴏɴᴛᴀᴄᴛ ꜰᴏʀ ᴇʀʀᴏʀs: ${prefix}owner
└──────────────────╼.✗`}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})