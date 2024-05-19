/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')
const version = require("@whiskeysockets/baileys/package.json").version 

//owner
global.owner = '6285656715298'
global.nomerowner = ["6285656715298"]

//payment
global.nomordana = '085656715298'

//bot
global.botname = "SakiaBotz"
global.KyuuKuru = "https://telegra.ph/file/28282735848de7989301c.png"
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.footer = `Sakia 乂 A 𝐂𝐋͢𝐢𝚵𝐍͢𝐓`
global.prefa = ['','!','.',',','🐤','🗿']

//watermark 
global.packname = 'Sakia'
global.author = 'Slebewww'

//apikey
global.caliph = 'MyBiibotz'
global.lolkey = 'aa287b0865449a8c9b530722'
global.cookie = '_U=1o0gOAFjeuOfJGlzAx7CV-wDu6tv3Q1pbvjc3KbaXLiDaGQnJYmz'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

global.Kyuu = "`"
global.mess = {
    group: "Fitur Hanya Digunakan Untuk Grup!",
    Badmin: "Fitur dapat Digunakan Setelah Bot menjadi ADMIN!",
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
