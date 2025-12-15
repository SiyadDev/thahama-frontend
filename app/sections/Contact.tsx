"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck } from "react-icons/fi";
import CityMap from "@/app/components/CityMap";
import { useLanguage } from "@/app/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyToClipboard = async (phone: string) => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(phone);
      setTimeout(() => setCopiedPhone(null), 2000);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 md:py-32 bg-light relative overflow-hidden z-10"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-4 md:mb-6"
        >
          {t("contact.title")} <span className="text-accent">{t("contact.titleHighlight")}</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-8">
            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FiPhone className="text-accent text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">{t("contact.phone")}</h3>
                  <button
                    onClick={() => copyToClipboard("+966 12 234 5678")}
                    className="text-gray-600 hover:text-accent transition-all cursor-pointer flex items-center gap-2 w-full text-left py-1 underline"
                    title="Click to copy"
                    dir="ltr"
                  >
                    <span className="font-mono">+966 12 234 5678</span>
                    {copiedPhone === "+966 12 234 5678" && (
                      <FiCheck className="text-green-500 text-sm shrink-0" />
                    )}
                  </button>
                  <button
                    onClick={() => copyToClipboard("+966 12 345 6789")}
                    className="text-gray-600 hover:text-accent transition-all cursor-pointer flex items-center gap-2 w-full text-left py-1 underline mt-1"
                    title="Click to copy"
                    dir="ltr"
                  >
                    <span className="font-mono">+966 12 345 6789</span>
                    {copiedPhone === "+966 12 345 6789" && (
                      <FiCheck className="text-green-500 text-sm shrink-0" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FiMail className="text-accent text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">{t("contact.email")}</h3>
                  <p className="text-gray-600">info@thahama.market</p>
                  <p className="text-gray-600">support@thahama.market</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FiMapPin className="text-accent text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">{t("contact.office")}</h3>
                  <p className="text-gray-600">{t("contact.addressLine1")}</p>
                  <p className="text-gray-600">{t("contact.addressLine2")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FiClock className="text-accent text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">{t("contact.hours")}</h3>
                  <p className="text-gray-600">{t("contact.hoursLine1")}</p>
                  <p className="text-gray-600">{t("contact.hoursLine2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <CityMap
            locations={[
              { city: t("cities.jeddah"), lat: 21.4858, lng: 39.1925 },
              { city: t("cities.alqahma"), lat: 18.7458, lng: 41.9389 },
              { city: t("cities.dubai"), lat: 25.2048, lng: 55.2708 },
              { city: t("cities.abudhabi"), lat: 24.4539, lng: 54.3773 },
            ]}
            defaultCenter={[21.4858, 39.1925]}
            defaultZoom={12}
          />
        </div>
      </div>
    </section>
  );
}

