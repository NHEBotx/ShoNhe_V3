/*
⚠️ PERINGATAN ⚠️  
Script bot WhatsApp Mora AI ini dibuat oleh Khalid untuk keperluan pribadi dan pembelajaran.  
Dilarang keras untuk memperjualbelikan, mendistribusikan ulang, atau mengklaim sebagai milik sendiri.  

Hak Cipta © 2024 Khalid & Mora AI  
*/

let axios = require('axios');
let BodyForm = require('form-data');
let fs = require('fs');
let cheerio = require('cheerio');

async function CatBox(filePath) {
	try {
		const fileStream = fs.createReadStream(filePath);
		const formData = new BodyForm();
		formData.append('fileToUpload', fileStream);
		formData.append('reqtype', 'fileupload');
		formData.append('userhash', ''); // Anda dapat memberikan userhash jika diperlukan

		const response = await axios.post('https://catbox.moe/user/api.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});

		// Dengan asumsi API mengembalikan URL file sebagai respons
		return response.data;
	} catch (error) {
		console.error("Error at Catbox uploader:", error);
		return "Terjadi kesalahan saat upload ke Catbox.";
	}
}

async function pomfCDN(path) {
	try {
		const fileStream = fs.createReadStream(path);
		const formData = new BodyForm();
		formData.append('files[]', fileStream);

		const response = await axios.post('https://pomf.lain.la/upload.php', formData, {
			headers: {
				...formData.getHeaders(),
			},
		});

		return response.data.files[0].url;
	} catch (error) {
		console.log("Error at pomf uploader in lib/uploader.js:", error);
		return "Terjadi Kesalahan";
	}
}

async function fileIO(filePath) {
	try {
		// Membaca file untuk diupload
		const fileStream = fs.createReadStream(filePath);
		
		// Menyiapkan form data untuk upload
		const formData = new BodyForm();
		formData.append('file', fileStream);

		// Melakukan POST ke file.io API dengan form data dan headers
		const response = await axios.post('https://file.io/?expires=1d', formData, {
			headers: formData.getHeaders(),
		});
		
		// Menangani respons API dan mengembalikan URL file
		if (response.data && response.data.success) {
			return response.data.link;  // Mengambil link file dari response
		} else {
			throw new Error('File upload failed.');
		}
	} catch (error) {
		console.error('Error at File.io uploader:', error);
		return 'Terjadi kesalahan saat upload ke file.io.';
	}
}

module.exports = { CatBox, pomfCDN, fileIO };
