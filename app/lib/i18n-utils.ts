/**
 * Utility functions for handling bilingual content
 */

type BilingualContent = {
    en: string;
    ar: string;
};

type Locale = "en" | "ar";

/**
 * Gets the localized string from a bilingual content object
 * @param content - Either a bilingual object with en/ar keys or a plain string
 * @param locale - The current locale ('en' or 'ar')
 * @returns The localized string
 */
export function getLocalizedContent(
    content: BilingualContent | string,
    locale: Locale
): string {
    if (typeof content === "string") {
        return content;
    }
    return content[locale] || content.en; // Fallback to English if locale not found
}

/**
 * Hook-friendly version that uses the locale directly
 */
export function useLocalizedContent(locale: Locale) {
    return (content: BilingualContent | string) =>
        getLocalizedContent(content, locale);
}
