import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="bg-slate-600 px-5 py-5 shadow-xl">
            <ul className="inline">
                <li className='inline px-3'><Link className="py-3" href='/'>Home</Link></li>
                <li className='inline px-3'><Link className="py-3" href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}