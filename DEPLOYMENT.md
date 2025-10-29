# Panduan Deployment ke VPS

## Konfigurasi Awal

1. Buat file `.env.local` di root project dengan isi berikut:

```bash
# VPS Deployment Configuration
VPS_HOST=84.247.150.90
VPS_USER=root
VPS_PASSWORD=t2P7mU89rv4
VPS_DEPLOY_PATH=/var/www/html
```

**Penting:** File `.env.local` sudah terdaftar di `.gitignore` dan tidak akan di-commit ke repository.

## Setup VPS

Pastikan VPS sudah dikonfigurasi dengan:
- Web server (Nginx/Apache) yang mengarah ke `/var/www/html`
- Port 80 dan 443 terbuka

## Instalasi Dependencies untuk Deployment

Script deployment memerlukan `sshpass` untuk password authentication. Install terlebih dahulu:

### macOS
```bash
brew install hudochenko/sshpass/sshpass
```

### Linux
```bash
sudo apt-get update && sudo apt-get install -y sshpass
```

## Deployment

### Cara 1: Menggunakan npm script
```bash
npm run deploy
```

### Cara 2: Langsung menjalankan script
```bash
chmod +x deploy.sh
./deploy.sh
```

## Cara Manual

Jika script tidak berfungsi, Anda dapat melakukan deployment manual:

1. **Build project:**
```bash
npm run build
```

2. **Upload ke VPS:**
```bash
sshpass -p "t2P7mU89rv4" rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=no" \
  dist/ \
  root@84.247.150.90:/var/www/html/
```

Atau menggunakan scp:
```bash
sshpass -p "t2P7mU89rv4" scp -r -o StrictHostKeyChecking=no \
  dist/* \
  root@84.247.150.90:/var/www/html/
```

3. **Atau login manual dan upload:**
```bash
ssh root@84.247.150.90
# Password: t2P7mU89rv4
```

## Keamanan

Untuk keamanan yang lebih baik, disarankan untuk:
1. Menggunakan SSH key authentication instead of password
2. Menggunakan environment variables di VPS
3. Tidak menyimpan password di file teks biasa

## Troubleshooting

### Error: sshpass tidak ditemukan
Install sshpass sesuai instruksi di atas.

### Error: Permission denied
Pastikan user memiliki akses ke folder deployment di VPS.

### Error: Connection refused
- Pastikan VPS sedang aktif
- Cek firewall settings di VPS
- Pastikan IP address benar


