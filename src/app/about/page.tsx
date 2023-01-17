import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type User = {
  avatar_url: string
  name: string
  company: string
  bio: string
}

const GetData = async () => {
  const response = await fetch('https://api.github.com/users/igor-magno')
  return response.json() as unknown as User
}

const About = async () => {

  const user = await GetData()

  console.log(user)

  return (
    <main className='w-full h-full '>
      <div className='w-full h-full md:flex'>
        <div className='w-full h-1/2 md:h-full flex items-center justify-center'>
          <img
            src={user.avatar_url}
            className='h-48 md:h-96 rounded-full'
          />
        </div>
        <div className='w-full h-1/2 md:h-full flex items-center justify-center'>
          {user.name}
          <p>{user.bio}</p>
        </div>
      </div>
    </main>
  )
}
export default About
