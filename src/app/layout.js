import './globals.css'
import { oswaldFont, quicksandFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksandFont.className}>
        {children}
      </body>
    </html>
  )
}
