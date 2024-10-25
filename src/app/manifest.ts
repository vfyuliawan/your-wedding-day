import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nvite Me App',
    short_name: 'Nvite Me',
    description: 'Nvite Me Progressif Web App',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/LogoNM.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/LogoNM.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}