"use client"


import Image from "next/image"
import {HeartIcon, BathIcon, RulerIcon, BedSingleIcon, UserCircleIcon, Star} from "lucide-react"
import ButtonLink from "../ui/Button"

const testimonials = [
    {
        // icon: House,
        title: "Morgan Rogers",
        description: "Happy Customer"
    },
    {
        // icon: Coins,
        title: "James Barry",
        description: "Creative Director"
    },
    {
        // icon: HandshakeIcon,
        title: "David Ise",
        description: "CEO, FIFPRO"
    },
]

export default function About() {
    return (
        <>
            <section className="relative bg-[#050B1C] py-10 pb-15">
                <div className="mx-auto max-w-6xl px-6 pb-7 py-10">

                    <div className="justify-center items-center text-center">
                        <p className="text-orange-500 text-lg">Our Testimonials</p>
                        <h1 className="text-3xl md:text-5xl font-bold py-5">What Our Clients Say About Us</h1>
                        <p className="text-lg pb-5 text-gray-400">Testimonials from satisfied customers can be a powerful tool to build trust and credibility for your real estate website.</p>
                    </div>

                    <div className="justify-center items-center flex">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {/* Feature cards */}
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.title}
                                    className="bg-[#0c142c] h-auto w-full rounded-2xl justify-center items-center py-4 px-4"
                                >
                                    <div className="justify-center items-center flex mb-4">
                                        <div className="bg-[#070d21] rounded-2xl justify-center items-center py-5 px-6">
                                            <div className="flex mb-4 space-x-1">
                                                <Star className=" fill-amber-500 text-amber-500" size={16} />
                                                <Star className=" fill-amber-500 text-amber-500" size={16} />
                                                <Star className=" fill-amber-500 text-amber-500" size={16} />
                                                <Star className=" fill-amber-500 text-amber-500" size={16} />
                                                <Star className=" fill-amber-500 text-amber-500" size={16} />
                                            </div>
                                            <p className="text-sm text-white">
                                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae animi tenetur tempore doloremque voluptate quam ex. Voluptatem, facilis recusandae. Laudantium!"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-start items-center space-x-3 py-3">
                                        <p className="text-xs text-gray-400">
                                            <UserCircleIcon strokeWidth={1.5} size={45} />
                                        </p> 
                                        <div className="flex flex-col">
                                            <h1 className="text-lg text-gray-300 font-semibold">
                                                {testimonial.title}
                                            </h1>
                                            <p className="text-sm text-gray-400">
                                                {testimonial.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
