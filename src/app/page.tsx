import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandPhp, TbCSharp } from 'react-icons/tb'
import { FaDocker, FaGitAlt, FaGithub, FaLaravel, FaNode, FaReact } from 'react-icons/fa'
import { SiAmazonaws, SiGithub, SiJquery, SiLinkedin, SiMysql, SiNestjs, SiTypescript, SiWhatsapp, SiXamarin } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { MdSmartphone } from 'react-icons/md'

const PortfolioFooter = () => <section id="copy" className='w-full p-12 md:p-16 bg-white text-black flex items-center justify-center'>
    <p>Criado por <a href="#">Igor Magno</a> © 2023 – Todos os direitos reservados</p>
</section>

const PagePortfolio = () => <>
    <main className='font-mono'>
        <div className='w-full h-16 border-b fixed z-20 top-0 left-0 bg-slate-50 text-black'>
            <ul className='h-full flex flex-wrap items-ecnter items-center justify-center md:justify-end md:pr-24 gap-4'>
                <li><a className='select-none cursor-pointer md:text-xl' href='#home'>INICIO</a></li>
                <li><a className='select-none cursor-pointer md:text-xl' href='#about'>SOBRE</a></li>
                <li><a className='select-none cursor-pointer md:text-xl' href='#skils'>CONHECIMENTOS</a></li>
                <li><a className='select-none cursor-pointer md:text-xl' href='#projects'>PROJETOS</a></li>
                <li><a className='select-none cursor-pointer md:text-xl' href='#contact'>CONTATO</a></li>
            </ul>
        </div>

        <section id='home' className='pt-16 w-screen h-full min-h-screen flex items-center justify-center' >
            <article>
                <p className='md:text-2xl font-medium tracking-wide'>👋 OLA, EU SOU</p>
                <h1 className='md:text-4xl font-bold tracking-wide'>IGOR MAGNO</h1>
                <h2 className='md:text-3xl font-bold tracking-wide underline'>DESENVOLVEDOR FULL STACK</h2>
                <p className='md:text-2xl font-medium tracking-wide'>WEB | MOBILE </p>
                <div className='flex gap-4 py-6'>
                    <a href='https://github.com/igor-magno' className='flex items-center justify-center gap-1 border border-white rounded-lg px-2 hover:border-orange-500 hover:text-orange-500 select-none'>
                        <SiGithub />
                        <span>GitHub</span>
                    </a>
                    <a href='https://www.linkedin.com/in/igor-magno-72853619a' className='flex items-center justify-center gap-1 border border-white rounded-lg px-2 hover:border-orange-500 hover:text-orange-500 select-none'>
                        <SiLinkedin />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </article>
        </section>

        <section id='about' className='pt-16 w-full md:w-screen h-full min-h-screen flex items-center justify-center' >
            <article className='p-8'>
                <h2 className='md:text-3xl font-bold tracking-wide'>SOBRE MIM</h2>
                <p className='md:text-2xl font-medium tracking-wide'>
                    Sou um desenvolvedor Full Stack com mais de 3 anos de experiência trabalhando com desenvolvimento web e mobile,
                    atualmente estou estudando sobre desempenho e usabilidade de aplicações.
                    E apesar de já ter conhecimento em algumas linguagens,
                    não sou limitado as mesmas, pois acredito que cada problema exige uma ferramenta especifica para sua melhor resolução.
                    Por fim, sou um apaixonado por tecnologia.</p>
            </article>
        </section>

        <section id='skils' className='pt-16 w-full h-full md:w-screen min-h-screen md:h-screen' >
            <article className='w-full h-full'>
                <div className='w-full flex items-center justify-center'>
                    <h2 className='md:text-3xl font-bold tracking-wide'>lINGUAGENS E TECNOLOGIAS</h2>
                </div>
                <div className='w-full h-full flex flex-wrap items-center justify-center gap-2'>
                    <TbBrandPhp className='w-16 h-16' />
                    <TbBrandJavascript className='w-16 h-16' />
                    <TbBrandHtml5 className='w-16 h-16' />
                    <TbBrandCss3 className='w-16 h-16' />
                    <TbCSharp className='w-16 h-16' />
                    <AiOutlineConsoleSql className='w-16 h-16' />
                    <SiTypescript className='w-16 h-16' />
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
            </article>
        </section>

        <section id='projects' className='pt-16 w-full h-full md:w-screen min-h-screen md:h-screen' >
            <article className='w-full h-full'>
                <div className='w-full flex items-center justify-center'>
                    <h2 className='text-3xl font-bold tracking-wide'>PROJETOS</h2>
                </div>
                <div className='w-full h-full flex flex-wrap items-center justify-center gap-2'>
                    <div className='w-4/5 md:w-1/5 h-96 bg-white text-black border-2 rounded-lg border-slate-200 shadow-md shadow-slate-300'>
                        <div className='w-full h-full flex items-center overflow-hidden'>
                            <div className='w-full flex justify-center bg-red-500 -rotate-45 scale-[2]'>EM BREVE</div>
                        </div>
                    </div>
                    <div className='w-4/5 md:w-1/5 h-96 bg-white text-black border-2 rounded-lg border-slate-200 shadow-md shadow-slate-300'>
                        <div className='w-full h-full flex items-center overflow-hidden'>
                            <div className='w-full flex justify-center bg-red-500 -rotate-45 scale-[2]'>EM BREVE</div>
                        </div>
                    </div>
                    <div className='w-4/5 md:w-1/5 h-96 bg-white text-black border-2 rounded-lg border-slate-200 shadow-md shadow-slate-300'>
                        <div className='w-full h-full flex items-center overflow-hidden'>
                            <div className='w-full flex justify-center bg-red-500 -rotate-45 scale-[2]'>EM BREVE</div>
                        </div>
                    </div>
                    <div className='w-4/5 md:w-1/5 h-96 bg-white text-black border-2 rounded-lg border-slate-200 shadow-md shadow-slate-300'>
                        <div className='w-full h-full flex items-center overflow-hidden'>
                            <div className='w-full flex justify-center bg-red-500 -rotate-45 scale-[2]'>EM BREVE</div>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <section id='contact' className='pt-16 w-full md:w-screen' >
            <article className='w-full h-full p-16'>
                <div className='w-full flex items-center justify-center'>
                    <h2 className='md:text-3xl font-bold tracking-wide'>CONTATO</h2>
                </div>
                <div className='w-full h-full flex justify-center gap-8'>
                    <ul className='gap-2'>
                        <li className='w-full flex justify-center'>
                            <span>igormagno.dev@gmail.com</span>
                        </li>
                        <li className='w-full flex items-center justify-center gap-2'>
                            <MdSmartphone />
                            <span>+55 38 9987-5695</span>
                        </li>
                        <li className='w-full flex items-center justify-center'>
                            <a href='https://api.whatsapp.com/send?phone=3899875695&text=' className='flex items-center justify-center gap-2 select-none hover:text-orange-500'>
                                <SiWhatsapp />
                                <span>Whatsapp</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    </main>
    <PortfolioFooter />
</>

export default PagePortfolio
