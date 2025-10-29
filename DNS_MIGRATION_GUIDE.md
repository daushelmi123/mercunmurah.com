# DNS Migration Guide - MercunMurah.com

## ✅ VPS Setup Complete!

Website sudah berjaya di-setup di VPS dan berfungsi dengan baik.

**VPS IP:** `84.247.150.90`  
**Status:** ✅ Live & Working

---

## 🌐 Langkah Update DNS

### Step 1: Backup Current DNS Settings
Sebelum tukar apa-apa, screenshot atau tulis DNS settings yang ada sekarang sebagai backup.

### Step 2: Update A Records

Pergi ke **DNS Management** domain mercunmurah.com (contoh: Cloudflare, Namecheap, GoDaddy, etc) dan update:

#### A Record 1:
```
Type: A
Name: @ (atau mercunmurah.com)
Value: 84.247.150.90
TTL: 3600 (atau Auto)
```

#### A Record 2:
```
Type: A
Name: www
Value: 84.247.150.90
TTL: 3600 (atau Auto)
```

### Step 3: Verify DNS Propagation

Selepas update DNS, check propagation:
- Online tool: https://dnschecker.org
- Enter: `mercunmurah.com`
- Check if IP shows: `84.247.150.90`

**Note:** DNS propagation boleh ambil masa 1-48 jam (biasanya 1-4 jam)

---

## 🔒 Setup SSL Certificate (After DNS Pointing)

Selepas DNS dah point ke VPS, setup SSL untuk HTTPS:

### Option A: Let's Encrypt (Free - Recommended)

SSH ke VPS:
```bash
ssh root@84.247.150.90
# Password: t2P7mU89rv4
```

Install Certbot:
```bash
apt update
apt install certbot python3-certbot-nginx -y
```

Generate SSL Certificate:
```bash
certbot certonly --webroot -w /home/mercunmurah/public_html -d mercunmurah.com -d www.mercunmurah.com
```

Update OpenLiteSpeed config to use SSL:
```bash
# Edit listener SSL in /usr/local/lsws/conf/httpd_config.conf
# Add mercunmurah.com mapping and cert paths
```

### Option B: Cloudflare SSL (Easier)
Jika guna Cloudflare:
1. Enable "Full (strict)" SSL/TLS mode
2. Cloudflare akan auto-generate certificate
3. No need manual setup

---

## 📋 Pre-Migration Checklist

Sebelum point DNS ke VPS baru:

- [x] Website build successfully
- [x] Files uploaded ke VPS
- [x] OpenLiteSpeed configured
- [x] Virtual host setup complete
- [x] Website accessible via IP
- [ ] **Backup database** (jika ada)
- [ ] **Backup old hosting files** (FTP backup)
- [ ] **Test semua pages** di VPS
- [ ] **Test contact form** (Supabase functions)
- [ ] **Test order system**

---

## 🧪 Testing Before DNS Change

Test website di VPS sebelum tukar DNS (lokal computer):

### Mac/Linux - Edit /etc/hosts:
```bash
sudo nano /etc/hosts
```

Add line:
```
84.247.150.90 mercunmurah.com www.mercunmurah.com
```

Save & test `https://mercunmurah.com` di browser.

Remove the line selepas test.

---

## ⚠️ Important Notes

1. **Jangan delete old hosting yet** - tunggu 1 minggu untuk pastikan everything okay
2. **Monitor errors** - check `/home/mercunmurah/logs/` untuk errors
3. **Backup regularly** - setup auto backup di VPS
4. **SSL required** - Setup SSL certificate selepas DNS point ke VPS

---

## 🔄 Rollback Plan (If Something Goes Wrong)

Jika ada masalah selepas migration:

1. **Revert DNS** - tukar balik A record ke IP lama
2. **Wait for propagation** (1-4 jam)
3. **Fix issues di VPS** 
4. **Try again** bila dah fix

---

## 📞 VPS Access Info

**SSH Access:**
```bash
ssh root@84.247.150.90
Password: t2P7mU89rv4
```

**Website Path:**
```
/home/mercunmurah/public_html/
```

**OpenLiteSpeed Admin:**
```
http://84.247.150.90:7080
(Check VPS for admin credentials)
```

**Logs:**
```
/home/mercunmurah/logs/
```

---

## ✅ Post-Migration Tasks

Selepas DNS dah point dan website live:

1. Setup SSL certificate
2. Setup monitoring (uptime checker)
3. Configure auto-backup
4. Update sitemap (if needed)
5. Test all functionality:
   - Contact form
   - Order system
   - WhatsApp button
   - Share functionality
   - All pages load correctly
6. Delete old FTP hosting (after 1 week)

---

**Current Status:** VPS Ready ✅  
**Next Step:** Update DNS A Records

Good luck! 🚀💰

