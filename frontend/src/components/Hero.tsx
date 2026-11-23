import PriceRange from "./PriceRange";
import RangeDate from "./RangeDate";
import { ArrowRight, MapPin } from "lucide-react";

function Hero() {
    return (
        <div>
            {/* Hero Image */}
            <div className="relative w-full max-w-7xl rounded-lg h-[390px] md:h-[420px] lg:h-[550px] mx-auto shadow-xl overflow-visible">
                <img src="/task1.jpg" alt="task1" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />

                {/* Heading */}
                <p className="absolute top-4 left-4 px-4 md:px-8 lg:px-11 py-6 md:py-12 lg:py-17 text-white text-3xl md:text-4xl lg:text-6xl font-bold">
                    Your <span style={{ color: 'yellow' }}>Ultimate</span> Hotel <br /> Booking Solution!
                </p>

                {/* Reserve Now button */}
                <button className="absolute bottom-35 left-6 md:bottom-20 md:left-14 lg:bottom-57 lg:left-14 px-4 py-2 shadow-md text-white bg-yellow-400 rounded-full flex items-center hover:scale-105 hover:shadow-xl transition-all duration-300">
                    Reserve now
                    <span className="ml-2 w-7 h-7 rounded-full bg-white text-yellow-400 flex items-center justify-center "><ArrowRight size={16} /></span>
                </button>

                {/* 5M+ stat */}
                <div className="absolute right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 text-center text-white">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold">5M+</p>
                    <p className="text-sm md:text-base lg:text-xl font-normal">Active Users</p>
                </div>

                {/* Small search bar inside hero */}
                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-13 rounded-full bg-white shadow-lg flex items-center border border-gray-300 px-3 py-1">
                    <MapPin size={33} style={{ color: '#ffaf04' }} />
                    <input type="text" placeholder="Location" className="outline-none px-3 text-sm w-24 md:w-36" />
                    <div className="relative z-50"><RangeDate /></div>
                </div>
            </div>

            {/* How it Works */}
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-center py-10 md:py-14">
                How Nginep <span style={{ color: '#ffaf04' }}>Boss</span> Works?
            </p>
            <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-10  px-6 pb-10">
                <div className="flex flex-col items-center text-center gap-3">
                    <img src="/search.png" className="w-15 h-15 md:w-24 md:h-24 rounded-full" />
                    <p className="text-md md:text-xl font-bold">Search Hotels</p>
                    <p className="font-semibold text-xs md:text-md text-gray-600">can easily help you find<br />recommendations that suit you</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3 mt-12 md:mt-14">
                    <img src="/2.png" className="w-15 h-15 md:w-24 md:h-24 rounded-full object-cover" />
                    <p className="text-md md:text-xl font-bold">Reserver</p>
                    <p className="font-semibold text-xs md:text-md text-gray-600">The aim is that your room order<br />can be made immediately</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <img src="/4.png" className="w-15 h-15 md:w-24 md:h-24 rounded-full object-cover" />
                    <p className="text-md md:text-xl font-bold">Secure Payment</p>
                    <p className="font-semibold text-xs md:text-md text-gray-600">can easily help you if you want to<br />ask about tourist decisions</p>
                </div>
            </div>

            {/* Popular Hotels */}
            <p className="text-4xl md:text-4xl lg:text-5xl font-bold text-center py-8">
                Our Popular <span style={{ color: '#ffaf04' }}>Hotels</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 lg:px-20 py-6 max-w-7xl mx-auto">
                {[
                    { img: "/hotel1.jpg", price: "$250", rating: "5.7", name: "Grand Royal", loc: "Lapang Tengah, Bandar Lapang 34114" },
                    { img: "/hotel2.jpg", price: "$350", rating: "7.9", name: "OYI", loc: "Kota Metro, Lampung 34114" },
                    { img: "/hotel3.jpg", price: "$150", rating: "7.9", name: "SekNo", loc: "Lapang Tengah, Lampung 34114" },
                ].map((hotel) => (
                    <div key={hotel.name} className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                        <img src={hotel.img} className="w-full h-72 object-cover" />
                        <div className="bg-white p-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-black text-lg font-bold">{hotel.name}</h3>
                                <span className="text-yellow-500 font-semibold">{hotel.price}<span className="text-gray-400 text-xs font-normal">/Night</span></span>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                <img src="/star.png" className="w-4 h-4" />
                                <span className="text-sm text-gray-600">{hotel.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 mt-2">
                                <MapPin size={14} color="#ffaf04" />
                                <p className="text-xs text-gray-500">{hotel.loc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Top Destination */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <p className="text-[30px] leading-tight md:text-4xl lg:text-5xl font-bold text-center mb-10">
                    <p><span style={{ color: '#ffaf04' }}>Top Destination Choice</span><br />
                    <span className="text-black text-2xl md:text-3xl lg:text-4xl">For you in indonesian</span></p>
                </p>
                {/* Mobile/tablet: simple grid. Desktop: bento grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:hidden">
                    {["/hotel3.jpg", "/hotel2.jpg", "/hotel1.jpg", "/hotel2.jpg", "/hotel3.jpg", "/hotel2.jpg"].map((img, i) => (
                        <div key={i} className="relative overflow-hidden rounded-2xl h-40">
                            <img src={img} className="w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gray-600/70 p-3 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold text-white">Varkala</p>
                                    <p className="text-xs text-white">40+ Destinations</p>
                                </div>
                                <button className="w-7 h-7 rounded-full bg-yellow-400 text-white flex items-center justify-center"><ArrowRight size={14} /></button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Desktop bento */}
                <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-5" style={{ height: "760px" }}>
                    {[
                        { img: "/hotel3.jpg", area: "col-start-1 row-start-1" },
                        { img: "/hotel2.jpg", area: "col-start-1 row-start-2 row-span-2" },
                        { img: "/hotel1.jpg", area: "col-start-2 row-start-1 row-span-2" },
                        { img: "/hotel2.jpg", area: "col-start-2 row-start-3" },
                        { img: "/hotel3.jpg", area: "col-start-3 row-start-1" },
                        { img: "/hotel2.jpg", area: "col-start-3 row-start-2 row-span-2" },
                    ].map((d, i) => (
                        <div key={i} className={`${d.area} relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}>
                            <img src={d.img} className="w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gray-600/70 p-5 flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-bold text-white">Varkala</p>
                                    <p className="text-sm text-white py-1">40+ Destinations</p>
                                </div>
                                <button className="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"><ArrowRight /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Search Bar */}
            <div className="hidden md:flex justify-center px-6 py-10">
                <div className="w-full max-w-3xl lg:max-w-5xl rounded-full bg-white shadow-lg border border-gray-300 px-5 md:px-8 py-3 flex flex-row items-center justify-between gap-0">
                    <div className="flex items-center gap-2">
                        <MapPin size={22} color="#ffaf04" />
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">Location</span>
                            <input type="text" placeholder="Where to?" className="text-sm text-gray-700 outline-none bg-transparent w-28 lg:w-40" />
                        </div>
                    </div>
                    <div className="w-[1.5px] h-8 bg-gray-300 rounded-full" />
                    <div className="relative z-30">
                        <RangeDate />
                    </div>
                    <div className="w-[1.5px] h-8 bg-gray-300 rounded-full" />
                    <div className="relative z-30">
                        <PriceRange />
                    </div>
                    <button className="w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="md:hidden justify-center items-center flex flex-col">
                <div className="flex items-center gap-2 w-full mb-2.5">
                    <MapPin size={43} color="#ffaf04" />
                    <div className="flex flex-wrap">
                        <span className="text-xs text-gray-400">Location</span>
                        <input type="text" placeholder="Where to?" className="text-sm text-gray-700 outline-none bg-transparent w-full" />
                    </div>
                </div>                
                <div className="w-full mb-2.5 mr-8">
                    <RangeDate />
                </div>
                <div className="w-full mb-2.5 mr-8">
                    <PriceRange />
                </div>
                <button className="shadow-md  px-1 py-1 text-white bg-yellow-400 rounded-full flex items-center hover:scale-105 hover:shadow-xl transition-all duration-300">
                        <p className="translate-x-2">Search</p>
                        <span className="ml-6 w-6 h-6 rounded-full bg-white text-yellow-400 flex items-center justify-center "><ArrowRight size={16} /></span>
                </button>
            </div>
        </div>
    );
}
export default Hero;
