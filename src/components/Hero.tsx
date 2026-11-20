import PriceRange from "./PriceRange";
import RangeDate from "./RangeDate";
import { ArrowRight, Search , MapPin} from "lucide-react";
function Hero(){
    return (
        <div>
            <div className="relative rw-full max-w-7xl rounded-2xl h-[550px] mx-auto shadow-xl">
                <img src="/task1.jpg" alt="task1" className="absolute inset-0 w-full h-full object-cover"></img>
                <div className="absolute inset-0 bg-black/20">
                <p className="absolute top-4 left-4 px-11 py-20 text-white text-6xl font-bold" >Your <span style={{color:'yellow'}}>Ultimate</span> Hotel <br/> Booking Solution</p>
                </div>
                <div className="px-13 py-22">
                    <button className="absolute translate-y-40 translate-x-2 px-5 py-2 shadow-md text-white bg-yellow-400 rounded-full justify-start flex items-center hover:scale-105 hover:shadow-xl transition-all duration-300" >Reserve now
                        <span className="ml-2 w-8 h-8 rounded-full bg-white text-yellow-400 flex items-center justify-center"><ArrowRight/></span>
                    </button>
                </div>
                <div className="absolute bottom-5 left-5 rounded-full bg-white shadow-lg flex items-center border border-gray-300 px-3 py-2.5">
                <span><Search size={50} style={{color: '#ffaf04'}} className="w-5 h-6 "/></span>
                <input type="text" placeholder="Location" className="text-grey-800 outline-none px-3 translate-x-1"/>
                <span className="-translate-x-5 "><RangeDate/></span>
                </div>
            </div>
            {/* How it Works - fixed 3 column grid so the alignment never shifts with width */}
            <p className="text-5xl font-bold text-center py-14">How Nginep <span style={{color:'#ffaf04'}}>Boss</span> Works?</p>
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10 px-6 pb-10">
                <div className="flex flex-col items-center text-center gap-3">
                    <img src="/search.png" className="w-24 h-24 rounded-full"/>
                    <p className="text-xl font-bold">Search Hotels</p>
                    <p className="font-semibold text-md text-gray-600">can easilt help you find<br/>recommendations that suit you</p>
                </div>
                {/* middle column sits a little lower, like the design */}
                <div className="flex flex-col items-center text-center gap-3 mt-14">
                    <img src="/2.png" className="w-24 h-24 rounded-full object-cover"/>
                    <p className="text-xl font-bold">Reserver</p>
                    <p className="font-semibold text-md text-gray-600">The aim is that your room order<br/>can be made immediately</p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <img src="/4.png" className="w-24 h-24 rounded-full object-cover"/>
                    <p className="text-xl font-bold">Secure Payment</p>
                    <p className="font-semibold text-md text-gray-600">can easily help you if you want to<br/>ask about tourist decisions</p>
                </div>
            </div>
            {/* Our Popular Hotels */}
            <p className="text-5xl font-bold text-center py-8">Our Popular <span style={{color: '#ffaf04'}}>Hotels</span></p>
            <div className="flex flex-row flex-wrap justify-center gap-16 px-6 py-6">
                <div className="relative hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <img src="/hotel1.jpg" className="w-85 h-105 rounded-2xl object-cover"/>
                    <div className="absolute left-0 bottom-0 w-full bg-white p-15 rounded-b-xl shadow-lg flex flex-col flex-row whitespace-nowrap">
                        <div className="-translate-x-12 -translate-y-12 flex flex-row flex-col whitespace-nowrap">
                            <h3 className="text-yellow-500 text-lg font-semibold ">$250</h3>
                            <p className="text-xs py-2 px-1 font-semibold">/Night</p>
                            <p className="px-35 py-1 flex flex-row"><img src="/star.png" className="w-5 h-5 min-w-[20px] "></img><span className="px-2 -translate-y-0.5 text-sm">5.7</span></p>
                            <p className="absolute font-bold text-xl py-8">Grand Royal</p>
                            <p className="absolute py-20 font-semibold flex flex-row"><MapPin size={20} color="yellow"/> <p className="text-sm px-2">Lapang Tengah, Bandar Lapang 34114</p></p>
                            <div className="absolute bottom-0 left-0 h-0.5 w-65 bg-gray-400 rounded-full translate-y-24 translate-x-2"></div>
                        </div>
                    </div>   {/* <button className="absolute right-4 bottom-4 bg-yellow-400 text-white rounded-full px-3 py-1 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">Book Now</button> */}
                </div>
                <div className="relative hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <img src="/hotel2.jpg" className="w-85 h-105 rounded-2xl object-cover"/>
                    <div className="absolute left-0 bottom-0 w-full bg-white p-15 rounded-b-xl shadow-lg flex flex-col flex-row whitespace-nowrap">
                        <div className="-translate-x-12 -translate-y-12 flex flex-row flex-col whitespace-nowrap">
                            <h3 className="text-yellow-500 text-lg font-semibold ">$350</h3>
                            <p className="text-xs py-2 px-1 font-semibold">/Night</p>
                            <p className="px-35 py-1 flex flex-row"><img src="/star.png" className="w-5 h-5 min-w-[20px] "></img><span className="px-2 -translate-y-0.5 text-sm">7.9</span></p>
                            <p className="absolute font-bold text-xl px-2 py-8">OYI</p>
                            <p className="absolute py-20 font-semibold flex flex-row"><MapPin size={20} color="yellow"/> <p className="text-sm px-2">Kota Metro, Lampung 34114</p></p>
                            <div className="absolute bottom-0 left-0 h-0.5 w-65 bg-gray-400 rounded-full translate-y-24 translate-x-2"></div>
                        </div>
                    </div>
                </div>
               <div className="relative hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <img src="/hotel3.jpg" className="w-85 h-105 rounded-2xl object-cover"/>
                    <div className="absolute left-0 bottom-0 w-full bg-white p-15 rounded-b-xl shadow-lg flex flex-col flex-row whitespace-nowrap">
                        <div className="-translate-x-12 -translate-y-12 flex flex-row flex-col whitespace-nowrap">
                            <h3 className="text-yellow-500 text-lg font-semibold ">$150</h3>
                            <p className="text-xs py-2 px-1 font-semibold">/Night</p>
                            <p className="px-35 py-1 flex flex-row"><img src="/star.png" className="w-5 h-5 min-w-[20px] "></img><span className="px-2 -translate-y-0.5 text-sm">7.9</span></p>
                            <p className="absolute font-bold text-xl px-2 py-8">SekNo</p>
                            <p className="absolute py-20 font-semibold flex flex-row"><MapPin size={20} color="yellow"/> <p className="text-sm px-2">Lapang Tengah, Lampung 34114</p></p>
                            <div className="absolute bottom-0 left-0 h-0.5 w-65 bg-gray-400 rounded-full translate-y-24 translate-x-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Destination - 3 column bento, tall & short cards staggered like the figma.
                fixed row height keeps the box a real height so the blog/testimonial below don't collapse up into it */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <p className="text-5xl font-bold text-center mb-12"><span style={{color: '#ffaf04'}}>Top Destination Choice</span><br/><span className="text-black-800">For you in indonesian</span></p>

                <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-5" style={{height: "760px"}}>
                    {[
                        { img: "/hotel3.jpg", area: "col-start-1 row-start-1" },
                        { img: "/hotel2.jpg", area: "col-start-1 row-start-2 row-span-2" },
                        { img: "/hotel1.jpg", area: "col-start-2 row-start-1 row-span-2" },
                        { img: "/hotel2.jpg", area: "col-start-2 row-start-3" },
                        { img: "/hotel3.jpg", area: "col-start-3 row-start-1" },
                        { img: "/hotel2.jpg", area: "col-start-3 row-start-2 row-span-2" },
                    ].map((d, i) => (
                        <div key={i} className={`${d.area} relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}>
                            <img src={d.img} className="w-full h-full object-cover"/>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-600/70 p-5 flex flex-col">
                                <p className="text-xl font-bold text-white">Varkala</p>
                                <p className="text-sm text-white py-1">40+ Destinations</p>
                                <button className="absolute right-4 bottom-4 w-9 h-9 rounded-full bg-yellow-400 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"><ArrowRight/></button>
                            </div>
                        </div>
                    ))}
                </div>                
            </div>
            {/* bottom search bar - centered pill, no more absolute/translate floating */}
            <div className="w-full flex justify-center py-12">
                <div className="rounded-full bg-white shadow-lg flex items-center gap-23 whitespace-nowrap border border-gray-300 px-[60px] py-3">
                    <div className="flex items-center gap-5 ">
                        <MapPin size={30} color="#ffaf04" className="w-8 h-8"/>
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-gray-400">Location</span>
                            <input type="text" placeholder="Where to?" className="text-sm text-gray-700 outline-none bg-transparent hover:scale-105 transition-all duration-300"/>
                        </div>
                    </div>
                    <div className="w-[1.5px] h-8 bg-gray-300 rounded-full"/>
                    <div className="relative z-20">
                        <RangeDate/>
                    </div>
                    <div className="w-[1.5px] h-8 bg-gray-300 rounded-full"/>
                    <PriceRange/>
                    <span ><button className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center translate-x-5 shadow-md hover:scale-105 transition-all duration-300"><ArrowRight/></button></span>
                </div>
            </div>
        </div>
    );
}
export default Hero;