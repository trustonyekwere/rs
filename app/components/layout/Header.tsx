"use client"

import { useState } from "react";
import Link from "next/link"
import ButtonLink from "../ui/Button"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import { XIcon } from "lucide-react"

export default function Header(){
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto max-w-6xl px-6 py-4">
                <nav className="flex items-center justify-between rounded-full bg-[#0B1324]/80 px-8 py-4 md:py-3 backdrop-blur-md border border-white/10">
                
                    {/* Logo */}
                    <Link href="#hero" className="text-lg font-bold text-white">
                        <span className="text-orange-500 font-black">R.</span>Estate
                    </Link>

                    {/* Links */}
                    <ul className="hidden md:flex items-center gap-10 text-md text-gray-300">
                        <li>
                            <Link href="#hero" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="hover:text-white transition">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="#features" className="hover:text-white transition">
                                Feature
                            </Link>
                        </li>
                        <li>
                            <Link href="#property" className="hover:text-white transition">
                                Property
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog" className="hover:text-white transition">
                                Blog
                            </Link>
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:flex">
                        <ButtonLink text="Contact Us" href="/contact-us" />
                    </div>

                    {/* HAMBURGER */}
                    <button 
                        onClick={() => setOpen(!open)}
                        className="flex md:hidden cursor-pointer transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {open ? <XIcon size={28} color="white" /> : <Bars3BottomRightIcon className="size-8" />}
                        
                    </button>
                </nav>

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden absolute left-0 w-full bg-[#0B1324]/80 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden
                    ${open ? "max-h-screen py-4" : "max-h-0"}`}
                >
                    <ul className="flex flex-col text-end gap-6 px-12 text-[15px] font-medium text-gray-300">
                        <li>
                            <Link href="#hero" onClick={() => setOpen(false)} className="hover:text-white transition">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="#about" onClick={() => setOpen(false)} className="hover:text-white transition">
                                About us
                            </Link>
                        </li>

                        <li>
                            <Link href="#features" onClick={() => setOpen(false)} className="hover:text-white transition">
                                Feature
                            </Link>
                        </li>

                        <li>
                            <Link href="#property" onClick={() => setOpen(false)} className="hover:text-white transition">
                                Property
                            </Link>
                        </li>

                        <li>
                            <Link href="#blog" onClick={() => setOpen(false)} className="hover:text-white transition">
                                Blog
                            </Link>
                        </li>

                        <li className="pt-2">
                            <ButtonLink text="Contact Us" href="/contact-us" />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
