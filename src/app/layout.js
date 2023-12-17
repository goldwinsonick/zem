import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './component/NavBar'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZEM',
  description: 'Zen Every Moment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}