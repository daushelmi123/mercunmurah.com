// Contact Form Edge Function
// Handles contact form submissions and forwards to Boost.space webhook

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  timestamp?: string;
  userAgent?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();

    // Validate required fields
    if (!contactData.name || !contactData.phone || !contactData.email || !contactData.subject || !contactData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Processing contact form submission:', contactData.email);

    // Get webhook URL from environment variable or use default
    const webhookUrl = Deno.env.get('CONTACT_WEBHOOK_URL') || 'https://hook.integrator.boost.space/e7uqa9gp5bhvefooor5cq6kn57o7fssq';
    
    // Prepare payload for Boost.space webhook
    const payload = {
      name: contactData.name,
      phone: contactData.phone,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      source: contactData.source || 'Contact Form',
      timestamp: contactData.timestamp || new Date().toISOString(),
      userAgent: contactData.userAgent || 'Unknown',
    };

    // Send to Boost.space webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.status);
      return new Response(
        JSON.stringify({ error: 'Failed to send message' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contact form submission sent successfully:', contactData.email);

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});


