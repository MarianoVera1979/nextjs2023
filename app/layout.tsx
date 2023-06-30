import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sitio de Perritos',
  description: 'Practicando NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
     
      <body className={inter.className}>

      <div className='contenedor'>
        <Nav />        
        {children}
        <Footer />
      </div>
        </body>
    </html>
  )
}
