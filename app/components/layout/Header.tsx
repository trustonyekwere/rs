import Link from "next/link"
import ButtonLink from "../ui/Button"

export default function Header(){
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto max-w-6xl px-6 py-4">
                <nav className="flex items-center justify-between rounded-full bg-[#0B1324]/80 px-8 py-3 backdrop-blur-md border border-white/10">
                
                    {/* Logo */}
                    <Link href="/" className="text-lg font-semibold text-white">
                        <span className="text-orange-500">R.</span>Estate
                    </Link>

                    {/* Links */}
                    <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                        <li>
                        <Link href="/" className="hover:text-white transition">
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link href="/about" className="hover:text-white transition">
                            About us
                        </Link>
                        </li>
                        <li>
                        <Link href="/features" className="hover:text-white transition">
                            Feature
                        </Link>
                        </li>
                        <li>
                        <Link href="/property" className="hover:text-white transition">
                            Property
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog" className="hover:text-white transition">
                            Blog
                        </Link>
                        </li>
                    </ul>

                    {/* CTA */}
                    <ButtonLink text="Contact Us" href="/contact-us" />
                </nav>
            </div>
        </header>
    )
}
