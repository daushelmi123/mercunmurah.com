# 🚀 MercunMurah.com - Deployment Guide

Complete guide for deploying and managing mercunmurah.com

---

## 📋 Table of Contents

1. [Server Information](#server-information)
2. [Supabase Setup](#supabase-setup)
3. [Building & Deploying](#building--deploying)
4. [DNS & Cloudflare](#dns--cloudflare)
5. [Troubleshooting](#troubleshooting)

---

## 🖥️ Server Information

### VPS Details
- **Provider:** VPS hosting
- **IP Address:** `84.247.150.90`
- **Web Server:** OpenLiteSpeed
- **Document Root:** `/usr/local/lsws/mercunmurah.com/html/`

### SSH Access
```bash
ssh root@84.247.150.90
```

### OpenLiteSpeed Commands
```bash
# Restart server
/usr/local/lsws/bin/lswsctrl restart

# Stop server
/usr/local/lsws/bin/lswsctrl stop

# Start server
/usr/local/lsws/bin/lswsctrl start
```

---

## 📦 Supabase Setup

### Current Project
- **Project ID:** `mplwseldejwxopoovhgz`
- **Project URL:** `https://mplwseldejwxopoovhgz.supabase.co`
- **API Key:** (stored in `src/integrations/supabase/client.ts`)

### Database Tables
- `customers` - Customer information
- `orders` - Order records with auto-generated order numbers
- `order_items` - Individual items in each order

### Edge Functions Deployed
1. **`process-order`** - Creates orders in database
2. **`get-pricing-info`** - Calculates cart totals and delivery fees
3. **`send-order-notification`** - Sends order notifications via webhook
4. **`contact-form`** - Handles contact form submissions

### Supabase Keep-Alive (Free Tier)
A cron job runs daily at 10 AM to ping Supabase and prevent auto-pause:

**Location:** `/root/supabase-keepalive.sh`
**Cron:** `0 10 * * * /root/supabase-keepalive.sh`
**Logs:** `/var/log/supabase-keepalive.log`

To check logs:
```bash
ssh root@84.247.150.90
tail -20 /var/log/supabase-keepalive.log
```

---

## 🏗️ Building & Deploying

### Local Build Process

1. **Install dependencies:**
```bash
npm install
```

2. **Build production:**
```bash
npm run build
```

This creates optimized files in `dist/` directory.

**Build includes:**
- ✅ `.htaccess` for React Router (OpenLiteSpeed compatible)
- ✅ Gzip compression configuration
- ✅ Browser caching rules (images: 1 year, CSS/JS: 1 month)
- ✅ Security headers (XSS protection, clickjacking prevention)
- ✅ Pre-rendered HTML files for SEO

### Deploy to VPS

**Using rsync (recommended):**
```bash
rsync -avz --delete --exclude="*.log" --exclude="node_modules" dist/ root@84.247.150.90:/usr/local/lsws/mercunmurah.com/html/
```

**Then restart server:**
```bash
ssh root@84.247.150.90 "/usr/local/lsws/bin/lswsctrl restart"
```

### Complete Deployment Script

```bash
# 1. Build
npm run build

# 2. Deploy
rsync -avz --delete dist/ root@84.247.150.90:/usr/local/lsws/mercunmurah.com/html/

# 3. Restart
ssh root@84.247.150.90 "/usr/local/lsws/bin/lswsctrl restart"
```

---

## 🌐 DNS & Cloudflare

### DNS Configuration
- **Domain:** mercunmurah.com
- **A Record:** `@` → `84.247.150.90`
- **Cloudflare Proxy:** ✅ Enabled (Orange cloud)

### SSL/HTTPS
- **Mode:** Cloudflare Flexible SSL
- **Certificate:** Auto-managed by Cloudflare
- **Force HTTPS:** Enabled

### Cloudflare Cache Management

**After deploying new code, ALWAYS purge Cloudflare cache:**

1. Go to: https://dash.cloudflare.com
2. Select `mercunmurah.com`
3. **Caching** → **Configuration**
4. Click **"Purge Everything"**
5. Confirm purge
6. Wait 30 seconds

**Or use Development Mode (bypasses cache for 3 hours):**
- Caching → Development Mode → Toggle ON

---

## 🛠️ Troubleshooting

### Issue: Old Files Loading After Deployment

**Cause:** Cloudflare cache not purged  
**Solution:**
1. Purge Cloudflare cache (see above)
2. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Or test in Incognito mode

### Issue: Cart Checkout Fails

**Check:**
1. Browser console for errors (F12)
2. Verify Supabase functions are deployed
3. Check Supabase function logs: https://supabase.com/dashboard/project/mplwseldejwxopoovhgz/functions

**Common causes:**
- Old cached JavaScript files (purge Cloudflare)
- Supabase function not deployed or has errors
- Database connection issues

### Issue: Images Not Loading

**Check:**
1. Cloudinary account is active: https://cloudinary.com
2. Images are using correct Cloudinary URLs
3. Check browser console for 401/403 errors

**Cloudinary Account:**
- Cloud name: `de8w3ykvy`
- All product images hosted on Cloudinary

### Issue: Supabase Paused (Free Tier)

**Cause:** No activity for 7 days  
**Solution:** Cron job already set up to ping daily

**Manual wake up:**
```bash
curl https://mplwseldejwxopoovhgz.supabase.co/rest/v1/
```

---

## 📝 Environment Variables

No `.env` file needed. Supabase credentials are hardcoded in:
- `src/integrations/supabase/client.ts`
- `supabase/config.toml`

---

## 🔄 Future Migrations

### To Update Supabase:
1. Update credentials in `src/integrations/supabase/client.ts`
2. Update project_id in `supabase/config.toml`
3. Rebuild and deploy

### To Change Hosting:
1. Update VPS IP in DNS A record
2. Deploy files to new server
3. Configure web server (OpenLiteSpeed or Nginx)
4. Update Cloudflare proxy if needed

---

## 📞 Support

For deployment issues, check:
- **Server Logs:** `/usr/local/lsws/logs/error.log`
- **Supabase Logs:** Supabase Dashboard → Functions → Logs
- **Browser Console:** F12 → Console tab

---

## ✅ Deployment Checklist

Before going live:
- [ ] Build completes without errors
- [ ] All Supabase functions deployed
- [ ] Database migrations applied
- [ ] Files uploaded to VPS
- [ ] Server restarted
- [ ] Cloudflare cache purged
- [ ] Test cart checkout
- [ ] Test contact form
- [ ] Verify images load
- [ ] Check mobile responsiveness

---

**Last Updated:** October 29, 2024  
**Current Version:** Production (Live on mercunmurah.com)
