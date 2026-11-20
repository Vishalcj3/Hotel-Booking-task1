import { useState, useRef, useEffect } from "react";

const MIN = 0;
const MAX = 5000;

function PriceRange() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(5000);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMin = (val: number) => setMin(Math.min(val, max - 1));
    const handleMax = (val: number) => setMax(Math.max(val, min + 1));

    return (
        <div className="relative " ref={ref}>
            {/* Trigger button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-full outline-none px-5 py-2.5 bg-white text-sm text-gray-700"
            >
                <span><img src="/4.png" className="w-10 min-w-[42px] h-10"/></span>
                <p className="flex flex-col text-lg -translate-y-4 translate-x-1 hover:scale-105 transition-all duration-300">Price Range</p>
                <p className="flex flex-col text-xs translate-y-2 -translate-x-24 font-bold">${min} – ${max}</p>
            </button>

            {/* Popup */}
            {open && (
                <div className="absolute bottom-full mb-3 left-0 z-50 bg-white rounded-2xl shadow-xl border border-gray-200 p-5 w-72">
                    <h2 className="font-bold text-black text-base mb-4">Price Range</h2>

                    {/* Manual inputs */}
                    <div className="flex gap-3 mb-5">
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1 block">Min</label>
                            <input
                                type="number"
                                value={min}
                                min={MIN}
                                max={max - 1}
                                onChange={(e) => handleMin(Number(e.target.value))}
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 outline-none focus:border-yellow-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1 block">Max</label>
                            <input
                                type="number"
                                value={max}
                                min={min + 1}
                                max={MAX}
                                onChange={(e) => handleMax(Number(e.target.value))}
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-700 outline-none focus:border-yellow-400"
                            />
                        </div>
                    </div>

                    {/* Dual range slider */}
                    <div className="relative h-6 flex items-center">
                        <div className="absolute w-full h-1.5 bg-gray-200 rounded-full" />
                        <div
                            className="absolute h-1.5 bg-yellow-400 rounded-full"
                            style={{
                                left: `${(min / MAX) * 100}%`,
                                right: `${100 - (max / MAX) * 100}%`,
                            }}
                        />
                        <input
                            type="range"
                            min={MIN}
                            max={MAX}
                            value={min}
                            onChange={(e) => handleMin(Number(e.target.value))}
                            className="range-slider"
                        />
                        <input
                            type="range"
                            min={MIN}
                            max={MAX}
                            value={max}
                            onChange={(e) => handleMax(Number(e.target.value))}
                            className="range-slider"
                        />
                    </div>

                    {/* Labels */}
                    <div className="flex justify-between text-xs text-gray-400 mt-3">
                        <span>${MIN}</span>
                        <span>${MAX}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PriceRange;
