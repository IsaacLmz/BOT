/*
   * Create By 𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩ prih
   * Contactame en Wa wa.me/593991398786
   * Follow https://github.com/CarlosTwT
   * Gracias a Hisoka por la base!
   * Este script es completamente *GRATIS* se precavido de los estafadores.
   * Si intentas comercializar este script podrías tener problemas legales!   
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// Lectura de database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Menu
const  { ind } = require(`./language`)
lang = ind // Menu

module.exports = yol = async (yol, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await yol.decodeJid(yol.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	    
        // Grupo
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await yol.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    
       //const verificado
        const replyvid = (teks) => {yol.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `Hola ${pushname}`,"body": global.ownername,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": global.myweb}}}, {quoted: m})}
	    const verificado = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Pedido : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }
	    const sticker = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Sticker by Kitzia`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }    
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': verificado, thumbnail: verificado,sendEphemeral: true}} }
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '00001', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': verificado}} }
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: verificado}} }
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${pushname}`, 'jpegThumbnail': verificado}} }
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: verificado}} }
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': verificado}} }
        const st ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: verificado, surface: 200, message: `「By (𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩)」❤️`, orderTitle: '𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

                //FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": verificado //La imagen
},
"title": "The CLRS+", //da tu nombre 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "Kitzia",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

if (command) {
await yol.sendPresenceUpdate('recording', m.chat)
}

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }

	    	//group target by Carlos\\
const reply = (teks) => {
            yol.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Please Follow ⭐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./fake.jpg`),"sourceUrl": "https://tiktok.com/@kst_mera8"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            yol.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` PRESIONA AQUÍ⭐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./fake.jpg`),"sourceUrl": "https://tiktok.com/@theprivmen"}}}, { quoted: m})
        }
		    
        // Public & Self
        if (!yol.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            yol.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MENSAJE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> DE'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> DOMINIO'), chalk.green(m.isGroup ? pushname : 'PV', m.chat))
        }
	
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "America/Guayaquil"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await yol.setStatus(`${yol.user.name} ✨| By Carlos 💫|Runtime :  ${runtime(process.uptime())} ⭐`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nSe te ha detectado enviando un enlace de grupo, el enlace será revisado, si es de otro grupo serás expulsado !`)
        if (!isBotAdmins) return reply(`Eh el bot no es administrador T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await yol.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Uh, lo siento, no sucedió, porque enviaste el enlace a este grupo.`)
        if (isAdmins) return reply(`Ehh lo siento administrador`)
        if (isCreator) return reply(`Ehh lo siento eres el dueño del bot`)
        yol.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mutear Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Responder comando con media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: yol.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, yol.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        yol.ev.emit('messages.upsert', msg)
        }
	    
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Cuestionario de Matemáticas  🎮\n\nRespuesta correcta 🎉\n\nQuiero jugar de nuevo? Enviar ${prefix}math modo`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Respuesta incorrecta!*')
        }

//TicTacToe
//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/BotMd/visits')
conteocmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('America/Guayaquil').format('DDMMYYYY')}/visits`)
conteoscmds = `${dataa.value}`
}

if (budy.includes("bot pendejo") || (budy.includes("Bot pendejo"))){
reply("Como tú, animal")
}


if(budy.includes("te amo") || budy.includes("bot te amo") || budy.includes("te amo bot") || budy.includes("bot te amoo")) {
bla = fs.readFileSync("./image/teamo1.mp3")
yol.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: fvn })
}


if(budy.includes("no la pienso y disparo") || budy.includes("disparo") || budy.includes("dispara") || budy.includes("disparame")) {
bla = fs.readFileSync("./image/disparo.mp3")
yol.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted: fvn })
}

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|aceptar|si|bueno?|rechazar|No|luego|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rechazar|No|luego|no|ga(k.)?bisa)/i.test(m.text)) {
	    yol.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechaza el pvp, el pvp se cancela`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    yol.sendText(m.chat, `El pvp ha sido enviado al chat.

@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}

Por favor elige en el chat respectivo"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) yol.sendText(roof.p, `Por favor seleccione \n\npiedra🗿\npapel📄\ntijera✂️`, m)
	    if (!roof.pilih2) yol.sendText(roof.p2, `Por favor seleccione \n\npiedra🗿\npapel📄\ntijera✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) yol.sendText(m.chat, `Ambos jugadores no quieren jugar.,\npvp cancelado`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    yol.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} no elijio en el pvp, fin del juego`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tijera/i
	    let b = /piedra/i
	    let k = /papel/i
	    let reg = /^(tijera|piedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih2) yol.sendText(roof.p2, '_El oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih) yol.sendText(roof.p, '_El oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    yol.sendText(roof.asal, `_*Resultados del pvp*_${tie ? '\nEMPATE' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganó \n` : ` Perdió \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganó \n` : ` Perdió \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
no lo etiquetes!
Él está AFK ${reason ? 'Razón ' + reason : 'No contiene una razón'}
Durante ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
dejas de estar afk AFK${user.afkReason ? ' después ' + user.afkReason : ''}
estuviste afk Durante ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Ahora posee afk ${text ? ': ' + text : ''}`)
            }
            break	
            case 'suitpvp': case 'suit': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Completa tu traje anterior`)
	    if (m.mentionedJid[0] === m.sender) return reply(`no puedo jugar conmigo mismo !`)
            if (!m.mentionedJid[0]) return reply(`_a quien quieres desafiar?_\nEtiqueta a la persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply `La persona a la que estás desafiando está jugando con alguien más. :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*PvP*_

@${m.sender.split`@`[0]} desafiante @${m.mentionedJid[0].split`@`[0]} jugar pvp

Por favor @${m.mentionedJid[0].split`@`[0]} escribir aceptar/no`
            this.suit[id] = {
            chat: await yol.sendText(m.chat, caption, fgif, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) yol.sendText(m.chat, `_Tiempo de espera del pvp_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    yol.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    yol.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    yol.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    yol.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    yol.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    yol.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    yol.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'mathpbs': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endGLimit) // respon ketika limit habis
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Todavía hay sesiones sin terminar!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Modo: ${Object.keys(modes).join(' | ')}\nEjemplos de uso: ${prefix}math medio`
                let result = await genMath(text.toLowerCase())
                yol.sendText(m.chat, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\n\nHora: ${(result.waktu / 1000).toFixed(2)} segundo`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responder: " + result.jawaban)
                    reply("Tiempo de espera acabado\nRespuesta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'pareja': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫tu pareja es

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, yol.user.name, floc, {mentions: ments})
            }
            break
            case 'amigos': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `creo que pueden ser muy buenos amigos ekisde🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, yol.user.name, fdoc, {mentions: menst})
            }
            break
            case 'join2': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Introduce el enlace del grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await yol.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await yol.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Ejemplo : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif se ha cambiado con éxito a\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break
case 'take':case 'wm':{
if (!quoted) return reply(`Enviar/Responder imagen/video con subtítulo ${prefix + command}\n\nDuración del sticker video 1-9 segundos☕`)
if (!text) return reply(`Enviar pedidos ${prefix + command} packname|author`)
if (!text.includes('|')) return reply(`Enviar pedidos ${prefix + command} packname|author`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await yol.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Enviar/Responder imagen/video con comando ${prefix + command}\n\nDuración de la etiqueta de video 1-9 segundos☕`)
let media = await quoted.download()
let encmedia = await yol.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else {
reply(`Enviar/Responder imagen/video con subtítulo ${prefix + command}\n\nDuración de la etiqueta de video 1-9 segundos☕`)
}
}
break
	case 'kick': {
        if (!text) throw 'Menciona a alguien, ejemplo: @⁨WhatsApp⁩'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
        if (!text) throw 'menciona u/o coloca el numero de quien deseas agregar'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
        if (!text) throw 'a quien deseas promover'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
        if (!text) throw 'a quien rebajamos :3'
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await yol.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'el texto ?'
                await yol.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'y el texto ?'
                await yol.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                await yol.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                await yol.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': case 'infoall':
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                let tekss = `══✪〘 *👥 Mención All* 〙✪══\n\n➲ *Mensaje : ${q ? q : 'Ninguno'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                yol.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            yol.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fgif })
            }
            break
                case 'alltag': {
            if (!m.isGroup) throw mess.group
            if (!isCreator) throw mess.owner
            yol.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fgif })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Ingrese el texto de la consulta!'
                let anu = await styletext(text)
                let teks = `Estilo de texto de ${text}\n\n`
                for (let i of anu) {
                    teks += ` *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'encuesta': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Todavía hay votos en este chat.!_\n\n*${prefix}deletevoto* - para borrar votos`
            if (!text) throw `Ingrese el motivo del voto, ejemplo: *${prefix + command} @Carlos debería ser admin?*`
            reply(`Comienza la votación!\n\n*${prefix}votopositivo* - por Si\n*${prefix}votonegativo* - por no\n*${prefix}checkvoto* - para comprobar el voto\n*${prefix}deletevoto* - para borrar votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 ENCUESTA 」*

*RAZÓN:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevoto* - para borrar votos`
let buttonsVote = [
  {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'VOTAR SI'}, type: 1},
  {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'VOTAR NO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            yol.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'votopositivo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsUpvote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            yol.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'votonegativo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsDevote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: yol.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            yol.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvoto':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
teks_vote = `*「 ENCUESTA 」*

*Razón:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos


©${yol.user.id}
`
yol.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevoto': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            delete vote[m.chat]
            reply('Eliminar con éxito la sesión de votación en este grupo')
	    }
            break
               case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await yol.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Grupo cerrado exitoso`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await yol.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`grupo abierto exitoso`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'grupo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Modo del grupo?`, yol.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await yol.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Información del grupo abierta con éxito para todos`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await yol.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Cerrado con éxito el Editar información del grupo`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Escoge lo que deseas`, yol.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Anteriormente activo`)
                db.data.chats[m.chat].antilink = true
                reply(`Antienlace activo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Anteriormente inactivo`)
                db.data.chats[m.chat].antilink = false
                reply(`Antienlace inactivo !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Modo de Antilink`, yol.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Anteriormente activo`)
                db.data.chats[m.chat].mute = true
                reply(`${yol.user.name} ha sido silenciado en este grupo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Anteriormente inactivo`)
                db.data.chats[m.chat].mute = false
                reply(`${yol.user.name} ha sido desactivado en este grupo !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, `Mute Bot`, yol.user.name, m)
                }
             }
             break
            case 'linkgrupo': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await yol.groupInviteCode(m.chat)
                yol.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo🌛 : ${groupMetadata.subject}`, fgclink, { detectLink: true })
            }
            break
                     case 'namegp':
		             if (args.length < 1) return reply (`el nombre actual del grupo es: *${groupName}*`)
		             break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Ingrese los parametros de habilitar/deshabilitar'
                if (args[0] === 'habilitar') {
                    await yol.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'deshabilitar') {
                    await yol.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'deletemsg': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'solo a mensajes enviados por mi!'
                yol.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Que texto?\n\nEjemplo : ${prefix + command} hola chicos, estoy de vuelta`
                let getGroups = await yol.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Envie este Broadcast a ${anu.length} Chat grupal, hora de finalización ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Tik Tok',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./image/keyol.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      yol.send5ButImg(i, txt, yol.user.name, fatihgans, btn)
                    }
                reply(`Envío exitoso de difusión a ${anu.length} Grupo(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `donde esta el texto?\n\nEjemplo : ${prefix + command} hola`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Enviar difusión a ${anu.length} Chat\nIn ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Tik Tok',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      fatihgans = fs.readFileSync('./image/keyol.jpg')
                      let txt = `「 BROADCAST BOT 」\n\n${text}`
                      yol.send5ButImg(yoi, txt, `${global.footer} | © 2021`, fatihgans, btn)
		}
		reply('Broadcast enviada')
            }
            break
            case 'infochat': {
                if (!m.quoted) reply('Reply mensaje')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'El mensaje no fue enviado por un bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Hora :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Estado :* ${read ? 'lo leyó' : 'Enviado'}\n\n`
                }
                yol.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'quoted': {
		if (!m.quoted) return reply('responde a un mensaje!!')
		let wokwol = await yol.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('El mensaje al que respondió no contiene una respuesta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LISTA DE CHAT PERSONAL*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nombre :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 yol.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *CHAT DE GRUPOS**\n\nTotal grupos : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await yol.groupMetadata(i)
                     teks += `⬡ *Nombre :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Hecho :* ${moment(metadata.creation * 1000).tz('America/Guayaquil').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Miembros :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 yol.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    yol.sendText(m.chat, 'Lista Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Responder video/imagen con cmd ${prefix + command}`
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await yol.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Máximo 10 segundos!')
                let media = await quoted.download()
                let encmedia = await yol.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Enviar imagen/video con cmd ${prefix + command}\nDuracion Video 1-9 segundos`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder texto con título ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder texto con título ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
case 'simi':{
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
}
break
case 'lirica': case 'lyric': {
if (!text) throw `y el nombre?`
m.reply(mess.wait)
webapi = await fetchJson(`https://kanza-api.herokuapp.com/api/search/lirik?query=${text}&apikey=vm5LT3pPeLlGjwS5FoQV3ADVV`)
let anu = webapi.result
m.reply(anu)
}
break
//by Thunder team
case 'animesearch': { 
reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
    {
     title: `${i.title}\n\n`, 
     rowId: `${prefix}animesearch2 ${i.mal_id}`,
     description: `${i.synopsis}`
    }, 
    ]
     }
     sections.push(list)   
     }
  const sendm =  yol.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: "By Carlos",
       title: "La base de datos está en este botón.",
       buttonText: "Haga clic y vea los resultados de la búsqueda➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animesearch2':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Título:* *${res.data.title}*\n*inglés:* *${res.data.title_english}*\n*japonés:* *${res.data.title_japanese}*\n*Tipo de animé:* *${res.data.type}*\n*Adaptación:* *${res.data.source}*\n*Total episodios:* *${res.data.episodes}*\n*Estado:* *${res.data.status}*\n*En curso:* *${res.data.airing ? 'Sí' : 'No'}*\n*Emitido:* *${res.data.aired.string}*\n*Duración:* *${res.data.duration}*\n*Clasificación:* *${res.data.rating}*\n*Puntaje:* *${res.data.score}*\n*Rango:* *${res.data.rank}*\n*Productor Principal:* *${res.data.producers.name}*\n*Estudio:* *${res.data.studios[0].name}* `
yol.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
  case 'backup':
  if (!isCreator) return reply(mess.owner)
  yol.sendMessage(sender, { document: fs.readFileSync('./database/database.json'), mimetype: 'json', caption: 'Una petición de : Owner', mentions: []}, { quoted: m })
  break
case 'glitch':
case 'tiktokefect':
case 'ttlogo':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/glitchtext?apikey=beta&text=${teks1}&text2=${teks2}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'leonlogo':
case 'logoleon':
case 'leonlg':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/lion-mascot?apikey=0567-17a1-1747&text=${teks1}&text2=${teks2}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'lisatxt':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
	buffer = await getBuffer(`http://brizas-api.herokuapp.com/imgeffect/lisapresentation?apikey=brizaloka&text=${teks1}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'sings':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
text1 = text.split('|')[0] ? text.split('|')[0] : '-'
text2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/arrow-signs?apikey=0567-17a1-1747&text1=${text1}&text2=${text2}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'breakingnew':
case 'breakingnews':
case 'bnews':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} titulo principal|canal|subtítulo`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/breaking-news?apikey=0567-17a1-1747&title1=${teks1}&channel=${teks2}&title2=${teks3}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'retrowb':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} txt1|txt2|txt3`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/retro-wave?apikey=beta&text1=${teks1}&text2=${teks2}&text3=${teks3}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'diploma':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} titulo Universidad|años|nombre|grado|presidente|vicepresidente`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
teks6 = text.split('|')[5] ? text.split('|')[5] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/diploma?apikey=beta&UniversityName=${teks1}&year=${teks2}&Name=${teks3}&Degree=${teks4}&President=${teks5}&VicePresident=${teks6}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'esfrase':{
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} texto1|texto2|texto3|texto4|texto5`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/keep_calm?apikey=beta&line1=${teks1}&line2=${teks2}&line3=${teks3}&line4=${teks4}&line5=${teks5}`)
	yol.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'ttpcustom':{
    reply(mess.wait)
	if (!text) return reply(`Ejemplo : ${prefix + command} color|texto`)
	clr = text.split('|')[0] ? text.split('|')[0] : '-'
	tek = text.split('|')[1] ? text.split('|')[1] : '-'
           await yol.sendMedia(m.chat, `https://hardianto.xyz/api/ttpcustom?text=${tek}&color=${clr}&apikey=hardianto`, m, {asSticker: true})
	}
break
case 'colorfulpubg':{
	if (!text) return reply(`Ex: ${prefix + command} nombre|color\nusa: ${prefix + command} carlos|pink-yellow`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nombre|color\nUso: ${prefix + command} carlos|pink-yellow`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `*El color que ingresaste es incorrecto*\n\n_Aquí hay una lista de los colores correctos, Total_ *${style.length}* _color_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(mess.wait)
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
yol.sendMessage(from, {image:{ url: textpro2}, caption: lang.ok()}, {quoted:m})
}}

	break
            case 'SsWeb': case 'ssweb': case 'Ssweb': case 'ScreenshotWeb': case 'screenshotweb':{
                 if (!text) throw `Ejemplo: *${prefix + command} https://github.com/CarlosTwT*`
                 reply(mess.wait)
                 yol.sendMessage(m.chat, {image: {url: "https://api.akuari.my.id/other/ssweb?link="+text}})
            }
            break
      case 'tonto':
      case 'cerdo':
      case 'idiota':
      case 'gil':
      case 'lesbian':
      case 'puto':
      case 'noob':
      case 'estupendo':
      case 'hachero':
      case 'elegante':
      case 'hermoso':
      case 'pequeño':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `El más *${command}* es @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, footer, m, {mentions: ments})
            }
            break
case 'morir':
              if (!q) return reply(`¡No válido!\n\n¿que nombre quieres saber en que fecha morirá??`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`NOMBRE : ${predea.data.name}\n*muerto a la edad :* ${predea.data.age} Años.\n\n_Date prisa, arrepiéntete, hermano, porque nadie sabe de la muerte.`)
              break
case 'textoinvert': case 'invertirtxt': {
if (args.length < 1) return reply(`Ejemplo:\n${prefix}fliptext MyCrls`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 TEXTO INVERTIDO 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Invertido :*\n${flipe}`)
}
break
case 'traductor': case 'traductores': {
if (!args.join(" ")) return reply("Coloca un texto en cualquier idioma, lo traduciré al español :)")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
reply(`📘traducción : ${Infoo}`)
}
break
case 'cosplay':
teks = `aquí men >\\<`
buffer = `https://api.zacros.my.id/randomimg/cosplay`
yol.sendMessage(from, {image:{url:buffer}, caption:"👀!"}, {quoted:m})
break
	       case 'attp': case 'ttp': {
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await yol.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'carlos', 'Op', st, {asSticker: true})

         }
         break
	       case 'attpgrad': case 'attpgradient': {
	       	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit       
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await yol.sendMedia(m.chat, `https://api.violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${text}`, 'carlos', 'Op', st, {asSticker: true})

         }
         break
	       case 'dado': case 'dados': {
	       	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
           reply(mess.wait)
           await yol.sendMedia(m.chat, `https://api.violetics.pw/api/random/dadu?apikey=beta`, 'carlos', 'Op', st, {asSticker: true})

         }
         break
	       case 'attp1': case 'attp2': case 'attp3': case 'attp4': case 'attp5': case 'attp6': {
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await yol.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${text}`, 'by', 'carlo', st, {asSticker: true})

         }
         break
case 'grupoinfo': case 'groupinfo':
try{
 var pic = await yol.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*INFO GRUPO*\n\n*Nombre :* ${groupName}\n*ID Grupo :* ${m.chat}\n*Creado el :* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Guayaquil').format('DD/MM/YYYY HH:mm:ss')}\n*Creador:* @${groupMetadata.owner.split('@')[0]}\n*Numero de admins :* ${groupAdmins.length}\n*Participantes :* ${participants.length}\n*Descripción :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
yol.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
case 'mode': case 'set': {
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'PRIVADO'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLICO'}, type: 1}
]

const buttonMessage = {
text: "Seleccione uno",
footerText: 'Hola Owner',
buttons: buttons,
headerType: 1
}
                yol.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
            }
            break
	       case 'smeme2': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Enviar/responder imagen/pegatina con el comando ${prefix + command} texto arriba|texto abajo`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await yol.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
case 'emojimix': {
if (!args.join(" ")) return m.reply(`Ejemplo : ${prefix + command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await yol.sendImageAsSticker(sender, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
m.reply('Ve al chat privado del bot para ver los stickers') 
} catch {
m.reply("Extraviado!")
}
}
break
case 'kitzia':{
                respon = `HOLAAAAA`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Como estas',
                                    id: `${prefix}kskskskskssksks`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Que haces?',
                                    id: `${prefix}kukasricas1ee`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Te puedo ayudar?',
                                    id: `${prefix}pasapornsttt`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'pasapornsttt':{
                respon = `eres la persona mas idiota que conozco, como ayudarías`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Solo quería ayudar',
                                    id: `${prefix}soloqriaayudar`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'soloqriaayudar':{
                respon = `mamalo.`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'kukasricas1ee':{
                respon = `XD, soy una inteligencia artificial, no hago nada mas que ayudar\n me entiendes ${pushname}`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Vete al diablo',
                                    id: `${prefix}adioslepidoxdddd`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'kskskskskssksks':{
                respon = `Estoy excelente y tú??`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Usandote xd',
                                    id: `${prefix}kkkdssssirrr`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'kkkdssssirrr':{
                respon = `Era algo obvió 🙄🙄🙄`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Que aguafiestas',
                                    id: `${prefix}vetealdiablo`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'vetealdiablo':{
                respon = `Mej, vete al demonio 🙄🙄🙄🙄`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK BOT',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'MI PAGINA',
                                    url: 'https://linkr.bio/KitziaBotMD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Adios',
                                    id: `${prefix}adioslepidoxddd`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'adioslepidoxdddd':
	await yol.send5ButImg(from, `` + '' + lang.byebye(), `${footer}`,thumb, [{"urlButton": {"displayText": "Script bot","url": `${sc}`}},{"urlButton": {"displayText": "Pagina ofc","url": `${linkbot}`}}] )
	break
            case 'preguntabot':
				if (!q) return reply(`Usar ${command} texto\n\nEjemplo : ${command} soy god?`)
					const apa = ['Si', 'No', 'Talvez', 'Creo que sí']
					const kah = apa[Math.floor(Math.random() * apa.length)]
yol.sendMessage(from, { text: `Pregunta : ${q}\nRespuesta : ${kah}` }, { quoted: m })

					break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                yol.sendMessage(m.chat, reactionMessage)
            }
            break
case 'rctme': {
reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: from, fromMe: false, id: quoted.id }
                    }
                }
                yol.sendMessage(from, reactionMessage)
            }
            break
case 'califica':
 
				if (!q) return reply(`Usar ${command} text\n\nEjemplo : ${command} mi foto`)
					const ra = ['0', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
yol.sendMessage(from, { text: `Calificando: ${q}\nLe pongo un: *${te}%*` }, { quoted: m })

					break
            case 'gay': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `he detectado que...
 @${jodoh.split('@')[0]} es gay🏳️‍🌈`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await yol.sendButtonText(m.chat, buttons, jawab, yol.user.name, m, {mentions: ments})
            }
            break
case 'sitiosx':

      

if (!text) throw ` *Aqui están*😳 
*Usalos con moderación xd!*

1- www.xvideos.com
2- www.xhamster.com
3- www.xnxx.com
4- www.pornhub.com
5- www.redtube.com
6- www.youporn.com
7- www.snapdo.com
8- www.livejasmin.com
9- www.youjizz.com
10- www.tube8.com
11- www.dmm.co.jp
12- www.hardsextube.com
13- www.e-hentai.org
14- www.beeg.com `

      break
case 'miname':

if (!text) throw `eres ${pushname} `

      break
case 'instagram': {
const templateMessage = {
text: '*Mi instagram abajo👀*',footer: `sigueme🧞`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Instagram', 
url: `https://instagram.com/c4rl0s_9e`
}
},
],
}
const sendm = yol.sendMessage(from, templateMessage)
}
break
case 'serbot':

if (!text) throw `😂 NO GRACIAS BRO`

      break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Ejemplo : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Ejemplo : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await yol.sendImageAsSticker(m.chat, res.url, st, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `responde un sticker con cmd *${prefix + command}*`
                reply(mess.wait)
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    yol.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply sticker en movimiento'
                if (!/webp/.test(mime)) throw `responde un stickergif con el cmd *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yol.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envíe/responda el video/audio que desea usar como audio con el cmd ${prefix + command}`
            if (!quoted) throw `Envíe/responda el video/audio que desea usar como audio con el comando ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yol.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            if (!quoted) throw `Enviar/responder video/audio que desea convertir a MP3 con el comando ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            yol.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${yol.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responder video/audio que desea ser VN con el comando ${prefix + command}`
            if (!quoted) throw `Responder video/audio que desea ser VN con el comando ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            yol.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `responde sticker con el comando *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await yol.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
	    if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
	    if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await yol.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    yol.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
        case 'google': {
                if (!text) throw `Ejemplo : ${prefix + command} f`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Titulo* : ${g.title}\n`
                teks += ` *Descripcion* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'googleimg': {
        if (!text) throw `Ejemplo : ${prefix + command} cocacola`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `googleimg ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GOOGLE IMG SEARCH 」-------*
🤠 *Consulta* : ${text}
🔗 *Url* : ${images}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
case 'play2': case 'ytplay2': {
if (!args.join(" ")) return m.reply(`Envia el nombre de la música, ejemplo : ${prefix + command} Fatalidad Julio Jaramillo`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
listSerch = []
teskd = `\nResultados de *${args.join(" ")}* \n\n`
for (let i of search.all) {
listSerch.push({
title: i.title, rowId: `ytmp3 ${i.url}`, descripción: `Autor : ${i.author.name} / ${i.timestamp}`})
}
const sections = [
{
title: "Total de busquedas: " + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: "© By Carlos - X - ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩",
title: "     「 Youtube Downloader 」",
buttonText: "Click aquí",
sections
}
yol.sendMessage(from, listMessage, {quoted:m})
}
break
	    case 'ytsearch': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre de video`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ Num : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titulo : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duracion : ${i.timestamp}\n⭔ subido hace : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                yol.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
	    case 'play': case 'ytplay': {
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Ejemplo : ${prefix + command} Fatalidad`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
➣ Titulo : ${anu.title}
➣ Extensión : Search
➣ ID : ${anu.videoId}
➣ Duración : ${anu.timestamp}
➣ Viewers : ${anu.views}
➣ Fecha : ${anu.ago}
➣ Autor : ${anu.author.name}
➣ Canal : ${anu.author.url}
➣ Descripción : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   yol.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Estas escuchando: ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Url Musica',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵 320kbps',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📹 360p',
                                    id: `ytmp4 ${anu.url} 360p`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'Mas resultados',
                                    id: `play2 ${anu.url}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('Archivo por encima del límite '+util.format(media))
                yol.sendImage(m.chat, media.thumb, ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolucion : ${args[1] || '128kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('Archivo por encima del límite '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolucion : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'play3': case 'ytplay3': {
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Ejemplo : ${prefix + command} rebeldía`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
🔮 TITULO : ${anu.title}
🔮 EXT : Search
🔮 ID : ${anu.videoId}
🔮 DURACION : ${anu.timestamp}
🔮 VIEWS : ${anu.views}
🔮 HACÉ : ${anu.ago}
🔮 AUTOR : ${anu.author.name}
🔮 CANAL : ${anu.author.url}
🔮 DESCRIPCIÓN : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   yol.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `Reproduciendo: ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YOUTUBE',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MUSICA',
                                    id: `mp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIDEO',
                                    id: `mp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'mp3': case 'ytaudio2': {
	    	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { yta } = require('./lib/y2mate')
                if (!text) throw `ejemplo : ${prefix + command} https://youtu.be/9lfFspVTRtA 320kbps`
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('El tamaño del audio es demasiado grande '+util.format(media))
                yol.sendImage(m.chat, media.thumb, `🟡 Titulo : ${media.title}\n🎀 Tamaño : ${media.filesizeF}\n📡 Url : ${isUrl(text)}\n📜 Ext : MP3\n📑 Resolución : ${args[1] || '320kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'mp4': case 'ytvideo2': {
            	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtu.be/9lfFspVTRtA 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('El tamaño del video es demasiado grande '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 Titulo : ${media.title}\n👜 Tamaño : ${media.filesizeF}\n🌼 Url : ${isUrl(text)}\n🌍 Ext : MP3\n🔮 Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} 1  *para usar esto es necesario mencionar la música que un bot te mande, así poder cambiarla*`
                if (!m.quoted) return reply('Responde a mi mensaje')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de los bots`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('Archivo por encima del límite '+util.format(media))
                yol.sendImage(m.chat, media.thumb, ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolucion : ${args[1] || '128kbps'}`, m)
                yol.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply mensaje')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de los bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('Archivo por encima del límite '+util.format(media))
                yol.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Titulo : ${media.title}\n tamaño : ${media.filesizeF}\n Url : ${urls[text - 1]}\n Ext : MP3\n Resolucion: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                let anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                yol.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
            }
            break
case 'anime': case 'husbu': case 'nekos': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('riykey', '/api/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break 
          case 'loli': case 'Loli': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `loli`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` Random Loli xd`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pack':{
            reply(mess.wait)
            let anu = await fetchJson('https://raw.githubusercontent.com/darlyn1234/recursos/main/proyectosweb/hotgirl-darlyn.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            yol.sendMessage(m.chat, { image: { url: random.hot }, caption: `aqui ta` }, { quoted: m })
        }
        break

          case 'ero': case 'eronsfw': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `ero`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` deje de pedirme esto 😳`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
				case 'waifu2': case 'loli2':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					yol.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						yol.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'nekost':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
						yol.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'neko': case 'waifu':case 'trap':case 'blowjob':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/nsfw/${command}`)
					.then(({data}) => {
						yol.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
            case 'avatar': {
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('bri', '/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break
            case 'smug2': {
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: 'https://hardianto.xyz/api/anime/random?sfw=smug&apikey=hardianto' }, caption: 'para que esta imagen se torne en movimiento conviertela a sticker😼\nRandom ' + command }, { quoted: m })
            }
            break
            case 'imggif': {
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: 'https://hardianto.xyz/api/anime/random?sfw=nekoGif&apikey=hardianto' }, caption: 'para que esta imagen se torne en movimiento conviertela a sticker😼\nRandom ' + command }, { quoted: m })
            }
            break
	    case 'imgpareja': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                yol.sendMessage(m.chat, { image: { url: random.male }, caption: `pareja hombre` }, { quoted: m })
                yol.sendMessage(m.chat, { image: { url: random.female }, caption: `pareja mujer` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'nekooo': case 'nekoo': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `nekoo`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=neko&apikey=hardianto' },
                    caption: ` Random neko`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'foxgirl': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `foxgirl`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=foxGirl&apikey=hardianto' },
                    caption: ` Random foxgirl`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gato': case 'cat': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `gato`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=meow&apikey=hardianto' },
                    caption: ` Random gato`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await yol.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'animestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await yol.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'wallpaper2': case 'wallpaper-anime': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `wallpaper2`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=wallpaper&apikey=hardianto' },
                    caption: ` Random wpp`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wppanime': case 'wallpaper3': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `wallpaper3`, buttonText: {displayText: 'Next wallpaper'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://brizas-api.herokuapp.com/random/wallpaper?apikey=brizaloka' },
                    caption: ` Aquí lo tienes`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'smeme': case 'stickermeme1': case 'stickmeme1': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
if (text.includes('|')) return reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
if (!/image/.test(mime)) return reply(`Enviar/responder foto con título ${prefix + command} *texto*`)
reply(mess.wait)
mee = await yol.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await yol.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
             case 'sendbuffer':{
try{
 await reply('Espera un momento...')
sendFile(m.chat, isUrl(q)[0], mess.listo)
} catch (err){
 reply(err)
console.log(err)
}
}
break
            case 'baka': case 'bakaa': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `baka`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=baka&apikey=hardianto' },
                    caption: ` Random baka`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'milf': {
                reply(mess.wait)
            let buttons = [
                    {buttonId: `milf`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/randomimg/milf' },
                    caption: ` Imagen random de milf`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wallpaper } = require('./lib/scraper')
                let anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` Titulo : ${result.title}\n Categoria : ${result.type}\n Detalles : ${result.source}\n Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Ingrese el título de la consulta'
		let { wikimedia } = require('./lib/scraper')
                let anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Titulo : ${result.title}\n Fuente : ${result.source}\n Media Url : ${result.image}`,
                    footer: yol.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3d-effect': case '1917-style': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dluxury': case '3dlove': case '3dgolden': case '3dgradient': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3dscifi': case '3dtext-effect': case '3dunderwater': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'azzenka-league-of-kings':  case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effect':  case 'circuit': case 'dark-gold-metal': case 'color-fireworks': case 'cool-metal': case 'decorated-cookie': case 'deluxe-gold': case 'dinamo': case 'deluxe-silver': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'firework':  case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-effect2': case 'galaxy-effect': case 'galaxy-angel': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-fox': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'graffiti-color': case 'graffiti-text3': case 'graffiti-text5': case 'graffiti-text8': case 'graffiti-text4': case 'heart-birthday': case 'hanzo-overwatch': case 'greenhorror': case 'halloween-fire': case 'green-brush': case 'hero3-crossfire': case 'heart-cups': case 'holographic': case 'light-text':  case 'lend-text': case 'ledtext': case 'layeredtext': case 'lol-caitlyn': case 'lol-ahri': case 'logo-galaxy': case 'lol-fizz': case 'lol-ezreal-and-shen': case 'lol-fiora': case 'lol-draven': case 'lol-jinx': case 'lol-kalista': case 'lol-khazix': case 'lol-kogmaw': case 'lol-leesin': case 'lol-lux': case 'lol-master-yi': case 'lol-miss-fortune': case 'lol-nidalee': case 'lol-quinn': case 'lol-sona': case 'lol-riven': case 'lol-talon': case 'lol-thresh': case 'lol-vayne': case 'machines-effect': case 'lol-yasuo': case 'lol-zed': case 'lol-wukong': case 'magic-text': case 'mei-overwatch': case 'matrix-text': case 'magmatext': case 'metal-lion-2': case 'metal-headshot': case 'metal-avenger': case 'metal-real-madrid': case 'metal-star': case 'metal-superman': case 'metal-text-effect': case 'metallic-letter': case 'metalic': case 'metal-wolf-2': case 'mganga-league-of-kings': case 'miniontext': case 'modern-gold-3': case 'modern-gold-4': case 'modern-gold-5-pro': case 'modern-gold-green': case 'modern-gold-purple': case 'modern-gold-red': case 'modern-gold-sliver': case 'modern-goldred': case 'neon': case 'neon-2': case 'neon-brightblue': case 'neon-effects': case 'neon-light-galaxy': case 'neon-satin': case 'neondevil': case 'neonlight': case 'neontext-light': case 'paper-cut': case 'paperart': case 'rainbow-effect': case 'reaper-overwatch': case 'red-birthdaycake': case 'redhot-metal': case 'resht-league-of-kings': case 'science': case 'sfg-crossfire': case 'sketch': case 'wetglass': case 'watercolor': case 'water-effect': case 'water-3d': case 'violet-league-of-kings': case 'snowtext': case 'soldier-overwatch': case 'sunlight-shadow': case 'transformer': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'uso?\n ${command} texto'
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('vio', '/api/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
case '100dollars':
                reply(mess.wait)
		let { TelegraPh } = require('./lib/uploader')
                let media = await yol.downloadAndSaveMediaMessage(quoted)                
                    let anu = await TelegraPh(media)  
                    resu = `https://api.violetics.pw/api/photomaker/100_dollars?apikey=7f1b-a7e2-a6ff&image=${anu}`              
                yol.sendMessage(m.chat, { image: { url: resu }, caption: `Maker ${command}` }, { quoted: m })

break
            case 'anonymous-neon': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('vio', '/api/ephoto360/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
            case 'einstein': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                reply(mess.wait)
                yol.sendMessage(m.chat, { image: { url: api('vio', '/api/photofunia/' + command, { text: text }, 'apikey') }, caption: `photofunia ${command}` }, { quoted: m})
	    }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'y el link?!'
                reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► con marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Descargando desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 5
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Ingrese el enlace de la consulta!'
                reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Descargado desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 5
                }
                yol.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Ingrese el enlace de la consulta!'
                reply(mess.wait)
                let anu = await fetchJson(api('riykey', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► con marca de agua'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Descargar desde ${text}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await yol.sendMessage(m.chat, buttonMessage, { quoted: m })
                yol.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
        case 'ringtone': {
		if (!text) throw `Ejemplo : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		yol.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
                    case 'bug': case 'report': {
                    	if(!text) throw `Introduzca el ejemplo de error\n\n${command} : Menu Erroneo `
                    	yol.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
reply(`Reportado con éxito al propietario\n\nAsegúrese de que el error sea válido, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break
                    case 'solicitar': case 'solicit': {
                    	if(!text) throw `Introduzca su solicitud\n\n${command} : deseó.... `
                    	yol.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Solicitud de:* wa.me/${m.sender.split("@")[0]}
mensaje de Solicitud: ${text}` })
reply(`Enviado con éxito al propietario\n\nAsegúrese de que haya escrito bien su solicitud, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break
                    case 'joinr': case 'join': {
                    	if(!text) throw `Introduzca el link del grupo\n\nEjemplo\n${command} :https://chat.whatsapp.com/ `
                    	yol.sendMessage(`593991398786@s.whatsapp.net`, {text: `*se ha solicitado entrar a un grupo de wpp\nRemitente:* wa.me/${m.sender.split("@")[0]}
Mensaje de ingreso: ${text}` })
reply(`Link enviado exitosamente al owner\n\nAsegurate de que tu grupo cumpla con las reglas establecidas\nPuedes leer las reglas usando ${prefix}entrargp\nDe lo contrario será rechazado !`)
                    }
                    break
case 'hello':
   reply('¡Hola Oye! usa .help para ver mi lista de comandos')
 
    break
        case 'chatid':
        m.reply(`${m.chat}`)
        break 
case 'teste': case 'test': case 'testing': case 'kitziatest': case 'tested':{
                respon = `_*🇪🇦 : Test realizado con exito *_.
_*🇬🇧 : Test carried out successfully *_.
_*🇮🇩 : Tes berhasil dilakukan *_.
_*🇯🇵 : テストは正常に実行されました *_.

*[   INFORMACIÓN   ]*
_⫹⫺ Tu nombre : ${pushname}_
_⫹⫺ Librería : Baileys-Md_
_⫹⫺ Version : 5.0.0_
_⫹⫺ Lenguaje : Javascript_
_⫹⫺ Autor : ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸_
_⫹⫺ Datos del Servidor :  ${moment.tz('America/Guayaquil').format('DD/MM/YY')}_
_⫹⫺ Tiempo del Servidor : ${moment.tz('America/Guayaquil').format('HH:mm:ss')}_`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./image/keyol.jpg')},
                            hydratedFooterText: `KITZIA BOT INC`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'CANAL YOUTUBE',
                                    url: 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'REGLAS',
                                    id: `${prefix}rules`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'listmenu': case 'lismenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hola ${pushname}\nSon las: ${moment.tz('America/Guayaquil').format('HH:mm:ss')}_`,
                    description: `╭─⧉
│•INFO BOT•
│• Prefijo : ( MULTIPREFIX )
│• Mi nombre : ${botname}
│• Nombre Creador : ${ownername}
│• Tiempo activo : ${runtime(process.uptime())}
│• Libreria : Baileys-Md@4.0.0
│• Script by ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩
│https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ
╰───────────────┈ ⧉`,
                    buttonText: "CLICK AQUÍ",
                    footerText: "BOT MULTI-DEVICE 2022",
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "      ╭───────╯1╰───────╮",
								"rows": [
									{
										"title": "MENU GRUPO",
										"description": "mostrar funciones de grupos",
										"rowId": `${prefix}groupmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯2╰───────╮",
								"rows": [
									{
										"title": "ALLMENU CMD",
										"description": "mostrar el menú del bot completo!",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯3╰───────╮",
								"rows": [
									{
										"title": "MENU DESCARGAS",
										"description": "mostrar funciones de descarga",
										"rowId": `${prefix}downloadmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯4╰───────╮",
								"rows": [
									{
										"title": "SEARCH MENU",
										"description": "menu de funciones para buscar en la web!",
										"rowId": `${prefix}searchmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯5╰───────╮",
								"rows": [
									{
											"title": "RANDOM MENU",
										"description": "menu de imagenes randoms",
										"rowId": `${prefix}randommenu`
									}
								]
							},
							{
								"title": "      ╭───────╯6╰───────╮",
								"rows": [
									{
											"title": "MENU VARIADO",
										"description": "menu de funciones variadas",
										"rowId": `${prefix}funmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯7╰───────╮",
								"rows": [
									{
											"title": "MENU DE CONVERSIÓN",
										"description": "mostrar menu para convertir stickers",
										"rowId": `${prefix}convertmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯8╰───────╮",
								"rows": [
									{
										"title": "MENU LOGOS",
										"description": "menu de logos Textpro",
										"rowId": `${prefix}logomenu`
									}
								]
							},
							{
								"title": "      ╭───────╯9╰───────╮",
								"rows": [
									{
											"title": "PREMIUN",
										"description": "conseguir premiun",
										"rowId": `${prefix}donar`
									}
								]
							},
							{
								"title": "      ╭───────╯10╰───────╮",
								"rows": [
									{
											"title": "MODIFICADORES DE AUDIO",
										"description": "mostrar funciones para modificar audios",
										"rowId": `${prefix}voicemenu`
										}
								]
							},
							{
								"title": "      ╭───────╯11╰───────╮",
								"rows": [
									{
										"title": "MAIN MENU!",
										"description": "menú principal para uso del owner",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "      ╭───────╯12╰───────╮",
								"rows": [
									{
										"title": "TESTED",
										"description": "test sobre mí",
										"rowId": `${prefix}test`
									}
								]
							},
							{
								"title": "      ╭───────╯13╰───────╮",
								"rows": [
									{
										"title": "MENU OWNER",
										"description": "menú del creador",
										"rowId": `${prefix}ownermenu`
									}
								]
							},
							{
								"title": "      ╭───────╯14╰───────╮",
								"rows": [
									{
										"title": "ENTRAR A GRUPO",
										"description": "reglas para meter el bot a grupos",
										"rowId": `${prefix}entrargp`
									}
								]
							},
							{															
								"title": "      ╭───────╯15╰───────╮",
								"rows": [
									{
										"title": "Creditos Bots",
										"description": "Agradecimiento general a creadores !!",
										"rowId": `${prefix}creditos`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            yol.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
		   case 'bass': case 'blown': case 'deep': case 'saturado': case 'fast': case 'fat': case 'nightcore': case 'reversa': case 'robot': case 'lento': case 'suave': case 'ardilla':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/saturado/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reversa/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await yol.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                yol.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda al audio que desea cambiar con el título *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'responde al mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `para que comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para cambiar este comando de etiqueta'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`listo!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `sin cmds`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tienes permiso para borrar este comando de pegatina'              
                delete global.db.data.sticker[hash]
                reply(`listo!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista cmd*
Info: *bold* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                yol.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash no encontrado en la base de datos'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('listo!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Mensaje de respuesta que desea guardar en la base de datos'
                if (!text) throw `Ejemplo : ${prefix + command} nombre del archivo`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' ha sido registrado en la lista de mensajes`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}

Ver lista de mensajes con ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre del archivo\n\nVer lista de mensajes con ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no registrado en la lista de mensajes`
                yol.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LISTA DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' no aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' de la lista de mensajes`)
            }
	    break
            case 'public': {
                if (!isCreator) throw mess.owner
                yol.public = true
                reply('Cambio exitoso al uso público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                yol.public = false
                reply('Cambio exitoso al autouso')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `                
*Host name* : ${os.hostname()}
*Plataforma* : ${os.platform()}

Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\ntiempo activo : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria usada_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usado_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
case 'runtime': {
const templateMessage = {
text: '*Tiempo de actividad👀*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Tik Tok', 
url: `${tiktok}`
}
},
],
}
const sendm = yol.sendMessage(from, templateMessage)
}
break
case 'latencia': {
let timestamp = speed()
let latensi = speed() - timestamp
const templateMessage = {
text: '*Latencia 🧞*',footer: `${latensi.toFixed(4)} segundos`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Sigueme!', 
url: `${tiktok}`
}
},
],
}
const sendm = yol.sendMessage(from, templateMessage)
}
break
            case 'owner': case 'creator': {
                yol.sendContact(m.chat, global.owner, fkontak)
const templateMessage = {
text: 'Mi señor, mi dueño',footer: `© ${ownername}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Tik Tok', 
url: `${tiktok}`
}
},
],
}
const sendm = yol.sendMessage(from, templateMessage)
            }
            break
case 'myperfil':
  global.pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
  try {
    pp = await yol.profilePictureUrl(m.chat, 'image')
  } catch (e) {

  }
  numv = await fetchJson(`http://apilayer.net/api/validate?access_key=Mg9WNg1YqnTmTrhi46jFtpeUkxbZQZAS&number=${m.sender.split`@`[0]}&country_code=&format=1`)
uwu = `╭───ꕥ *PERFIL* ꕥ───✾
│•> Nombre: ${pushname}
│•> Número: ${m.sender.split`@`[0]}
│•> Link: wa.me/${m.sender.split`@`[0]}
│•> Pais: ${numv.country_name}
│•> Codigo: ${numv.country_code}
│•> Carrier: ${numv.carrier}
│•> Linea: ${numv.line_type}
╰─────────────────────`
                yol.sendMessage(m.chat, { image: { url: pp },  caption: uwu }, { quoted: m })
break
case 'menu':{
                        timestampe = speed();
                     latensie = speed() - timestampe
                        let buttons = [
                        {buttonId: `allmenu`, buttonText: {displayText: 'Menu principal'}, type: 1}
                        ]
                        let buttonMessage = {
                        image: {url: `https://telegra.ph/file/fc849fc951e0dfd59a21d.jpg` },
                        caption: `Hola ${pushname}`,
                        footer: `┌─❖
│  「 ${pushname} 」
│┬❖ wa.me/${m.sender.split("@")[0]}
┌┤✑ 「 BOT INFO 」
│└───────────────┈ ⳹
│✙ 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│✙ 𝗢𝘄??𝗲𝗿 𝗡𝗮𝗺𝗲 : 𓈃ּ ī.am/𝙲𝚁𝙻𝚂ꪶ͢sєrꫂ⁩
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : +593 99 139 8786
└┬──────────────┈ ⳹
│✑ Seleccione abajo para ver el menú principal
└───────────────┈ ⳹`,
                        buttons: buttons,
                        headerType: 4,
                        contextInfo:{externalAdReply:{
                        title:"ī.am/𝙲𝚁𝙻𝚂ꪶ͢sєrꫂ⁩",
                        body:"© Crls |GitHub: CarlosTwT",
                        thumbnail: thumb,
                        mediaType:2,
                        mediaUrl: "https://youtu.be/pLQEdhCoBE4",
                        sourceUrl: "https://youtu.be/pLQEdhCoBE4"
                        }}
                        }
                        yol.sendMessage(m.chat, buttonMessage, { quoted: fgif })
                        }
                        break
//by vynns
case 'allmenu':
menu = ` ╭─⬣「 _*INFO BOT*_ 」⬣\n│ *𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳* : ${conteocmd} \n│ *𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺* : ${conteoscmds} \n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣\n╭─❒ 「 Administración 」
» ${prefix}linkgrupo 
» ${prefix}grupoinfo
» ${prefix}bug [reporte de bugs]
» ${prefix}report [reportar bug]
» ${prefix}ephemeral [opcion]
» ${prefix}setppgc [imagen]
» ${prefix}setname [text]
» ${prefix}setdesc [text]
» ${prefix}grupo [opcion]
» ${prefix}editinfo [opcion]
» ${prefix}add @user
» ${prefix}kick @user
» ${prefix}hidetag [text]
» ${prefix}tagall [text]
» ${prefix}antilink [on/off]
» ${prefix}mute [on/off]
» ${prefix}promote @user
» ${prefix}demote @user
» ${prefix}encuesta [text]
» ${prefix}votopositivo
» ${prefix}votonegativo
» ${prefix}checkvoto
» ${prefix}deletevoto

──────────────

╭─❒ 「 Descargas 」
» ${prefix}tiktoknowm [url]
» ${prefix}mp3 [url]
» ${prefix}mp4 [url]
» ${prefix}tiktokwm [url]
» ${prefix}tiktokmp3 [url]
» ${prefix}ytmp3 [url]
» ${prefix}ytmp4 [url]

──────────────

╭─❒ 「 Busquedas 」
» ${prefix}play [consulta]
» ${prefix}ssweb [link]
» ${prefix}ytsearch [titulos de videos]
» ${prefix}play2 [consulta]
» ${prefix}yts [consulta]
» ${prefix}google [consulta]
» ${prefix}googleimg [consulta]
» ${prefix}pinterest [consulta]
» ${prefix}wallpaper [consulta]
» ${prefix}wikimedia [consulta]
» ${prefix}ytsearch [consulta]
» ${prefix}ringtone [consulta]

──────────────

╭─❒ 「 Randoms 」
» ${prefix}coffe
» ${prefix}imgpareja
» ${prefix}avatar
» ${prefix}nekoo
» ${prefix}nekost
» ${prefix}waifu (nsfw)
» ${prefix}trap (nsfw)
» ${prefix}blowjob(nsfw)
» ${prefix}neko (nsfw)
» ${prefix}loli
» ${prefix}smug
» ${prefix}baka
» ${prefix}cat
» ${prefix}foxgirl
» ${prefix}imggif
» ${prefix}cry
» ${prefix}kill
» ${prefix}hug
» ${prefix}pat
» ${prefix}lick
» ${prefix}kiss
» ${prefix}bite
» ${prefix}yeet
» ${prefix}bully
» ${prefix}bonk
» ${prefix}wink
» ${prefix}poke
» ${prefix}nom
» ${prefix}slap
» ${prefix}smile
» ${prefix}wave
» ${prefix}awoo
» ${prefix}blush
» ${prefix}smug2
» ${prefix}glomp
» ${prefix}happy
» ${prefix}dance
» ${prefix}cringe
» ${prefix}cuddle
» ${prefix}highfive
» ${prefix}shinobu
» ${prefix}megumin
» ${prefix}handhold

──────────────

╭─❒ 「 Maker 」
» ${prefix}3d-effect
» ${prefix}retrowb
» ${prefix}anonymous-neon
» ${prefix}einstein
» ${prefix}diploma
» ${prefix}esfrase
» ${prefix}sings
» ${prefix}leonlogo
» ${prefix}glitch
» ${prefix}1917-style
» ${prefix}3d-rubystone
» ${prefix}3d-text-sub-zombie
» ${prefix}3dengraved
» ${prefix}3dluxury
» ${prefix}3dlove
» ${prefix}3dgolden
» ${prefix}3dscifi
» ${prefix}3dtext-effect
» ${prefix}3dunderwater
» ${prefix}3dwaterpipe
» ${prefix}alice-league-of-kings
» ${prefix}angel-wing-galaxy
» ${prefix}anubis
» ${prefix}arch-crossfire
» ${prefix}art-shader
» ${prefix}assassins-creed
» ${prefix} azzenka-league-of-kings
» ${prefix}birthday-cards
» ${prefix}birthday-greeting
» ${prefix}birthday-roses
» ${prefix}black-metal
» ${prefix}blood-frosted
» ${prefix}blood-text
» ${prefix}blue-effect
» ${prefix}blue-glitter
» ${prefix}brickwall
» ${prefix}brokentext
» ${prefix}bubble-effect
» ${prefix}bulb-effect
» ${prefix}circuit 
» ${prefix}dark-gold-metal
» ${prefix}color-fireworks
» ${prefix}cool-metal
» ${prefix}decorated-cookie
» ${prefix}deluxe-gold
» ${prefix}dinamo
» ${prefix}deluxe-silver
» ${prefix}double-exposure
» ${prefix}dragon-fire
» ${prefix}eroded-metal
» ${prefix}firework
» ${prefix}fox-crossfire
» ${prefix}fun-certify1
» ${prefix}fun-certify2
» ${prefix}futuristic
» ${prefix}galaxy-effect2
» ${prefix}galaxy-effect
» ${prefix}galaxy-angel
» ${prefix}galaxy-text
» ${prefix}galaxy-text-3
» ${prefix}gankk-league-of-kings
» ${prefix}genji-overwatch
» ${prefix}glossy
» ${prefix}glossy-bluemetal
» ${prefix}glossy-carbon
» ${prefix}glossy-chrome
» ${prefix}gold-avenger
» ${prefix}gold-barcar
» ${prefix}gold-batman
» ${prefix}gold-fox
» ${prefix}gold-effect
» ${prefix}gold-bird2
» ${prefix}gold-eagle
» ${prefix}gold-glitter
» ${prefix}gold-lion
» ${prefix}gold-lion2
» ${prefix}gold-star
» ${prefix}gold-tiger
» ${prefix}golden-letter
» ${prefix}gr-crossfire
» ${prefix}graffiti-color
» ${prefix}graffiti-text3
» ${prefix}graffiti-text4
» ${prefix}graffiti-text5
» ${prefix}graffiti-text8
» ${prefix}heart-birthday
» ${prefix}hanzo-overwatch
» ${prefix}greenhorror
» ${prefix}halloween-fire
» ${prefix}heart-cups
» ${prefix}green-brush
» ${prefix}hero3-crossfire
» ${prefix}holographic
» ${prefix}light-text
» ${prefix}lend-text
» ${prefix}ledtext
» ${prefix}lol-ahri
» ${prefix}logo-galaxy
» ${prefix}lol-fizz
» ${prefix}lol-ezreal-and-shen
» ${prefix}lol-fiora
» ${prefix}lol-draven
» ${prefix}lol-jinx
» ${prefix}lol-kalista
» ${prefix}lol-khazix
» ${prefix}lol-kogmaw
» ${prefix}lol-leesin
» ${prefix}lol-lux
» ${prefix}lol-master-yi
» ${prefix}lol-miss-fortune
» ${prefix}lol-nidalee
» ${prefix}lol-quinn
» ${prefix}lol-sona
» ${prefix}lol-riven
» ${prefix}lol-talon
» ${prefix}lol-thresh
» ${prefix}lol-vayne
» ${prefix}machines-effect
» ${prefix}lol-yasuo
» ${prefix}lol-zed
» ${prefix}lol-wukong
» ${prefix}magic-text
» ${prefix}mei-overwatch
» ${prefix}matrix-text
» ${prefix}magmatext
» ${prefix}metal-lion-2
» ${prefix}metal-headshot
» ${prefix}metal-avenger
» ${prefix}metal-realadrid
» ${prefix}metal-star
» ${prefix}metal-superman
» ${prefix}metal-text-effect
» ${prefix}metallic-letter
» ${prefix}metalic
» ${prefix}metal-wolf-2
» ${prefix}mganga-league-of-kings
» ${prefix}miniontext
» ${prefix}modern-gold-3
» ${prefix}modern-gold-4
» ${prefix}modern-gold-5-pro
» ${prefix}modern-gold-green
» ${prefix}modern-gold-purple
» ${prefix}modern-gold-red
» ${prefix}modern-gold-sliver
» ${prefix}modern-goldred
» ${prefix}neon
» ${prefix}neon-2
» ${prefix}neon-brightblue
» ${prefix}neon-effects
» ${prefix}neon-light-galaxy
» ${prefix}neon-satin
» ${prefix}neondevil
» ${prefix}neonlight
» ${prefix}neontext-light
» ${prefix}paper-cut
» ${prefix}paperart
» ${prefix}rainbow-effect
» ${prefix}reaper-overwatch
» ${prefix}red-birthdaycake
» ${prefix}redhot-metal
» ${prefix}resht-league-of-kings
» ${prefix}science
» ${prefix}sfg-crossfire
» ${prefix}sketch

──────────────

╭─❒ 「 Juegos 」
» ${prefix}amigos
» ${prefix}gay
» ${prefix}textoinvert [texto]
» ${prefix}convertid [traducir indonesia]
» ${prefix}sitiosx
» ${prefix}instagram
» ${prefix}pareja
» ${prefix}puto
» ${prefix}lesbian
» ${prefix}gil
» ${prefix}idiota
» ${prefix}cerdo
» ${prefix}hermoso
» ${prefix}elegante
» ${prefix}hachero
» ${prefix}estupendo
» ${prefix}noob
» ${prefix}pequeño
» ${prefix}sexy
» ${prefix}hot
» ${prefix}math [modo]
» ${prefix}suitpvp [@tag]

──────────────

╭─❒ 「 Conversiones 」
» ${prefix}toimage
» ${prefix}take
» ${prefix}attp
» ${prefix}attp1
» ${prefix}attp2
» ${prefix}attp3
» ${prefix}attp4
» ${prefix}attp5
» ${prefix}attp6
» ${prefix}ttp
» ${prefix}ttpcustom color|texto
» ${prefix}removebg
» ${prefix}smeme2 [texto arriba|texto abajo]
» ${prefix}smeme
» ${prefix}sticker
» ${prefix}emojimix 😝+😸
» ${prefix}emojimix2 🙄
» ${prefix}tovideo
» ${prefix}togif (stickerGif)
» ${prefix}tourl (imagen)
» ${prefix}tovn (video)
» ${prefix}tomp3 (video)
» ${prefix}toaudio (video)
» ${prefix}ebinary
» ${prefix}dbinary
» ${prefix}styletext

──────────────

╭─❒ 「 DataBase 」
» ${prefix}solicitar
» ${prefix}ping
» ${prefix}test
» ${prefix}owner
» ${prefix}Menu
» ${prefix}delete
» ${prefix}infochat
» ${prefix}quoted
» ${prefix}listpc
» ${prefix}listgc
» ${prefix}listonline
» ${prefix}setcmd
» ${prefix}listcmd
» ${prefix}delcmd
» ${prefix}lockcmd
» ${prefix}addmsg
» ${prefix}listmsg
» ${prefix}getmsg
» ${prefix}delmsg

──────────────

╭─❒ 「 Alteradores 」
» ${prefix}bass
» ${prefix}blown
» ${prefix}deep
» ${prefix}saturado
» ${prefix}fast
» ${prefix}fat
» ${prefix}nightcore
» ${prefix}reversa
» ${prefix}lento
» ${prefix}robot
» ${prefix}suave
» ${prefix}ardilla

──────────────

╭─❒ 「 Owner 」
» ${prefix}mode
» ${prefix}react [emoji]
» ${prefix}join2 [link]
» ${prefix}chat [opcion]
» ${prefix}leave
» ${prefix}creditos
» ${prefix}block @user
» ${prefix}unblock @user
» ${prefix}bcgroup [text]
» ${prefix}bcall [text]
» ${prefix}setppbot [imagen]
» ${prefix}setexif

──────────────

╭─❒ 「 Agradecimiento 」
» DikaArdnt
» CarlosE

──────────────`
const templateMessage = {
document: await getBuffer(`https://telegra.ph/file/bb998695d88e27e21334c.jpg`),
fileName: `Hola ${pushname}`,
mimetype: 'application/pdf',
jpegThumbnail: fs.readFileSync('./image.jpg'),
caption: menu,
footer: 'No acepto llamadas, no desbloqueare a nadie',
templateButtons: [	{ urlButton: { displayText: `📝 Tiktok bot`, url : `https://tiktok.com/@theprivmen` } },
        	{ urlButton: { displayText: `🎯 Pagina Bot`, url : `https://linkr.bio/KitziaBotMD` } },
            { urlButton: { displayText: `☎Mi contacto`, url: `https://wa.me/593991398786` } },
            { quickReplyButton: { displayText: `Latencia`, id: 'latencia'} },
            { quickReplyButton: { displayText: `InfoBot`, id: 'infobot'} }
        	]
}

await yol.sendMessage(m.chat, templateMessage, {quoted:m})
break

case 'infobot':
await yol.send5ButImg(from, ` ` + '' + lang.infobot(prefix), `Hola ${pushname} 💫\n\nMe llamo ${botname}, una bot de WhatsApp hecha a base de NodeJs & Python\nSi encuentras algun error, informe a mi propietario para que se solucione de inmediato\nInfo principal:!!\n\n• Version Qr : *Baileys-MD*.\n• Prefix : ( ${prefix} )\n• Tiempo de Servidor : ${runtime(process.uptime())} \n• Fecha del servidor : ${moment.tz('America/Guayaquil').format('DD/MM/YY')}\n•Gracias por preferirme como su bot de confianza, trataré de ayudar en muchas cosas`,thumb2, [{"urlButton": {"displayText": "Github","url": `${sc}`}},{"urlButton": {"displayText": "Youtube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Menu lista","id": 'listmenu'}},{"quickReplyButton": {"displayText": "Allmenu","id": 'allmenu'}},{"quickReplyButton": {"displayText": "Reglas","id": 'reglas'}}] )
break
case 'groupmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.group(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "Github","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Menu descargas","id": 'downloadmenu'}}] )
	break
case 'downloadmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.downloads(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "Github","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Menu busquedas","id": 'searchmenu'}}] )
	break
case 'searchmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.search(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Menu random","id": 'randommenu'}}] )
	break
case 'randommenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.random(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "Github","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "TextPro menu","id": 'logomenu'}}] )
	break
case 'logomenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.logomaker(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Juegos menu","id": 'funmenu'}}] )
	break
case 'funmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.funny(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Conversion menu","id": 'convertmenu'}}] )
	break
case 'convertmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.convert(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "DataBase menu","id": 'mainmenu'}}] )
	break
case 'mainmenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.main(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Creador menu","id": 'ownermenu'}}] )
	break
case 'ownermenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.ownermenu(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Modificador","id": 'voicemenu'}}] )
	break
case 'voicemenu':
	await yol.send5ButImg(from, `Hola ${pushname} 💘\n\n╭─⬣「 _*INFO BOT*_ 」⬣\n│ *Prefijo* :  ${prefix} \n│ *Nombre* : ${botname}\n│ *Owner* : ${ownername}\n│ *Runtime* : ${runtime(process.uptime())}\n│ *Lib* : Baileys-Md@4.0.0\n╰─⬣` + '\n' + lang.voice(prefix) , `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Ping","id": 'ping'}},{"quickReplyButton": {"displayText": "Owner","id": 'owner'}},{"quickReplyButton": {"displayText": "Instagram bot","id": 'instagram'}}] )
	break
case 'creditos':
await yol.send5ButImg(from, `` + '' + lang.thanksto(), `© ${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}}] )
break
case 'donar':
	await yol.send5ButImg(from, `` + '' + lang.donasi(), `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "YouTube","url": `${myweb}`}}] )
	break
case 'entrargp':
	await yol.send5ButImg(from, `` + '' + lang.gprules(), `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "Tiktok","url": `${tiktok}`}}] )
	break
case 'reglas':
	await yol.send5ButImg(from, `` + '' + lang.rules(), `${footer}`,thumb, [{"urlButton": {"displayText": "GitHub","url": `${sc}`}},{"urlButton": {"displayText": "Pagina Bot","url": `${linkbot}`}}] )
	break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    yol.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
