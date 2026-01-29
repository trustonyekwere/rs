import {FacebookIcon, InstagramIcon, TwitterIcon} from "lucide-react"
import Link from "next/link"
import ButtonLink from "../ui/Button"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className="bg-[#050B1C]">
                <div className="mx-auto max-w-6xl px-6 pt-18 pb-5">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6">
                        <div>
                            {/* Logo */}
                            <Link href="#hero" className="text-xl font-bold text-white">
                                <span className="text-orange-500 font-black">R.</span>Estate
                            </Link>
                            <p className="mt-2 text-gray-300">With a commitment to excellence, we're here to guide you through every step of your real estate journey.</p>
                            <div className="mt-4">
                              <ButtonLink text="Get Started" href="/get-started" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Explore</h1>
                            <ul className="text-gray-400 space-y-1 mt-2">
                              <li><a href="#features" className="hover:text-gray-300">Sell Your Home</a></li>
                              <li><a href="#features" className="hover:text-gray-300">Rent A Home</a></li>
                              <li><a href="#features" className="hover:text-gray-300">Buy A Home</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Services</h1>
                            <ul className="text-gray-400 space-y-1 mt-2">
                              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
                              <li><a href="#property" className="hover:text-gray-300">Property</a></li>
                              <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-semibold text-xl">Contact Us</h1>
                            <ul className="text-gray-400 space-y-1 mt-2">
                              <li><a href="https://wa.me/+2348108212511" className="hover:text-gray-300">+234 810 821 2511</a></li>
                              <li><a href="mailto:trustonyekwere151@gmail.com" className="hover:text-gray-300">trustonyekwere151@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="border-t flex justify-center items-center pt-6 text-gray-500">
                      <p>&copy; {currentYear} Real Estate. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}