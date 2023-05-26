const fs = require('fs')
const chalk = require('chalk')
const {
   indonesia,
   english,
   spanyol
} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'V12', // 👉 login https://api.zeeoneofc.xyz to get apikey
}

// setting 
global.autoread = false // auto read message
global.autobio = false //auto ganti bio
global.anticall = true //anti call 
global.userRegister = false
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = english //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "nova-Md v2" //namabot kalian
global.ownername = "shashika " //nama kalian
global.myweb = "https://s.id/BOTGITHUB" //bebas asal jan hapus
global.youtube = "https://youtube.com/@sandaru12" //bebas asal jan hapus
global.myweb2 = "https://s.id/BOTGITHUB" //bebas
global.email = "thejanshashika@gmail.com" //bebas
global.region = "Buddhist" //bebas
global.timezone = 'Asia/Colombo' //  timezone wib
global.premium = ['94715442757'] //premium user
global.owner = ["94715442757"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "715442757" // nomor wa kalian
global.ownernomerr = "+94715442757" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://telegra.ph/file/1c448faa5b93a37869e77.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.thumbGif = 'https://telegra.ph/file/e90bef3779d3c5812a5d1.mp4'
global.packname = '© nova legendz-Md' //sticker wm ubah
global.author = 'nove legendz Ofc' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.multiplier = 69
global.limitawal = {
   premium: "10000",
   free: 100
}

global.adventureRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.bankRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.bansosRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.bansosRPG_ = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.berburuRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.inventoryRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.cooldownRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.dailyRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.hourlyRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.kandangRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.kolamRGP = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.mancingRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.monthlyRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.weeklyRPG = 'https://telegra.ph/file/1c448faa5b93a37869e77.jpg'
global.rpg = {
   emoticon(string) {
      string = string.toLowerCase()
      let emot = {
         level: '📊',
         limit: '🎫',
         health: '❤️',
         exp: '✨',
         money: '💹',
         bank: '🏦',
         potion: '🥤',
         diamond: '💎',
         common: '📦',
         uncommon: '🛍️',
         mythic: '🎁',
         legendary: '🗃️',
         superior: '💼',
         pet: '🔖',
         trash: '🗑',
         armor: '🥼',
         sword: '⚔️',
         pickaxe: '⛏️',
         fishingrod: '🎣',
         wood: '🪵',
         rock: '🪨',
         string: '🕸️',
         horse: '🐴',
         cat: '🐱',
         dog: '🐶',
         fox: '🦊',
         petFood: '🍖',
         iron: '⛓️',
         gold: '🪙',
         emerald: '❇️',
         upgrader: '🧰'

      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
      if (!results.length) return ''
      else return emot[results[0][0]]
   }
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
   sukses: '🤗Done, Oke Desu~',
   admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
   botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
   owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
   group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
   private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
   bot: 'Fitur Khusus Pengguna Nomor Bot',
   errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
   wait: '⏳ *Loding*',
   lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
   example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
