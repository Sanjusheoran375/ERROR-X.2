require("./database/module")

//GLOBAL PAYMENT
global.storename = "ERROR-X.2 "
global.dana = "-"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "919728893187" //masukin no lu
global.namabot = "*ẉa🐰〽️ʀ🎧🆂ʌŋjʋ🎸||᭄★* V4"
global.nomorbot = "919728893187" //masukin no lu
global.namaCreator = "*ẉa.me/✫🐰〽️ʀ🎧🆂ʌŋjʋ🎸||᭄★* "
global.linkyt = "-"
global.autoJoin = false
global.antilink = true
global.versisc = '2.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg'
global.isLink = 'https://chat.whatsapp.com/H87Tazc1bK6G6L4XuGLqAR'
global.packname = "*ẉa.me/✫🐰〽️ʀ🎧🆂ʌŋjʋ🎸||᭄★*"
global.author = "*ẉa.me/✫🐰〽️ʀ🎧🆂ʌŋjʋ🎸||᭄★*"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
