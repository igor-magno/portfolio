const Home = () => <main className='font-mono'>
    <div className='w-full h-12 border-b fixed z-20 top-0 left-0 bg-slate-50'>
        <ul className='h-full flex items-center justify-center md:justify-end md:pr-24 gap-4'>
            <li><a className='select-none cursor-pointer text-xl' href='#home'>Principal</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#about'>Sobre</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#skils'>Abilidades</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#projects'>Projetos</a></li>
            <li><a className='select-none cursor-pointer text-xl' href='#contact'>Contatos</a></li>
        </ul>
    </div>
    <section id='home' className='h-screen pt-12 bg-black text-white flex items-center'>
        <div className='w-full flex justify-center'>
            <div>
                <p className='text-2xl font-medium tracking-wide'>👋 OLA, EU SOU</p>
                <h1 className='text-4xl font-bold tracking-wide'>IGOR MAGNO</h1>
                <h2 className='text-3xl font-bold tracking-wide underline'>DESENVOLVEDOR FULL STACK</h2>
                <p className='text-2xl font-medium tracking-wide'>WEB | MOBILE </p>
            </div>
        </div>
        <div className='w-full flex justify-center'>

        </div>
    </section>
    <section id='about' className='h-screen pt-12 bg-black text-white'>
        <h2>SOBRE MIM (Em breve)</h2>
    </section>
    <section id='skils' className='h-screen pt-12 bg-white text-black'>
        <h2>ABILIDADES (Em breve)</h2>
    </section>
    <section id='projects' className='h-screen pt-12 bg-black text-white'>
        <h2>PROJETOS (Em breve)</h2>
    </section>
    <section id='contact' className='h-screen pt-12 bg-white text-black'>
        <h2>CONTATO (Em breve)</h2>
    </section>
</main>

export default Home
