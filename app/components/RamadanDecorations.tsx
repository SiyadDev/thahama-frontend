"use client";

import { useRamadan } from "@/app/context/RamadanContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect } from "react";

export default function RamadanDecorations() {
    const { isRamadanMode, toggleRamadanMode } = useRamadan();

    // Toggle body class for global theme
    useEffect(() => {
        if (isRamadanMode) {
            document.body.classList.add("ramadan-mode");
        } else {
            document.body.classList.remove("ramadan-mode");
        }

        return () => {
            document.body.classList.remove("ramadan-mode");
        };
    }, [isRamadanMode]);

    return (
        <>
            {/* Theme Toggle Button */}
            <button
                onClick={toggleRamadanMode}
                className={`fixed z-50 bottom-24 right-6 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isRamadanMode
                        ? "bg-amber-400 text-slate-900 rotate-180 hover:bg-amber-300"
                        : "bg-slate-800 text-amber-300 hover:bg-slate-700"
                    }`}
                title={isRamadanMode ? "Exit Ramadan Mode" : "Enter Ramadan Mode"}
            >
                {isRamadanMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Decorations Overlay */}
            <div
                className={`pointer-events-none fixed inset-0 z-40 transition-opacity duration-1000 ${isRamadanMode ? "opacity-100" : "opacity-0"
                    }`}
            >
                {/* Hanging Lanterns (Fanoos) */}
                <div className="absolute top-0 right-10 w-16 h-48 origin-top animate-swing-slow">
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                        <line x1="50" y1="0" x2="50" y2="50" stroke="#fbbf24" strokeWidth="2" />
                        <path d="M30 50 L70 50 L80 120 L20 120 Z" fill="#fbbf24" opacity="0.8" />
                        <path d="M20 120 L80 120 L50 160 Z" fill="#fbbf24" opacity="0.6" />
                        <circle cx="50" cy="100" r="5" fill="#fff" className="animate-pulse" />
                    </svg>
                </div>
                <div className="absolute top-0 right-32 w-12 h-36 origin-top animate-swing-mid delay-700">
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                        <line x1="50" y1="0" x2="50" y2="40" stroke="#fbbf24" strokeWidth="2" />
                        <path d="M35 40 L65 40 L75 90 L25 90 Z" fill="#fbbf24" opacity="0.8" />
                        <path d="M25 90 L75 90 L50 120 Z" fill="#fbbf24" opacity="0.6" />
                        <circle cx="50" cy="80" r="4" fill="#fff" className="animate-pulse" />
                    </svg>
                </div>
                <div className="absolute top-0 left-10 w-20 h-56 origin-top animate-swing-slow delay-300">
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                        <line x1="50" y1="0" x2="50" y2="60" stroke="#fbbf24" strokeWidth="2" />
                        <path d="M25 60 L75 60 L85 140 L15 140 Z" fill="#fbbf24" opacity="0.8" />
                        <path d="M15 140 L85 140 L50 180 Z" fill="#fbbf24" opacity="0.6" />
                        <circle cx="50" cy="110" r="6" fill="#fff" className="animate-pulse" />
                    </svg>
                </div>

                {/* Crescent Moon */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 opacity-20">
                    <svg width="600" height="600" viewBox="0 0 100 100" className="animate-pulse-slow">
                        <path d="M40 10 A 40 40 0 1 0 40 90 A 30 30 0 1 1 40 10" fill="#fbbf24" fillOpacity="0.4" />
                    </svg>
                </div>

                {/* Geometric Pattern Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-5 mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <style jsx>{`
        @keyframes swing-slow {
          0%, 100% { transform: rotate(3deg); }
          50% { transform: rotate(-3deg); }
        }
        @keyframes swing-mid {
           0%, 100% { transform: rotate(-4deg); }
           50% { transform: rotate(4deg); }
        }
        @keyframes pulse-slow {
           0%, 100% { opacity: 0.1; }
           50% { opacity: 0.3; }
        }
        .animate-swing-slow { animation: swing-slow 6s ease-in-out infinite; }
        .animate-swing-mid { animation: swing-mid 5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
        </>
    );
}
