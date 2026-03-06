export const metadata = {
  title: '24 HOURS',
  description: 'One subject. One day. Twenty-four minutes.',
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: '24 HOURS',
    description: 'One subject. One day. Twenty-four minutes.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24 HOURS',
    description: 'One subject. One day. Twenty-four minutes.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
