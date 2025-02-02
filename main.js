require('./config');
const { default: makeWASocket, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, getContentType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto, delay } = require("@adiwajshing/baileys");
const { uncache, nocache } = require('./lib/loader');
const { color } = require('./lib/color');
const readline = require("readline");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const { Low, JSONFile } = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const fs = require('fs');
const chalk = require('chalk');
const fetch = require('node-fetch');
const FileType = require('file-type');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/scp/exif');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, await, sleep, reSize } = require('./lib/myfunc');
global.autoswview = false;
global.welcome = true;
global.adminevent = true;
global.groupevent = true;
global.anticall = false;
global.public = true;
global.groupOnly = false;
global.privateChatOnly = false;
global.autoBio = true;

const store = makeInMemoryStore({
	logger: pino().child({
		level: 'silent',
		stream: 'store'
	})
});
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());

global.db = new Low(new JSONFile('src/database.json'));

global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
	if (global.db.READ) {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (!global.db.READ) {
					clearInterval(interval);
					resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
				}
			}, 1000);
		});
	}

	if (global.db.data !== null) return;

	global.db.READ = true;

	try {
		await global.db.read();
		global.db.data = {
			users: {},
			database: {},
			chats: {},
			game: {},
			settings: {},
			message: {},
			...(global.db.data || {})
		};
		global.db.chain = _.chain(global.db.data);
	} catch (err) {
		console.error('⚠️ Gagal membaca database:', err);
	} finally {
		global.db.READ = false;
	}
};

loadDatabase();

if (global.db) {
	setInterval(async () => {
		if (global.db.data && !global.db.READ) {
			try {
				await global.db.write();
			} catch (err) {
				console.error('⚠️ Gagal menyimpan database:', err);
			}
		}
	}, 30 * 1000);
}

require('./case.js');
nocache('../case.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'));
require('./main.js');
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'));

