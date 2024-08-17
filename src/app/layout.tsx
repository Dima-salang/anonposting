import NavBar from "./_components/navbar"

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
      <body>
      <header>
        <NavBar />
      </header>

      {children}
      
      <footer>
        <p>Copyright @Luis</p>
      </footer>
      </body>
    </html>
  )
}
