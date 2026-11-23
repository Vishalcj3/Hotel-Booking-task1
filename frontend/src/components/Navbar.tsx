import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="font-bold text-2xl md:text-3xl text-black">Nginep</span>
                    <span className="font-bold text-2xl md:text-3xl px-1" style={{ color: '#ffaf04' }}>Boss</span>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-2">
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 px-4 py-2">Home</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 px-4 py-2">Service</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 px-4 py-2">About Us</a>
                    <a href="#" className="text-black font-semibold hover:text-yellow-400 px-4 py-2">Destination</a>
                </div>

                {/* Desktop button */}
                <button
                    className="hidden md:block bg-yellow-400 text-white rounded-xl px-6 py-2 shadow-md hover:scale-105 transition-all duration-300"
                    onClick={() => navigate("/service")}
                >Get the App</button>

                {/* Mobile hamburger */}
                <button className="md:hidden overflow-visible" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col px-5 pb-4 gap-2 bg-white shadow-md">
                    <a href="#" className="text-black font-semibold py-2 border-b border-gray-100">Home</a>
                    <a href="#" className="text-black font-semibold py-2 border-b border-gray-100">Service</a>
                    <a href="#" className="text-black font-semibold py-2 border-b border-gray-100">About Us</a>
                    <a href="#" className="text-black font-semibold py-2 border-b border-gray-100">Destination</a>
                    <button
                        className="bg-yellow-400 text-white rounded-xl px-6 py-2 mt-2 shadow-md"
                        onClick={() => { navigate("/service"); setMenuOpen(false); }}
                    >Get the App</button>
                </div>
            )}
        </div>
    );
}
export default Navbar;
