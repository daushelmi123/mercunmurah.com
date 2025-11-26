# 🎆 MercunMurah.com

Premium fireworks e-commerce platform for Malaysia. Built with React, TypeScript, and Supabase.

🌐 **Live Site:** [mercunmurah.com](https://mercunmurah.com)

---

## 🚀 Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **UI Library:** shadcn/ui + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Edge Functions)
- **Hosting:** VPS with OpenLiteSpeed
- **CDN:** Cloudflare
- **Images:** Cloudinary

---

## ✨ Features

- 🛒 **Shopping Cart** - Full cart management with quantity controls
- 💰 **Dynamic Pricing** - Server-side pricing calculation via Supabase Edge Functions
- 📦 **Order Management** - Complete order processing with auto-generated order numbers
- 🌐 **Bilingual** - English & Bahasa Malaysia support
- 📱 **Responsive** - Mobile-first design
- 🎨 **Modern UI** - Beautiful animations and festive themes
- 🖼️ **Product Gallery** - High-quality firework product images
- 📧 **Contact Form** - Integrated contact form with webhook notifications
- 🚚 **Delivery Calculation** - Smart delivery fee based on cart total

---

## 📁 Project Structure

```
mercunmurah-source-code/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts (Cart, Language)
│   ├── hooks/          # Custom hooks
│   ├── integrations/   # Supabase integration
│   └── data/           # Product data
├── supabase/
│   ├── functions/      # Edge Functions
│   └── migrations/     # Database migrations
├── public/             # Static assets
└── dist/               # Production build
```

---

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone repository
git clone https://github.com/daushelmi123/mercunmurah.com.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📦 Supabase Setup

### Database Tables
- `customers` - Customer information
- `orders` - Order records
- `order_items` - Order line items

### Edge Functions
1. `process-order` - Order creation
2. `get-pricing-info` - Pricing calculation
3. `send-order-notification` - Order notifications
4. `contact-form` - Contact form handler

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete setup instructions.

---

## 🚢 Deployment

Detailed deployment guide available in [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick Deploy:**
```bash
# Build
npm run build

# Deploy to VPS
rsync -avz dist/ root@84.247.150.90:/usr/local/lsws/mercunmurah.com/html/

# Restart server
ssh root@84.247.150.90 "/usr/local/lsws/bin/lswsctrl restart"

# Purge Cloudflare cache
# (via Cloudflare Dashboard)
```

---

## 📚 Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Complete deployment guide
- [BACKEND_API_SPEC.md](BACKEND_API_SPEC.md) - API specifications
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

## 🤝 Contributing

This is a private commercial project. For inquiries, contact the repository owner.

---

## 📝 License

Proprietary - All rights reserved

---

## 📞 Support

For technical issues or questions:
- Check [DEPLOYMENT.md](DEPLOYMENT.md) troubleshooting section
- Review Supabase function logs
- Check browser console for client-side errors

---

**Built with ❤️ for the fireworks community in Malaysia** 🇲🇾
