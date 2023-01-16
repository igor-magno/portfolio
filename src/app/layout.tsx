import './globals.css'
import NavBar from './navebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen flex flex-col font-mono bg-slate-800 text-slate-50'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
