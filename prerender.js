import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes exactly as they appear in App.tsx
// Update this list when adding new pages/routes
const routesToPrerender = [
  '/',              // Index component
  '/fireworks',     // Fireworks component  
  '/packages',      // Packages component
  '/permits',       // Permits component
  '/testimonials',  // Testimonials component
  '/contact',       // Contact component
  '/cart',          // Cart component
  // Add new routes here when creating new pages:
  // '/blog',
  // '/blog/post-1',
  // '/about',
  // '/services/premium',
  // '/help/safety-guide',  // Example subdirectory route
]

// Helper function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

;(async () => {
  console.log('💰 Starting MercunMurah SSG Pre-rendering...')
  console.log(`📊 Total routes to render: ${routesToPrerender.length}`)
  console.log('=' * 50)
  
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace('<!--app-html-->', appHtml)

      // Generate file path
      let filePath;
      if (url === '/') {
        filePath = toAbsolute('dist/index.html')
      } else {
        filePath = toAbsolute(`dist${url}.html`)
      }

      // Ensure directory exists before writing
      ensureDirectoryExists(filePath)

      // Write the HTML file
      fs.writeFileSync(filePath, html)
      console.log(`✅ pre-rendered: dist${url === '/' ? '/index' : url}.html`)
      
    } catch (error) {
      console.log(`❌ Failed to render ${url}:`, error.message)
    }
  }
  
  console.log('=' * 50)
  console.log('💰 MercunMurah SSG Pre-rendering Complete!')
  console.log('🎉 Ready for deployment to mercunmurah.com')
})()