import Image from "next/image"
import { Play, HeartIcon } from "lucide-react"
import ButtonLink from "../ui/Button"

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[#050B1C] pt-32" id="hero">
            <div className="mx-auto max-w-6xl px-6 pb-7">

                {/* Main Grid */}
                <div className="grid items-center gap-12 md:grid-cols-1 lg:grid-cols-2">

                    {/* Left */}
                    <div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                            Expert Realtors
                            <br />
                            Dedicated to Your
                            <br />
                            <span className="text-orange-500">Success</span>
                        </h1>

                        <p className="mb-8 max-w-lg text-gray-400 leading-7.5 text-md">
                        With a passion for helping you find your dream home, we're
                        committed to providing expert guidance and personalized
                        support throughout your property journey.
                        </p>

                        {/* Buttons */}
                        <div className="mb-10 flex items-center gap-4">
                            <ButtonLink text="Get Started" href="/get-started" />

                            <button className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                                <Play size={16} />
                                </span>
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">5K+</h3>
                            <p className="text-sm text-gray-400">Happy Customer</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">7K+</h3>
                            <p className="text-sm text-gray-400">Property Sales</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white">50+</h3>
                            <p className="text-sm text-gray-400">Award</p>
                        </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative end">
                        <div className="relative h-100 lg:w-120 w-full overflow-hidden rounded-tl-4xl rounded-tr-lg rounded-br-lg rounded-bl-md">
                            <Image
                                src="/building.jpg"
                                alt="Building"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="lg:block hidden absolute top-55 right-5 rounded-xl bg-[#0B1324]/90 p-3 backdrop-blur border border-white/10 w-45">
                            <div className="justify-center items-center flex">
                                <Image
                                    src="/interior.jpg" 
                                    alt="home interior"
                                    width={160}    
                                    height={100}    
                                    className="rounded-xl mb-2"
                                    priority
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="bg-white/10 rounded-full px-3 py-1 w-fit my-1">
                                    <p className="text-xs text-orange-300">Family</p> 
                                </div>
                                <div className="bg-white/10 rounded-full p-2 w-fit my-1">
                                    <p className="text-xs text-gray-400">
                                        <HeartIcon size={15} className="text-red-500 fill-red-500 cursor-pointer" />
                                    </p> 
                                </div>
                            </div>
                            <p className="text-xs mt-1 text-white font-medium">
                                326 Vine St #261, Seattle, WA 85141
                            </p>
                        </div>
                    </div>

                    </div>

                    {/* Logos */}
                    <div className="mt-24 border-t border-white/10 py-14">
                        <p className="mb-6 text-center font-semibold text-2xl text-gray-300 py-4">
                            Trusted by 20000+ companies
                        </p>

                        <div className="flex flex-wrap justify-center gap-18">
                            <span>
                                <Image
                                    src="/google.png"
                                    alt="Google"
                                    width={120}    
                                    height={0}    
                                    className="object-cover"
                                    priority
                                />
                            </span>
                            <span>
                                <Image
                                    src="/slack.png"
                                    alt="Slack"
                                    width={120}    
                                    height={0}    
                                    className="object-cover"
                                    priority
                                />
                            </span>
                            <span>
                                <Image
                                    src="/Airbnb.png"
                                    alt="Airbnb"
                                    width={120}    
                                    height={0}    
                                    className="object-cover"
                                    priority
                                />
                            </span>
                            <span>
                                <Image
                                    src="/Amazon.png"
                                    alt="Amazon"
                                    width={120}    
                                    height={0}    
                                    className="object-cover"
                                    priority
                                />
                            </span>
                            <span>
                                <Image
                                    src="/Netflix.png"
                                    alt="Netflix"
                                    width={120}    
                                    height={0}    
                                    className="object-cover"
                                    priority
                                />
                            </span>
                        </div>
                </div>

            </div>
        </section>
    )
}
