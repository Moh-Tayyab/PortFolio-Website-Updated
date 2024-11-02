import Navbar from '@/components/Navbar';
import './globals.css';
export const metadata = {
  title: "Portfolio Website",
  description: 'A showcase of my web development and design projects, focusing on responsive design, UI/UX, and performance.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className='relaive w-full flex items-center justify-center'>
        <Navbar /> 
      </div>
        </header>
        <main> {children} </main>
        </body>
    </html>
  )
}
