import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Newsletter',
  description: 'Created by Tushar Biswas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:bg-DarkSlateGrey md:flex md:flex-col 
      md:items-center md:justify-center md:min-h-[100vh]`}>{children}</body>
    </html>
  )
}
