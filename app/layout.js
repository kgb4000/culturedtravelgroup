import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Napa Valley Wine Country Trip | Cultured Travel Group',
  description:
    "Indulge in a four-night, five-day journey in California's wine country. Get luxurious accommodations, gourmet meals, exclusive wine tastings, and more.",
  alternates: {
    canonical: 'https://culturedtravelgroup.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
