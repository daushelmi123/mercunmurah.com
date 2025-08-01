# MercunMurah Changelog

## 2025-08-01 - Share Button Fix

### Fixed
- **Share Button URLs**: Removed Cloudinary URL hash injection from ShareButton component
- **Clean URLs**: Share functionality now generates clean URLs without `#image=` parameters
- **Native Share**: Maintained native share API functionality for mobile devices
- **Fallback Support**: Preserved clipboard and WhatsApp fallback functionality

### Changes Made
- Modified `src/components/ShareButton.tsx`:
  - Removed lines 33-35 that added `#image=${encodeURIComponent(image)}` to share URLs
  - Kept native `navigator.share` API functionality
  - Maintained fallback to clipboard copy and WhatsApp sharing

### Before
```typescript
if (image) {
  shareData.url = `${url}#image=${encodeURIComponent(image)}`;
}
```

### After
```typescript
// Image parameter removed to keep URLs clean for sharing
```

### Result
- Share URLs are now clean: `https://mercunmurah.com/fireworks?product=27`
- No more long Cloudinary hashes in shared links
- Native share functionality preserved for mobile devices
- Better user experience when sharing product links

---

## Deployment Notes
- Built with `npm run build`
- Deployed to mercunmurah.com via FTP
- Updated og:url meta tag to correct domain
- Maintained all tracking pixels (Google Analytics, Facebook, TikTok)