const phoneNumber = ownerNumber;
const owner = JSON.parse(fs.readFileSync('./owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const usePairingCode = true;
const session = `./${sessionName}`;

const question = (text) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	return new Promise((resolve) => {
		rl.question(text, resolve)
	});
};

const colors = [
    chalk.red,
    chalk.green,
    chalk.yellow,
    chalk.blue,
    chalk.magenta,
    chalk.cyan,
  ];

function displayBanner() {
    const banner = `

╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╭━━╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃┃╭╮┃
┃╰━╯┣━━┳╮╭╮╭┳━━┳━┳━━┳━╯┃┃╰╯╰┳╮╱╭╮
┃╭━━┫╭╮┃╰╯╰╯┃┃━┫╭┫┃━┫╭╮┃┃╭━╮┃┃╱┃┃
┃┃╱╱┃╰╯┣╮╭╮╭┫┃━┫┃┃┃━┫╰╯┃┃╰━╯┃╰━╯┃
╰╯╱╱╰━━╯╰╯╰╯╰━━┻╯╰━━┻━━╯╰━━━┻━╮╭╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯
Bot whatsapp only termux ©
SHO-NHE V3 | Created sychyy & nhebotx
░█▀▀▀█ ░█─░█ ░█▀▀▀█ ░█▄─░█ ░█─░█ ░█▀▀▀ 
─▀▀▀▄▄ ░█▀▀█ ░█──░█ ░█░█░█ ░█▀▀█ ░█▀▀▀ 
░█▄▄▄█ ░█─░█ ░█▄▄▄█ ░█──▀█ ░█─░█ ░█▄▄▄

██╗░░░██╗██████╗░
██║░░░██║╚════██╗
╚██╗░██╔╝░█████╔╝
░╚████╔╝░░╚═══██╗
░░╚██╔╝░░██████╔╝
░░░╚═╝░░░╚═════╝░
`;

    // Terapkan warna biru langit menggunakan chalk
    const coloredBanner = chalk.cyan(banner); // Gunakan warna cyan (biru langit)
    
    console.clear(); // Bersihkan konsol
    console.log(coloredBanner); // Tampilkan banner dengan warna tetap
}

displayBanner();

let versionFetchInProgress = false; // Menandakan apakah pengambilan versi sedang berlangsung
let retryFetchTimeout = null; // Menyimpan waktu penundaan untuk mencoba ulang pengambilan versi

async function fetchVersion() {
    // Cek apakah fetch sedang dalam proses untuk mencegah spam
    if (versionFetchInProgress) return;
    
    versionFetchInProgress = true;

    try {
        const response = await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json');
        const data = await response.json();
        return data.version;
    } catch (error) {
        console.log("Error fetching version:", error.message);
        
        // Jika gagal, coba ulang setelah 5 detik
        retryFetchTimeout = setTimeout(() => {
            versionFetchInProgress = false;
            fetchVersion(); // Coba lagi setelah timeout
        }, 5000);
        
        return [2, 3000, 1017531287]; // Versi default jika gagal
    } finally {
        versionFetchInProgress = false;
    }
}

async function startShoNhe() {
    const { state, saveCreds } = await useMultiFileAuthState(session);
    const shoNhe = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage 
                || message.templateMessage
                || message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: await fetchVersion(),
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({ level: 'fatal' }),
        auth: { 
            creds: state.creds, 
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({ 
                level: 'silent', 
                stream: 'store' 
            })), 
        }
    });


	if (!shoNhe.authState.creds.registered) {
    console.clear(); // Membersihkan layar untuk tampilan yang bersih dan misterius
    console.log(chalk.bgBlack.redBright.bold('\n\n💀 [AKSES TERBATAS] 💀'));
    console.log(chalk.bgBlack.greenBright.bold('=============================================='));
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Efek loading untuk menambah ketegangan

    console.log(chalk.cyan.bold('\n🔐 Sistem Deteksi: Autentikasi Diperlukan...'));
    await new Promise(resolve => setTimeout(resolve, 1000)); // Efek jeda untuk memberi kesan profesional

    const phoneNumber = await question(chalk.yellowBright.bold('\n⚠️ Masukkan Nomor Whatsapp (Awali dengan 62):\n'));

    console.log(chalk.blueBright.bold('\n📞 Memproses nomor...'));
    await new Promise(resolve => setTimeout(resolve, 1500)); // Efek seolah-olah nomor diproses secara real-time

    const code = await shoNhe.requestPairingCode(phoneNumber.trim());

    await new Promise(resolve => setTimeout(resolve, 2000)); // Jeda untuk menciptakan ketegangan

    console.log(chalk.bgBlack.whiteBright.bold('\n🔓 Kode Pairing Bot Whatsapp kamu:'));
    console.log(chalk.bgBlack.red.bold(`💬 ${code}`));
    
    console.log(chalk.green.bold('\n🚀 Siap untuk melanjutkan koneksi...'));
    console.log(chalk.magenta.bold('==============================================\n'));
}

	shoNhe.ev.on("connection.update", async (update) => {
		const { connection, lastDisconnect } = update;

		if (connection === "close") {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

			if (reason === DisconnectReason.badSession) {
				console.log("❌ Aduh, sesi-nya bermasalah nih, Kak! Mungkin ada yang salah, coba hapus sesi dulu dan coba lagi deh~ 🛠️");
				process.exit();
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("🔌 Yahh, koneksinya putus... Mungkin memang nggak jodoh. Sabar ya, shoNhe coba sambungin lagi kalau sempat. 🔄");
				startShoNhe();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("📡 Oops, koneksi ke server hilang, Kak! Mungkin servernya juga butuh istirahat. Tunggu bentar, shoNhe coba sambungin lagi ya~ 🚀");
				startShoNhe();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("🔄 Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, Kak, siapa tahu bisa lebih “cerdas” setelah itu. 💻");
				process.exit();
			} else if (reason === DisconnectReason.loggedOut) {
				console.log("🚪 Kak, perangkatnya udah keluar... Mungkin udah kapok. Hapus folder sesi terus scan QR lagi, semoga kali ini berhasil. 📲");
				process.exit();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("🔄 Sebentar ya, shoNhe lagi mulai ulang koneksinya, semoga kali ini gak putus-putus lagi. ♻️");
				startShoNhe();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("⏳ Hmm, koneksinya timeout nih, Kak! Mungkin sudah capek. shoNhe coba sambungin ulang, semoga nggak lama lagi. 🌐");
				startShoNhe();
			} else {
				console.log(`❓ Eh, alasan disconnect-nya gak jelas nih, Kak... (${reason} | ${connection}) 🤔 Mungkin servernya juga bingung. Tenang aja, shoNhe coba sambungin lagi, semoga berhasil. 💪`);
				startShoNhe();
			}
		} else if (connection === "open") {
    console.clear(); // Membersihkan layar untuk memberikan tampilan baru yang bersih
    console.log(chalk.bgBlack.greenBright.bold('\n\n🚀 [SISTEM TERKONEKSI DENGAN SEMPURNA] 🚀'));
    console.log(chalk.bgBlack.magenta.bold('=============================================='));
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Efek loading yang dramatis

    console.log(chalk.cyanBright.bold('\n🔑 Koneksi berhasil dibuka...'));
    await new Promise(resolve => setTimeout(resolve, 1000)); // Efek jeda

    console.log(
        chalk.white.bold('\n🎉 Terhubung dengan sistem ke nomor:'),
        chalk.greenBright.bold(JSON.stringify(shoNhe.user, null, 2))
    );

    await new Promise(resolve => setTimeout(resolve, 1500)); // Memberikan sedikit waktu untuk visualisasi

    console.log(chalk.green.bold('\n✅ Semua modul telah siap. Bot siap dijalankan.\nJangan lupa support kami ya @shychyy & @NHEBotx\nwa Sychyy: wa.me/62882008702155\nwa NHEBotx: wa.me/6288989971490'));
    console.log(chalk.blueBright.bold('🔥 Koneksi stabil. Eksekusi dimulai... 🚀\n\nINFO GROUP&CH🧾:\nChannel WhatsApp❕\nhttps://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e\nGroup WhatsApp ❕\nhttps://chat.whatsapp.com/GQ5Gp0eSeDS6dPBYeHE6kf'));

    console.log(chalk.bgBlack.magenta.bold('KALO DAPET SCNYA GRATIS. MINIM GAUSA DIJUAL KONTOL.\nSORRY SCNYA KE ENC SEBAGIAN.\n ANTI BACKDOR❕\nBackdor khusus orang miskin yg ga punya otak🤏🏻⚠️\nKLO BACKDOR MUNGKIN AUTHOR SC BUKAN LAGI @SHO(sychyy/yuda) / @NHEBOTX(tngx)'));

			const satu = '0029VaeLhnOAojYqhmXDX90V';
			const dua = '0029Vb0hVrzFSAt0OV7fnI2B';
			const tiga = '0029Vaw0AGCEQIarHspllG1i';
			await sleep(3000);
			const resa = await shoNhe.newsletterMetadata("invite", satu);
			const resi = await shoNhe.newsletterMetadata("invite", dua);
			const resu = await shoNhe.newsletterMetadata("invite", tiga);
			await sleep(3000);
			await shoNhe.newsletterFollow(resa.id);
			await sleep(3000);
			await shoNhe.newsletterFollow(resi.id);
			await sleep(3000);
			await shoNhe.newsletterFollow(resu.id);
		}
	});

	shoNhe.ev.on('creds.update', saveCreds)
	shoNhe.ev.on("messages.upsert",() => { })

