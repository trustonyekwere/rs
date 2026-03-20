import { HomeModernIcon, BanknotesIcon, KeyIcon } from "@heroicons/react/24/solid"

const features = [
    {
        icon: HomeModernIcon,
        title: "Buy a home",
        description: "Buying a home provides comfort and safety, and we are here to assist you in finding property for sale."
    },
    {
        icon: KeyIcon,
        title: "Rent a home",
        description: "Renting a home provides flexibility and convenience, and we are here to assist you in finding rental property."
    },
    {
        icon: BanknotesIcon,
        title: "Sell a home",
        description: "Selling a home should be easy and hassle-free, and we are here to assist you in selling your property."
    },
]

const Features = () => {
    return (
        <div className="bg-white flex justify-center items-center py-10 mx-auto max-w-6xl" id="features">
            <div className="mx-auto max-w-6xl bg-white justify-center text-center items-center m-0 py-10 px-4 md:px-0">
                <h3 className="text-yellow-500 font-semibold text-lg">Our Features</h3>
                <h1 className="text-[#050B1C] font-bold text-4xl md:text-5xl py-3">Our Special Features</h1>
                <p className="text-gray-500 text-lg">We pride ourselves in offering a comprehensive suite of services tailored to meet your unique real estate needs.</p>

                <div className="max-w-6xl justify-center items-center flex">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">

                        {/* Feature cards */}
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-[#050B1C] h-auto w-80 rounded-2xl justify-center items-center py-10 px-6 hover:scale-103 transition-all duration-300"
                            >
                                <div className="justify-center flex items-center pb-4">
                                    <div className="bg-[#0e1527] justify-center items-center flex rounded-xl h-15 w-15 p-3">
                                        <feature.icon className="size-7" />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold">
                                    {feature.title}
                                </h1>
                                <p className="text-md leading-5 text-gray-400 pt-2">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
