"use client"

import { BathIcon, BedSingleIcon, RulerIcon, HeartIcon} from "lucide-react"
import ButtonLink from "../ui/Button"
import Image from "next/image"
import { useState } from "react"

const listing = [
    {
        // icon: House,
        title: "$95,400",
        description: "Mansion 1"
    },
    {
        // icon: Coins,
        title: "$65,800",
        description: "Mansion 2"
    },
    {
        // icon: HandshakeIcon,
        title: "$82,500",
        description: "Bungalow 1"
    },
]

const Listing = () => {
    // Initialize state to false
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the state value
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="bg-white py-10" id="property">
            <div className="mx-auto max-w-6xl px-6 pb-7 bg-white py-10">

                <div className="flex items-center">
                    <div>
                        <h1 className="text-5xl text-[#050B1C] font-bold mb-3">Listing we think you'll love</h1>
                        <p className="text-gray-500 max-w-[70%] text-lg">Welcome to our exquisite collection of properties that define luxury living at it's finest. We've curated the best properties for you.</p>
                    </div>
                    <div className="shrink-0">
                        <ButtonLink text="View All Listing" href="/listing" />
                    </div>
                </div>

                <div className="justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                        {/* Feature cards */}
                        {listing.map((listing) => (
                            <div
                                key={listing.title}
                                className="bg-[#050B1C] h-auto w-full rounded-3xl justify-center items-center py-5 px-5 hover:scale-105 transition-all duration-400"
                            >
                                <div className="justify-center items-center flex">
                                    <Image
                                        src="/interior.jpg" 
                                        alt="home interior"
                                        width={400}    
                                        height={100}    
                                        className="rounded-xl mb-2"
                                        priority
                                    />
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <h1 className="text-2xl font-semibold">
                                        {listing.title}
                                    </h1>
                                    <div className="bg-white/10 rounded-full px-2 py-2 w-fit my-1 cursor-pointer">
                                        <p className="text-xs text-gray-400">
                                            <HeartIcon size={20} onClick={handleClick} className={`text-red-500 ${ isActive ? 'fill-red-500' : 'fill-transparent'}`} />
                                        </p> 
                                    </div>
                                </div>

                                <p className="text-md leading-5 text-white py-4">
                                    {listing.description}
                                </p>

                                <div className="grid grid-cols-3 border-t border-white/10 pt-4">
                                    <div className="flex space-x-2 text-sm text-gray-400">
                                        <BathIcon size={18} />
                                        <p>6 Baths</p>
                                    </div>
                                    <div className="flex space-x-2 text-sm text-gray-400">
                                        <BedSingleIcon size={18} />
                                        <p>7 Rooms</p>
                                    </div>
                                    <div className="flex space-x-2 text-sm text-gray-400">
                                        <RulerIcon size={18} />
                                        <p>1200 Sq</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listing
