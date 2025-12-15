"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`text-white hover:text-accent transition-colors duration-300 font-medium ${className}`}
            aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
        >
            {language === "en" ? "العربية" : "English"}
        </button>
    );
}
