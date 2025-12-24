"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface RamadanContextType {
    isRamadanMode: boolean;
    toggleRamadanMode: () => void;
}

const RamadanContext = createContext<RamadanContextType | undefined>(undefined);

export function RamadanProvider({ children }: { children: React.ReactNode }) {
    const [isRamadanMode, setIsRamadanMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("thahama_ramadan_mode");
        if (saved) {
            setIsRamadanMode(JSON.parse(saved));
        }
    }, []);

    const toggleRamadanMode = () => {
        setIsRamadanMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("thahama_ramadan_mode", JSON.stringify(newValue));
            return newValue;
        });
    };

    return (
        <RamadanContext.Provider value={{ isRamadanMode, toggleRamadanMode }}>
            {children}
        </RamadanContext.Provider>
    );
}

export function useRamadan() {
    const context = useContext(RamadanContext);
    if (context === undefined) {
        throw new Error("useRamadan must be used within a RamadanProvider");
    }
    return context;
}