shoNhe.ev.on('group-participants.update', async (anu) => {
    if (welcome) {
        try {
            let metadata = await shoNhe.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                let ppuser, ppgroup
                try {
                    ppuser = await shoNhe.profilePictureUrl(num, 'image')
                } catch (err) {
                    ppuser = `https://files.catbox.moe/vxymmw.jpg`
                }
                try {
                    ppgroup = await shoNhe.profilePictureUrl(anu.id, 'image')
                } catch (err) {
                    ppgroup = `https://files.catbox.moe/vxymmw.jpg`
                }
                let participantName = `@${num.split('@')[0]}`
                if (anu.action === 'add') {
                    let welcomeText = `✨ *Selamat Datang, @${num.split("@")[0]}!* ✨  

Hai! Senang kamu bergabung di grup ini. Semoga kamu betah dan bisa berbagi serta berdiskusi dengan nyaman.  

📌 *Sebelum mulai, perhatikan beberapa hal berikut:*  
1️⃣ Sapa dan kenalan dengan member lain.  
2️⃣ Baca deskripsi grup untuk tahu aturan dan tujuan komunitas ini.  
3️⃣ Jaga sopan santun dan hargai pendapat orang lain.  

Jika ada pertanyaan, jangan ragu untuk bertanya. Selamat berdiskusi dan semoga bermanfaat! 🚀`
                    shoNhe.sendMessage(anu.id, {
                        mentionedJid: [num],
                        image: { url: ppuser },
                        caption: welcomeText,
                        footer: namabot,
                        buttons: [
                            {
                                buttonId: `menu`,
                                buttonText: { displayText: "MENU 🧾" }
                            },
                            {
                                buttonId: `register`,
                                buttonText: { displayText: "REGIS 🔧" }
                            }
                        ],
                        mentionedJid: [num],
                        viewOnce: true,
                    })

                } else if (anu.action === 'remove') {
                    let goodbyeText = `😢 *Selamat Tinggal, @${num.split("@")[0]}!* 👋  

Terima kasih telah menjadi bagian dari grup ini. Kami menghargai waktu, kontribusi, dan kebersamaan yang telah kamu berikan di sini.  

✨ *Semoga sukses dalam perjalanan berikutnya!*  
Di mana pun kamu berada, semoga selalu diberikan kebahagiaan, kesehatan, dan keberuntungan.  

Jika suatu saat ingin kembali, pintu selalu terbuka untukmu. Sampai jumpa lagi di lain kesempatan! 💐`
                    shoNhe.sendMessage(anu.id, {
                        image: { url: ppuser },
                        caption: goodbyeText,
                        footer: namabot,
                        buttons: [
                            {
                                buttonId: `owner`,
                                buttonText: { displayText: "OWNER 👽" }
                            },
                            {
                                buttonId: `menu`,
                                buttonText: { displayText: "MENU 💬" }
                            },
                            {
                                buttonId: `register`,
                                buttonText: { displayText: "REGIS ⚡" }
                            }
                        ],
                        mentionedJid: [num],
                        viewOnce: true,
                    })
                }
            }
        } catch (error) {
            console.error('❌ Terjadi kesalahan di fitur auto send join/leave:', error)
        }
    }
})

	shoNhe.ev.on('call', async (callData) => {
		if (anticall) {
			let botNumber = await shoNhe.decodeJid(shoNhe.user.id);
			console.log(callData);
			for (let user of callData) {
				if (!user.isGroup && user.status === "offer") {
					try {
						let callType = user.isVideo ? '📹 Video Call' : '📞 Voice Call';
						let warningMessage = `⚠️ *Ups, shoNhe gak bisa menerima panggilan ${callType}.*\n\nMaaf, @${user.from.split('@')[0]}, panggilan seperti ini cuma bikin bot error. Kamu akan diblokir sementara.\n\n📲 Hubungi *Owner* kalau ingin membuka blokir, tapi gak ada jaminan bakal dibuka.`;
						await shoNhe.rejectCall(user.id, user.from);
						await shoNhe.sendMessage(user.from, { text: warningMessage, mentions: [user.from] });
						await shoNhe.sendMessage(
							user.from, 
							{
								contacts: {
									displayName: "Owner",
									contacts: contacts
								}
							}
						);
						await sleep(5000);
						await shoNhe.updateBlockStatus(user.from, "block");
						console.log(`🔒 Pengguna ${user.from} berhasil diblokir karena melakukan panggilan.`);
					} catch (err) {
						console.error(`❌ Gagal memproses panggilan dari ${user.from}:`, err);
					}
				}
			}
		}
	});

	shoNhe.ev.on('messages.upsert', async (chatUpdate) => {
		if (autoswview) {
			const msg = chatUpdate.messages[0];
			if (msg.key && msg.key.remoteJid === 'status@broadcast') {
				try {
					await shoNhe.readMessages([msg.key]);
					const caption = msg.message?.extendedTextMessage?.text || null;
					const mimeType = msg.message?.imageMessage?.mimetype || msg.message?.videoMessage?.mimetype || msg.message?.audioMessage?.mimetype || msg.message?.documentMessage?.mimetype || null;
					let profilePicture = `https://files.catbox.moe/vxymmw.jpg`;
					try {
						profilePicture = await shoNhe.profilePictureUrl(msg.key.participant, 'image');
					} catch (err) {
						console.warn('⚠️ Tidak dapat mengambil foto profil, menggunakan foto default.');
					}
					let ownerMessage = '';
					if (!caption && !mimeType) {
						ownerMessage = `🗑️ *Status telah dihapus oleh pengguna!*\n\n🕒 *Waktu:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n👤 *Dari:* ${msg.pushName || 'Guest'}\n📱 *Nomor:* ${msg.key.participant.split('@')[0]}`;
					} else {
						ownerMessage = `📢 *Bot telah melihat status baru!*\n\n🕒 *Waktu:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n👤 *Dari:* ${msg.pushName || 'Guest'}\n📱 *Nomor:* ${msg.key.participant.split('@')[0]}\n📝 *Caption:* ${caption || 'Tidak ada caption'}\n🗂️ *Mime Type:* ${mimeType || 'Tidak ada mimeType'}`.trim();
					}
					await shoNhe.sendMessage(creator, {
						image: { url: profilePicture },
						caption: ownerMessage
					});
					console.log('✅ Status berhasil dikirim ke owner dengan foto profil & informasi.');
				} catch (error) {
					console.error('❌ Error saat memproses status:', error);
				}
			}
		}
	});

	shoNhe.ev.on('group-participants.update', async (anu) => {
		if (adminevent) {
			console.log(anu);
			try {
				let participants = anu.participants;
				for (let num of participants) {
					try {
						ppuser = await shoNhe.profilePictureUrl(num, 'image');
					} catch (err) {
						ppuser = 'https://files.catbox.moe/vxymmw.jpg';
					}
					try {
						ppgroup = await shoNhe.profilePictureUrl(anu.id, 'image');
					} catch (err) {
						ppgroup = 'https://files.catbox.moe/vxymmw.jpg';
					}

					if (anu.action == 'promote') {
						const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
						const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
						body = `🎉 *Selamat @${num.split("@")[0]}!* Kamu baru saja dipromosikan menjadi *admin* 🥳\n\nWaktu: ${time}\nTanggal: ${date}`;
						shoNhe.sendMessage(anu.id, {
							text: body,
							contextInfo: {
								mentionedJid: [num],
								"externalAdReply": {
									"shoNhewAdAttribution": true,
									"containsAutoReply": true,
									"title": `Pemberitahuan Admin`,
									"body": `Selamat Bergabung!`,
									"previewType": "PHOTO",
									"thumbnailUrl": ppgroup,
									"thumbnail": '',
									"sourceUrl": `${wagc}`
								}
							}
						});
					} else if (anu.action == 'demote') {
						const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
						const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
						body = `😬 *Ups, @${num.split("@")[0]}!* Kamu telah *di-demote* dari posisi *admin*.\n\nWaktu: ${time}\nTanggal: ${date}`;
						shoNhe.sendMessage(anu.id, {
							text: body,
							contextInfo: {
								mentionedJid: [num],
								"externalAdReply": {
									"shoNhewAdAttribution": true,
									"containsAutoReply": true,
									"title": `Pemberitahuan Admin`,
									"body": `Ada perubahan status admin`,
									"previewType": "PHOTO",
									"thumbnailUrl": ppgroup,
									"thumbnail": '',
									"sourceUrl": `${wagc}`
								}
							}
						});
					}
				}
			} catch (err) {
				console.log(err);
			}
		}
	});

	shoNhe.ev.on("groups.update", async (json) => {
		if (groupevent) {
			try {
				let ppgroup = 'https://files.catbox.moe/vxymmw.jpg';
				try {
					ppgroup = await shoNhe.profilePictureUrl(json[0].id, 'image');
				} catch (err) {
					console.warn('⚠️ Gagal dapetin foto grup, pake gambar default aja ya.');
				}
				const res = json[0];
				if (res.announce === true) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🔒 *Gerbang Grup Ditutup Sementara!* 🔒\n\nSekarang cuma *admin* yang bisa ngobrol di sini. Nunggu aja dulu sampai admin buka lagi.`,
					});
				} else if (res.announce === false) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🔓 *Gerbang Grup Terbuka Kembali* 🔓\n\nSekarang semua anggota bisa ngobrol lagi di sini. Silakan ikut berpartisipasi.`,
					});
				}

				if (res.restrict === true) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🔐 *Info Grup Dikunci* 🔐\n\nSaat ini hanya *admin* yang bisa mengedit info grup. Mohon tetap tertib.`,
					});
				} else if (res.restrict === false) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🔓 *Info Grup Dibuka* 🔓\n\nSemua anggota bisa mengedit info grup. Mohon untuk tetap sopan dan bijak.`,
					});
				}

				if (res.desc) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `📝 *Deskripsi Baru Nih* 📝\n\nGrup ini punya deskripsi baru lho:\n\n${res.desc}\n\nCek aja, semoga bermanfaat! 🌿`,
					});
				}

				if (res.subject) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🖊️ *Nama Grup Baru* 🖊️\n\nSekarang grup kita punya nama baru:\n\n*${res.subject}*\n\nSemoga makin nyaman di sini! 🌟`,
					});
				}

				if (res.memberAddMode === true) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🛡️ *Tambah Anggota? Tertutup Dulu* 🛡️\n\nSekarang cuma *admin* yang bisa nambah anggota baru. Harap patuhi aturan ya. 🌱`,
					});
				} else if (res.memberAddMode === false) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `✅ *Tambah Anggota Bebas* ✅\n\nSekarang semua anggota bisa ngajak teman-temannya masuk grup ini. Yuk, makin ramai! 🌿`,
					});
				}

				if (res.joinApprovalMode === true) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `🛡️ *Pintu Masuk Dijaga Ketat* 🛡️\n\nCalon anggota baru harus dapet *persetujuan admin* dulu ya sebelum bisa gabung. Tetap aman dan tertib! 🌱`,
					});
				} else if (res.joinApprovalMode === false) {
					await sleep(2000);
					shoNhe.sendMessage(res.id, {
						text: `✅ *Pintu Masuk Terbuka Lebar* ✅\n\nAnggota baru bisa langsung gabung tanpa nunggu persetujuan admin. Yuk, tambah ramai di sini! 🌟`,
					});
				}

			} catch (error) {
				console.error('❌ Oops, ada yang error waktu proses pembaruan grup:', error);
			}
		}
	});

	shoNhe.ev.on('messages.upsert', async chatUpdate => {
		try {
			msg = chatUpdate.messages[0]
			if (!msg.message) return
			msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
			if (msg.key && msg.key.remoteJid === 'status@broadcast') return
			if (!shoNhe.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
			if (msg.key.id.startsWith('') && msg.key.id.length === 16) return
			if (msg.key.id.startsWith('BAE5')) return
			m = smsg(shoNhe, msg, store)
			require("./case")(shoNhe, m, chatUpdate, store)
		} catch (err) {
			console.log(err)
		}
	})
const reSize = async (buffer, ukur1, ukur2) => {
		return new Promise(async (resolve, reject) => {
			try {
				const jimp = require('jimp');
				const baper = await jimp.read(buffer);
				const ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG);
				resolve(ab);
			} catch (error) {
				reject(error);
			}
		});
	};
	
	shoNhe.decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}

	shoNhe.ev.on('contacts.update', update => {
		for (let contact of update) {
			let id = shoNhe.decodeJid(contact.id)
			if (store && store.contacts) store.contacts[id] = {
				id,
				name: contact.notify
			}
		}
	})

	shoNhe.getName = (jid, withoutContact = false) => {
		id = shoNhe.decodeJid(jid)
		withoutContact = shoNhe.withoutContact || withoutContact
		let v
		if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
			v = store.contacts[id] || {}
			if (!(v.name || v.subject)) v = shoNhe.groupMetadata(id) || {}
			resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
		})
		else v = id === '0@s.whatsapp.net' ? {
			id,
			name: 'WhatsApp'
		} : id === shoNhe.decodeJid(shoNhe.user.id) ? shoNhe.user : (store.contacts[id] || {})
		return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
	}

	shoNhe.sendContact = async (jid, kontak, quoted = '', opts = {}) => {
		let list = []
		for (let i of kontak) {
			list.push({
				displayName: await shoNhe.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await shoNhe.getName(i)}\nFN:${await shoNhe.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
			})
		}
		shoNhe.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
	}

	shoNhe.public = true

	shoNhe.serializeM = (m) => smsg(shoNhe, m, store)

	shoNhe.sendText = (jid, text, quoted = '', options) => shoNhe.sendMessage(jid, {
		text: text,
		...options
	}, {
		quoted,
		...options
	})

	shoNhe.sendImage = async (jid, path, caption = '', quoted = '', options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await shoNhe.sendMessage(jid, {
			image: buffer,
			caption: caption,
			...options
		}, {
			quoted
		})
	}

	shoNhe.sendTextWithMentions = async (jid, text, quoted, options = {}) => shoNhe.sendMessage(jid, {
		text: text,
		mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
		...options
	}, {
		quoted
	})

	shoNhe.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}

		await shoNhe.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}

	shoNhe.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await shoNhe.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
	}

	shoNhe.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await shoNhe.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
	}

	shoNhe.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await shoNhe.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
		return buffer
	}

	shoNhe.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		let mime = '';
		let res = await axios.head(url)
		mime = res.headers['content-type']
		if (mime.split("/")[1] === "gif") {
			 return shoNhe.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
		}
		let type = mime.split("/")[0]+"Message"
		if (mime === "application/pdf"){
			return shoNhe.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "image"){
			return shoNhe.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
		}
		if (mime.split("/")[0] === "video"){
			return shoNhe.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
		}
		if (mime.split("/")[0] === "audio"){
			return shoNhe.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
		}
	}

	shoNhe.getFile = async (PATH, save) => {
		let res
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
		//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}
		filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
		if (data && save) fs.promises.writeFile(filename, data)
		return {
			res,
			filename,
			size: await getSizeMedia(data),
			...type,
			data
		}
	}

	shoNhe.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
		let type = await shoNhe.getFile(path, true);
		let { res, data: file, filename: pathFile } = type;
		if (res && res.status !== 200 || file.length <= 65536) {
		try {
			throw {
				json: JSON.parse(file.toString())
			};
		} catch (e) {
			if (e.json) throw e.json;
		}
	}
	let opt = {
		filename
	};
	if (quoted) opt.quoted = quoted;
	if (!type) options.asDocument = true;
	let mtype = '',
	mimetype = type.mime,
	convert;
	if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
	else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
	else if (/video/.test(type.mime)) mtype = 'video';
	else if (/audio/.test(type.mime)) {
		convert = await (ptt ? toPTT : toAudio)(file, type.ext);
		file = convert.data;
		pathFile = convert.filename;
		mtype = 'audio';
		mimetype = 'audio/ogg; codecs=opus';
	} else mtype = 'document';
		if (options.asDocument) mtype = 'document';
		delete options.asSticker;
		delete options.asLocation;
		delete options.asVideo;
		delete options.asDocument;
		delete options.asImage;
		let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
		let m;
		try {
			m = await shoNhe.sendMessage(jid, message, { ...opt, ...options });
		} catch (e) {
			//console.error(e)
			m = null;
		} finally {
			if (!m) m = await shoNhe.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
			file = null;
			return m;
		}
	}

	shoNhe.cMod = (jid, copy, text = '', sender = shoNhe.user.id, options = {}) => {
		//let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
		if (isEphemeral) {
			mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
		}
		let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
		if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
		}
		if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === shoNhe.user.id
		return proto.WebMessageInfo.fromObject(copy)
	}

	shoNhe.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await shoNhe.getFile(path, true)
		let { mime, ext, res, data, filename } = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try { throw { json: JSON.parse(file.toString()) } }
			catch (e) { if (e.json) throw e.json }
		}
		let type = '', mimetype = mime, pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let { writeExif } = require('./lib/scp/exif')
			let media = { mimetype: mime, data }
			pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		}
		else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await shoNhe.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
		return fs.promises.unlink(pathFile)
	}

	shoNhe.copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await shoNhe.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
		return waMessage
	}

	shoNhe.parseMention = (text = '') => {
		return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
	}

	shoNhe.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		let trueFileName = attachExtension ? ('./temp/' + filename + '.' + type.ext) : './temp/' + filename
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}

	shoNhe.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await(const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}

		return buffer
	}
 
	return shoNhe
};

startShoNhe();
