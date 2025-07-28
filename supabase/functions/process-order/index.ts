console.log('Function file loaded');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log('CORS headers defined');

Deno.serve(async (req) => {
  console.log('Request received:', req.method);

  if (req.method === 'OPTIONS') {
    console.log('Returning CORS response');
    return new Response(null, { headers: corsHeaders });
  }

  console.log('Processing POST request');

  try {
    console.log('Reading request body');
    const body = await req.text();
    console.log('Body length:', body.length);

    let parsed;
    try {
      parsed = JSON.parse(body);
      console.log('JSON parsed successfully');
    } catch (e) {
      console.log('JSON parse failed:', e.message);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Returning success');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Minimal test successful',
        bodyReceived: true
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});