import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aplikasi Nvite Me',
    short_name: 'Nvite Me',
    description: 'Nvite Me adalah Aplikasi Web Progresif yang dirancang untuk mempermudah perencanaan acara dan undangan, sehingga lebih mudah mengumpulkan teman dan keluarga Anda.',
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
    orientation: 'portrait', // Tentukan orientasi yang diinginkan
    lang: 'id-ID', // Tentukan bahasa untuk aksesibilitas yang lebih baik
    shortcuts: [
      {
        name: 'Buat Acara',
        short_name: 'Acara Baru',
        url: '/create-event',
        icons: [
          {
            src: '/icons/create-event-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Lihat Acara',
        short_name: 'Acara Saya',
        url: '/my-events',
        icons: [
          {
            src: '/icons/view-events-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
  };
}
