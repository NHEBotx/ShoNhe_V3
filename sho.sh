#!/usr/bin/bash
set -e

# Warna Terminal
GREEN='\x1b\x5b\x30\x3b\x33\x32\x6d'
RED='\x1b\x5b\x30\x3b\x33\x31\x6d'
CYAN='\x1b\x5b\x30\x3b\x33\x36\x6d'
YELLOW='\x1b\x5b\x30\x3b\x33\x33\x6d'
NC='\x1b\x5b\x30\x6d' # No Color

# Efek Tambahan
BLINK='\x1b\x5b\x35\x6d'
BOLD='\x1b\x5b\x31\x6d'

# Clear layar sebelum menampilkan teks
clear

# Banner ASCII Futuristik
echo -e "${GREEN}"
echo -e "\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88\xE2\x96\x88"
echo -e "${NC}"
sleep 1

# Efek teks berjalan untuk tampilan lebih dramatis
type_text() {
    text="$1"
    for ((i=0; i<${#text}; i++)); do
        echo -ne "${text:$i:1}"
        sleep 0.02
    done
    echo ""
}

echo -e "${CYAN}${BOLD}"
type_text ">> INITIALIZING SYSTEM CHECKS..."
sleep 1
type_text ">> LOADING CORE MODULES..."
sleep 1
type_text ">> BYPASSING FIREWALL..."
sleep 1
type_text ">> ACCESS GRANTED! WELCOME, OPERATOR."
echo -e "${NC}"

sleep 1

# Loading Animation
loading() {
    local message=$1
    echo -ne "${YELLOW}${message} \x5b"
    for ((i = 0; i < 30; i++)); do
        echo -ne "\x23"
        sleep 0.05
    done
    echo -e "\x5d${NC} \xE2\x9C\x85"
    sleep 0.5
}

# Update & Install Dependencies
loading "🔄 Updating and installing dependencies..."
apt-get update -y && apt-get upgrade -y
apt-get install -y nodejs libwebp mc imagemagick ffmpeg libvips unzip zip wget tesseract nmap
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

# Instal Yarn jika belum ada
loading "🔄 Checking and installing Yarn..."
if ! command -v yarn &> /dev/null; then
    echo -e "${CYAN}\xF0\x9F\x93\xA5 Installing Yarn...${NC}"
    npm install -g yarn
else
    echo -e "${GREEN}\xE2\x9C\x85 Yarn is already installed.${NC}"
fi

# Instal dependencies npm
loading "📦 Installing npm dependencies..."
npm install

# Instal dependency tambahan
loading "📥 Adding additional dependencies: form-data..."
npm install form-data

# Instal dependencies dengan Yarn
loading "📦 Installing dependencies via Yarn..."
yarn install

# Menjalankan perintah hacker-style
loading "🔄 Scanning for open ports..."
sleep 1
loading "💻 Compiling payload..."
sleep 1
loading "🔓 Exploiting vulnerabilities..."
sleep 1
loading "🔥 Injecting backdoor..."
sleep 1

# Output akhir
echo -e "${RED}${BOLD}${BLINK}ACCESS ROOT GRANTED! SYSTEM COMPROMISED!${NC}"
echo -e "${CYAN}🎭 Operation completed successfully. Enjoy your new privileges.${NC}"

# Informasi Kredit
echo -e "${CYAN}"
echo -e "\xE2\x95\x94\xE2\x97\x87 \x2a\x41\x77\x61\x72\x64\x73 \x66\x6f\x72\x2a \xE2\x97\x87\xE2\x94\x80\xE2\x94\x9D"
echo -e "\xE2\x95\x91"
echo -e "\xE2\x95\x91   \xF0\x9F\x9B\xA0\xEF\xB8\x8F \x2a\x54\x68\x61\x6e\x6b\x73 \x74\x6f\x3a\x2a"
echo -e "\xE2\x95\x91   > \xC2\xA9\x59\x75\x72\x52\x69\x6e\x27\x73\x28\x44\x65\x76\x29"
echo -e "\xE2\x95\x91   > \xC2\xA9\x54\x6e\x67\x78\x61\x6a\x61\x20\x28\x49\x64\x65\x43\x72\x65\x61\x74\x6f\x72\x29"
echo -e "\xE2\x95\x91   > \xC2\xA9\x5a\x6f\x69"
echo -e "\xE2\x95\x91   > \xC2\xA9\x52\x75\x72\x69"
echo -e "\xE2\x95\x91   > \xC2\xA9\x48\x65\x6e\x72\x69\x71\x75\x65\x58"
echo -e "\xE2\x95\x91   > \xC2\xA9\x50\x75\x67\x75\x68\x20\x28\x65\x78\x63\x65\x20\x74\x65\x73\x74\x29"
echo -e "\xE2\x95\x91   > \xC2\xA9\x52\x69\x63\x6f\x20\x28\x73\x68\x61\x72\x65\x29"
echo -e "\xE2\x95\x91   > \x50\x65\x6e\x79\x75\x6d\x62\x61\x6e\x67\x20\x41\x70\x69\x6b\x65\x79"
echo -e "\xE2\x95\x9A\xE2\x94\x80\xE2\x94\x80\xE2\x94\x9D\xE2\x94\x80\xE2\x94\x80\xE2\x94\x80\xE2\x94\x80\xE2\x94\x9D"

echo -e "${GREEN}\xF0\x9F\x94\x92 \x2a\x53\x79\x73\x74\x65\x6d \x4c\x6f\x67 \x43\x6f\x6d\x70\x6c\x65\x74\x65\x2e \x4e\x6f\x64\x65 \x53\x65\x63\x75\x72\x65\x64\x2e\x2a \xF0\x9F\x94\x92${NC}"
echo -e "${CYAN}\xC2\xA9\xC2\xAE 𝙎𝙝𝙤𝙉𝙝𝙚  *_\x41\x6e\x64 \x44\x65\x76\x65\x6c\x6f\x70\x6d\x65\x6e\x74_\x2a${NC}"