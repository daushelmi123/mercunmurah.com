# Production Checklist untuk mercunmurah.com

## ✅ Yang Sudah Sesuai
- ✅ Supabase configuration (project ID: ydhvpmgldkajebfdahxh)
- ✅ Contact info (email: info@mercunmurah.com, phone: +60137340415)
- ✅ WhatsApp number configured
- ✅ Business constants dan social links

## ⚠️ Yang Perlu Diperbarui untuk Production

### 1. Tracking Pixels
File: `index.html`

**Google Analytics:**
```html
<!-- Ganti G-XXXXXXXXXX dengan Google Analytics ID yang sebenarnya -->
gtag('config', 'G-XXXXXXXXXX');
gtag('config', 'AW-XXXXXXXXX'); // Google Ads Conversion ID
```

**Facebook Pixel:**
```html
<!-- Ganti 1234567890123456 dengan Facebook Pixel ID yang sebenarnya -->
fbq('init', '1234567890123456');
```

**TikTok Pixel:**
```html
<!-- Ganti XXXXXXXXXXXXXXXXX dengan TikTok Pixel ID yang sebenarnya -->
ttq.load('XXXXXXXXXXXXXXXXX');
```

### 2. Contact Form Function
✅ **Dibuat:** `supabase/functions/contact-form/index.ts`
- Function sudah dibuat dan siap digunakan
- Pastikan untuk deploy function ini ke Supabase dengan command:
  ```bash
  supabase functions deploy contact-form
  ```

### 3. Environment Variables di Supabase
Pastikan environment variable berikut sudah di-set di Supabase Dashboard:

**Untuk `contact-form` function:**
- `CONTACT_WEBHOOK_URL` (optional, default sudah menggunakan webhook dari BACKEND_API_SPEC.md)

**Untuk `send-order-notification` function:**
- `WEBHOOK_URL` (required)

### 4. OG URL
✅ **Diperbarui:** Sudah diganti dari `mercun-meriah-shop.lovable.app` ke `mercunmurah.com`

### 5. Build Configuration
Pastikan build untuk production menggunakan:
```bash
npm run build
```

Output akan di folder `dist/` yang siap diupload ke VPS.

### 6. CORS Configuration
Jika perlu, pastikan Supabase Edge Functions sudah dikonfigurasi untuk allow requests dari domain `mercunmurah.com`.

## Langkah Deployment

1. **Update Tracking IDs** di `index.html`
2. **Deploy Supabase Functions:**
   ```bash
   supabase functions deploy contact-form
   supabase functions deploy process-order
   supabase functions deploy send-order-notification
   supabase functions deploy get-pricing-info
   ```

3. **Set Environment Variables** di Supabase Dashboard:
   - `WEBHOOK_URL` untuk order notifications
   - `CONTACT_WEBHOOK_URL` (optional untuk contact form)

4. **Build Project:**
   ```bash
   npm run build
   ```

5. **Deploy ke VPS:**
   ```bash
   npm run deploy
   ```
   atau
   ```bash
   ./deploy.sh
   ```

6. **Konfigurasi Nginx/Apache** di VPS untuk:
   - Serve static files dari `/var/www/html`
   - Redirect semua routes ke `index.html` (untuk React Router)
   - SSL certificate untuk HTTPS (recommended)

7. **Verifikasi:**
   - Test contact form
   - Test order submission
   - Test WhatsApp button
   - Test semua routes

## Catatan Penting

- Pastikan file `.env.local` dengan VPS credentials TIDAK di-commit ke git
- Tracking pixels perlu diupdate dengan ID yang sebenarnya
- Test semua functionality setelah deployment
- Setup SSL certificate untuk HTTPS (Let's Encrypt recommended)


