import { ArrowUpRightIcon, UserCircleIcon } from "lucide-react"
import ButtonLink from "../ui/Button"
import Image from "next/image"

const blogs = [
    {
        // icon: House,
        // title: "Plead a style",
        description: "Your guide to buying your first home",
        name: "Harry Wilson",
        date: "23 July 2024"
    },
    {
        // icon: Coins,
        // title: "Plead a style",
        description: "Beauty trends: What's hot and what's not",
        name: "Nuno Mendes",
        date: "20 January 2026"
    },
    {
        // icon: HandshakeIcon,
        // title: "Plead a style",
        description: "The top 11 most magnificient houses around the world",
        name: "Alphonso Davies",
        date: "3 May 2025"
    },
]

const Blog = () => {

    return (
        <div className="bg-white/90 py-10" id="blog">
            <div className="mx-auto max-w-6xl px-6 pb-7 py-10">

                <div className="flex items-center">
                    <div>
                        <p className="text-orange-500 text-lg">Our Blog</p>
                        <h1 className="text-5xl text-[#050B1C] font-bold mb-3">Browse Our Blogs</h1>
                        <p className="text-gray-500 max-w-[70%] text-lg">Welcome to our real estate blog, where we delve into a world of insights, tips, and inspiration for both buyers and sellers.</p>
                    </div>
                    <div className="shrink-0">
                        <ButtonLink text="View All Posts" href="/listing" />
                    </div>
                </div>

                <div className="justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                        {/* Feature cards */}
                        {blogs.map((blog) => (
                            <div
                                key={blog.name}
                                className="bg-white/60 h-auto w-full rounded-3xl justify-center items-center py-5 px-5 hover:scale-105 transition-all duration-400 cursor-pointer"
                            >
                                <div className="justify-center items-center flex">
                                    <Image
                                        src="/blog.jpg" 
                                        alt="home interior"
                                        width={400}    
                                        height={100}    
                                        className="rounded-xl mb-2"
                                        priority
                                    />
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <h1 className="text-md font-semibold text-gray-400">Plead A Style</h1>
                                </div>

                                <p className="text-xl font-bold text-[#050B1C] py-3">
                                    {blog.description}
                                </p>

                                <div className="flex justify-start items-center space-x-3 mb-2">
                                    <p className="text-xs text-gray-600">
                                        <UserCircleIcon strokeWidth={1.5} size={45} />
                                    </p> 
                                    <div className="flex flex-col">
                                        <h1 className="text-lg text-[#050B1C] font-semibold">
                                            {blog.name}
                                        </h1>
                                        <p className="text-sm text-gray-400">
                                            {blog.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-10 justify-center items-center flex">
                    <div className="bg-[#050B1C] rounded-4xl w-3xl h-50 px-16 justify-between flex items-center hover:scale-105 transition-all duration-400 cursor-pointer">
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <h1 className="text-4xl font-bold min-w-100">Get A Fit Lifestyle <br /> Easily And Fast Here.</h1>
                            </div>
                            <div className="bg-gray-700 rounded-full p-3 border-dotted border-4 border-orange-500">
                                <ArrowUpRightIcon size={40} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog