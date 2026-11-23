import {useNavigate} from "react-router-dom";
function Navbar(){
    const navigate=useNavigate();
    return (
        <div className="min-h screen bg-white">
            <nav className="w-full bg-white px-5 py-3">
                <div className="flex justify-start">
                    <span style={{color: 'black'}} className="font-bold text-3xl">Nginep </span>
                    <span style={{color: '#ffaf04'}} className="font-bold px-2 text-3xl"> Boss</span>
                    <div className="hidden md:flex mx-auto items-center">
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 hover:underline hover:underline-offset-7 px-4 py-2">Home</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 hover:underline hover:underline-offset-7 px-4 py-2">Service</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 hover:underline hover:underline-offset-7 px-4 py-2">About Us</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 hover:underline hover:underline-offset-7 px-4 py-2">Destination</a>                
                    </div>
                    <button className="justify-right bg-yellow-400 shadow-md text-white rounded-xl px-8 py-3 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    onClick={()=> navigate("/service")}
                >Get the App</button>
                </div>
            </nav>       
        </div>
    );
}
export default Navbar;