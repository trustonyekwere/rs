import Image from "next/image"
import {CheckCircle} from "lucide-react"
import ButtonLink from "../ui/Button"

export default function About() {
    return (
        <>
            <section className="relative bg-[#050B1C] pt-30 pb-15" id="about">
                <div className="mx-auto max-w-6xl px-6 pb-7">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">

                        <div className="relative h-100 lg:w-120 w-full overflow-hidden rounded-tl-lg rounded-tr-4xl rounded-br-lg rounded-bl-md">
                            <Image
                                src="/about.jpg"
                                alt="About Us"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div>
                            <p className="text-orange-500 text-lg">About Us</p>
                            <h1 className="text-5xl font-bold py-5">Your Trusted Partner in Real Estate</h1>
                            <div className="my-5 pb-3 space-y-5 text-gray-400">
                                <div className="flex space-x-4">
                                    <div className="text-orange-500">
                                        <CheckCircle />
                                    </div>
                                    <p className="text-md">At R.Estate, we strive to redefine real estate services and make your property dreams a reality.</p>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="text-orange-500">
                                        <CheckCircle />
                                    </div>
                                    <p className="text-md">Let's unlock the endless possibilities that the real estate market has to offer.</p>
                                </div>
                            </div>
                            <ButtonLink text="Read More" href="/read-more" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
