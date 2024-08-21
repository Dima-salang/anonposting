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

      <div className="mx-5 my-4 grid grid-cols-12 gap-4">
      {children}
      </div>

      
      <footer className="mx-5">
        <p>Copyright @Luis</p>
      </footer>
      </body>
    </html>
  )
}
