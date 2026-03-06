import './globals.css'

export const metadata = {
  title: '24 HOURS',
  description: 'One subject. One day. Twenty-four minutes.',
  openGraph: {
    title: '24 HOURS',
    description: 'One subject. One day. Twenty-four minutes.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
