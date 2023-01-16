import Link from "next/link"
import { ReactNode } from "react"
import { GiSmartphone } from "react-icons/gi"

const NavConteiner = (props: { children: ReactNode }) => <div
    className="w-full border-b border-inherit shadow-md flex">
    <ul className="flex gap-4 pl-8">
        {props.children}
    </ul>
    <div className="w-full flex justify-end items-center pr-12">
        <GiSmartphone /><span className="select-none">+5538999875695</span>
    </div>
</div>

// text-sm text-base text-lg text-xl text-2xl
// sm md lg xl 2xl

const Text = (props: {children: string}) => <label className="text-lg select-none cursor-pointer">
{props.children}
</label>

const NavButton = (props: { title: string, href: string }) => <li>
    <Link href={props.href}
        className="">
        <Text>{props.title}</Text>
    </Link>
</li>

const NavBar = () => <NavConteiner>
    <NavButton href="../" title="Home" />
    <NavButton href="../about" title="About" />
    <NavButton href="../resume" title="Resume" />
    <NavButton href="../portfolio" title="Portfolio" />
</NavConteiner>

export default NavBar
