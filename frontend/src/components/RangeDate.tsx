import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState, useRef, useEffect } from "react";
import { CalendarDays } from "lucide-react";

function RangeDate() {
    const [range, setRange] = useState<DateRange | undefined>(undefined);
    const [confirmedRange, setConfirmedRange] = useState<DateRange | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const formatDate = (date: Date) =>
        date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => { setRange(confirmedRange); setOpen(!open); }}
                className="flex items-center gap-3 rounded-full outline-none px-5 py-2 bg-white"
            >
                <CalendarDays className="w-9 h-9 text-yellow-400" />
                <div className="flex flex-col items-start hover:scale-105 transition-all duration-300">
                    <span className="text-xs text-gray-400">Check In - Check Out</span>
                    <span className="text-sm text-gray-700">
                        {confirmedRange?.from && confirmedRange?.to
                            ? `${formatDate(confirmedRange.from)} - ${formatDate(confirmedRange.to)}`
                            : "Select dates"}
                    </span>
                </div>
            </button>
            {open && (
                <div
                    className="absolute top-full mt-2 z-50 bg-amber-100 rounded-2xl text-gray-800 shadow-xl border p-3"
                    style={{ width: "min(300px, 82vw)", left: "50%", transform: "translateX(-50%)", fontSize: "0.8rem" }}
                >
                    <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        disabled={{ before: new Date() }}
                        numberOfMonths={1}
                        style={{ fontSize: "0.8rem" }}
                    />
                    <button
                        onClick={() => { setConfirmedRange(range); setOpen(false); }}
                        disabled={!range?.from || !range?.to}
                        className="w-full mt-2 rounded-lg bg-yellow-400 text-white py-1.5 px-4 text-xs font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Done
                    </button>
                </div>
            )}
        </div>
    );
}
export default RangeDate;
