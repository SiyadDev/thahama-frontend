"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { cookieName, fallbackLng, languages } from "./settings";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

type Locale = "en" | "ar";
type Translations = typeof en;

interface LanguageContextType {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: (key: string) => string;
    dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = {
    en,
    ar,
};

export function LanguageProvider({
    children,
    initialLanguage = fallbackLng,
}: {
    children: React.ReactNode;
    initialLanguage?: string;
}) {
    const [language, setLanguageState] = useState<Locale>(
        (initialLanguage as Locale) || fallbackLng
    );

    const setLanguage = (lang: Locale) => {
        setLanguageState(lang);
        // Persist to cookie
        document.cookie = `${cookieName}=${lang}; path=/; max-age=31536000`;
        // Persist to localStorage
        localStorage.setItem(cookieName, lang);

        // Update document attributes
        const dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    };

    // Sync with localStorage on mount if no cookie was present, 
    // or just to ensure client-side state is consistent
    useEffect(() => {
        const storedLang = localStorage.getItem(cookieName) as Locale;
        if (storedLang && languages.includes(storedLang) && storedLang !== language) {
            setLanguage(storedLang);
        }
    }, []);

    const t = (path: string): string => {
        const keys = path.split(".");
        let current: any = translations[language];

        for (const key of keys) {
            if (current && current[key]) {
                current = current[key];
            } else {
                // Fallback to English if translation missing
                let fallback: any = translations[fallbackLng];
                for (const k of keys) {
                    if (fallback && fallback[k]) {
                        fallback = fallback[k];
                    } else {
                        return path; // Return key if not found
                    }
                }
                return fallback || path;
            }
        }

        return typeof current === "string" ? current : path;
    };

    const dir = language === "ar" ? "rtl" : "ltr";

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
