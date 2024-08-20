import NavBar from "./_components/navbar"

import './globals.css';

export const metadata = {
  title: 'AnonPosting',
  description: 'Website for anonymous posting for fun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-stone-800 text-white font-mono">
      <header>
        <NavBar />
      </header>

      <div className="container mx-auto grid grid-cols-6">
      {children}
      </div>

      
      <footer>
        <p>Copyright @Luis</p>
      </footer>
      </body>
    </html>
  )
}
