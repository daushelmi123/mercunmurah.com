# Backend API Specification for Contact Form

## Endpoint Required

**POST `/api/contact`**

## Request Data Structure

The frontend will send this JSON payload:

```json
{
  "name": "John Doe",
  "phone": "+60123456789", 
  "email": "john@example.com",
  "subject": "product-inquiry", // or "permit-help", "bulk-order", "complaint", "other"
  "message": "Customer message here...",
  "source": "Contact Form",
  "timestamp": "2024-07-29T10:30:00.000Z",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)..."
}
```

## Subject Options

Frontend sends these values:
- `product-inquiry` - Product Inquiry / Pertanyaan Produk
- `permit-help` - Permit Assistance / Bantuan Permit  
- `bulk-order` - Bulk Order / Pesanan Borong
- `complaint` - Complaint / Aduan
- `other` - Other / Lain-lain

## Your Backend Should:

1. **Receive POST request** at `/api/contact`
2. **Validate data** (required fields, email format, etc.)
3. **Sanitize input** (prevent XSS, SQL injection)
4. **Send to Boost.space webhook**:
   ```
   POST https://hook.integrator.boost.space/e7uqa9gp5bhvefooor5cq6kn57o7fssq
   ```
5. **Return response**:
   - Success: `200 OK`
   - Error: `400/500 with error message`

## Example Backend Code (Node.js/Express)

```javascript
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Send to Boost.space webhook
    const webhookResponse = await fetch('https://hook.integrator.boost.space/e7uqa9gp5bhvefooor5cq6kn57o7fssq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    
    if (webhookResponse.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
```

## Security Considerations

- Rate limiting (prevent spam)
- Input validation & sanitization
- CORS setup for your domain
- Environment variable for webhook URL
- Request size limits
- IP whitelisting (optional)