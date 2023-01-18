import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandPhp, TbCSharp } from 'react-icons/tb'
import { FaDocker, FaGitAlt, FaGithub, FaLaravel, FaNode, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiAmazonaws, SiJquery, SiMysql, SiNestjs, SiTypescript, SiXamarin } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { } from 'react-icons/tb'

const Home = () => <main className='font-mono bg-black'>
    <div className='w-full h-12 border-b fixed z-20 top-0 left-0 bg-slate-50'>
        <ul className='h-full flex items-center justify-center md:justify-end md:pr-24 gap-4'>
            <li><a className='select-none cursor-pointer text-xl' href='#home'>PRINCIPAL</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#about'>SOBRE</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#langs'>LINGUAGENS</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#tecs'>TECNOLOGIAS</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#projects'>PROJETOS</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#contact'>CONTATO</a></li>
        </ul>
    </div>
    <section id='home' className='h-screen pt-12 flex items-center'>
        <div className='w-full flex justify-center bg-white text-black rounded-r-full'>
            <div className='p-4'>
                <p className='text-2xl font-medium tracking-wide'>👋 OLA, EU SOU</p>
                <h1 className='text-4xl font-bold tracking-wide'>IGOR MAGNO</h1>
                <h2 className='text-3xl font-bold tracking-wide underline'>DESENVOLVEDOR FULL STACK</h2>
                <p className='text-2xl font-medium tracking-wide'>WEB | MOBILE </p>
            </div>
        </div>
        <div className='w-full flex justify-center'></div>
    </section>
    <section id='about' className='h-screen pt-12 flex items-center'>
        <div className='w-2/3 flex justify-center'>
            <div className='p-4'>
                <h2 className='text-3xl font-bold tracking-wide'>SOBRE MIM</h2>
                <p className='text-2xl font-medium tracking-wide'>
                    Sou um desenvolvedor Full Stack com mais de 3 anos de experiência trabalhando com desenvolvimento web e mobile,
                    atualmente estou estudando sobre desempenho e usabilidade de aplicações.
                    E apesar de já ter conhecimento em algumas linguagens,
                    não sou limitado as mesmas, pois acredito que cada problema exige uma ferramenta especifica para sua melhor resolução.
                    Por fim, sou um apaixonado por tecnologia.</p>
            </div>
        </div>
        <div className='w-1/3 flex justify-center'></div>
    </section>
    <div className='flex'>
        <section id='langs' className='w-full h-screen pt-12 flex items-center justify-center'>
            <div>
                <h2>LINGUAGENS (Em breve)</h2>
                <div className='columns-4 gap-12'>
                    <TbBrandPhp className='w-16 h-16' />
                    <TbBrandJavascript className='w-16 h-16' />
                    <TbBrandHtml5 className='w-16 h-16' />
                    <TbBrandCss3 className='w-16 h-16' />
                    <TbCSharp className='w-16 h-16' />
                    <AiOutlineConsoleSql className='w-16 h-16' />
                    <SiTypescript className='w-16 h-16' />
                </div>
            </div>
        </section>
        <section id='tecs' className='w-full h-screen pt-12 flex items-center justify-center'>
            <div>
                <h2>TECNOLOGIAS (Em breve)</h2>
                <div className='columns-4 gap-12'>
                    <FaLaravel className='w-16 h-16' />
                    <SiMysql className='w-16 h-16' />
                    <SiJquery className='w-16 h-16' />
                    <FaReact className='w-16 h-16' />
                    <FaNode className='w-16 h-16' />
                    <SiNestjs className='w-16 h-16' />
                    <TbBrandNextjs className='w-16 h-16' />
                    <SiXamarin className='w-16 h-16' />
                    <SiAmazonaws className='w-16 h-16' />
                    <FaDocker className='w-16 h-16' />
                    <FaGitAlt className='w-16 h-16' />
                    <FaGithub className='w-16 h-16' />
                </div>
            </div>
        </section>
    </div>
    <section id='projects' className='h-screen pt-12 flex justify-center'>
        <h2>PROJETOS (Em breve)</h2>
    </section>
    <section id='contact' className='pt-12 flex items-center justify-center'>
        <h2>CONTATO (Em breve)</h2>
    </section>
</main>

export default Home
