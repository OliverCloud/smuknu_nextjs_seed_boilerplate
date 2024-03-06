import './globals.css'
import { oswaldFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswaldFont.className}>
        <span>[root layout]</span>
        {children}
      </body>
    </html>
  )
}
