import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return <main className='w-full h-full flex'>
    <div className='w-full h-full flex flex-col'>
      <div className='w-full h-full flex items-center pl-24'>
        <div className='w-1/2 flex flex-col gap-5'>
          <div className='flex flex-col '>
            <label className='text-xl font-semibold tracking-wide leading-none'>IGOR</label>
            <label className='text-2xl font-extrabold tracking-wide leading-none'>MAGNO</label>
            <label className='text-lg tracking-wide leading-none'>Full Stack Developer</label>
          </div>
          <div className='flex gap-4'>
            <Link
              href="../resume"
              className='text-base border rounded border-white leading-none p-1 select-none cursor-pointer'
            >Resume</Link>
            <Link
              href="../portfolio"
              className='text-base border rounded border-white leading-none p-1 select-none cursor-pointer'
            >Portfolio</Link>
          </div>
        </div>
      </div>
      <div className='w-full pl-12'>
        {/* Ícones com links para redes sociais */}
      </div>
    </div>
    <div className='w-full'>
      {/* Conteúdo animado ainda a ser definido */}
    </div>
  </main>
}
