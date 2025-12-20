"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Quote } from "lucide-react";
import { getOptimizedImagePath, getBlurPlaceholder } from "@/app/lib/image-utils";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { siteContent } from "@/app/data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Helper to parse stats from string "20+" -> number: 20, suffix: "+"
  const parseStat = (val: string) => {
    const match = val.match(/^(\d+(?:\.\d+)?)([A-Za-z+]*)$/);
    if (match) {
      return { number: parseFloat(match[1]), suffix: match[2] };
    }
    return { number: 0, suffix: val }; // Fallback
  };

  const branchesStat = parseStat(siteContent.statistics.branches);
  const customersStat = parseStat(siteContent.statistics.customers);
  const experienceStat = parseStat(siteContent.statistics.years);
  const productsStat = parseStat(siteContent.statistics.products);

  const stats = [
    { number: branchesStat.number, suffix: branchesStat.suffix, label: t("about.stats.branches"), sub: "Branches" },
    { number: customersStat.number, suffix: customersStat.suffix, label: t("about.stats.customers"), sub: "Happy Customers" },
    { number: experienceStat.number, suffix: experienceStat.suffix, label: t("about.stats.experience"), sub: "Years Experience" },
    { number: productsStat.number, suffix: productsStat.suffix, label: t("about.stats.products"), sub: "Products" },
  ];

  useEffect(() => {
    let ctx: gsap.Context;

    const initAnimations = () => {
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        // Left Column Animation (Image & Quote)
        if (leftColRef.current) {
          gsap.fromTo(leftColRef.current,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: leftColRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        // Right Column Animation (Text)
        if (rightColRef.current) {
          gsap.fromTo(rightColRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: rightColRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        // Stats Animation
        if (statsRef.current) {
          // Fade in cards
          gsap.fromTo(statsRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );

          // Counter Animation
          const statElements = Array.from(statsRef.current.querySelectorAll(".stat-number"));
          if (statElements.length > 0) {
            ScrollTrigger.create({
              trigger: statsRef.current,
              start: "top 85%",
              once: true,
              onEnter: () => {
                statElements.forEach((element, index) => {
                  if (index >= stats.length) return;
                  const target = stats[index].number;
                  const obj = { value: 0 };

                  gsap.to(obj, {
                    value: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                      if (element) {
                        // Check if it's an integer
                        const val = Math.ceil(obj.value);
                        element.textContent = val.toLocaleString();
                      }
                    }
                  });
                });
              }
            });
          }
        }
      }, sectionRef);
    };

    // Small timeout to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-10"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left Column: Founder Image & Quote */}
          <div ref={leftColRef} className="relative w-full max-w-[320px] sm:max-w-sm mx-auto">
            {/* Background Shape */}
            <div className="absolute top-4 -left-4 w-full h-full bg-accent/5 rounded-[2.5rem] -z-10 transform -rotate-2 scale-105" />

            <div className="relative aspect-4/5 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              {(() => {
                const blurUrl = getBlurPlaceholder("founder");
                return (
                  <Image
                    src={getOptimizedImagePath("/images/founder.jpg")}
                    alt="Mr. Askar Neyyan - Founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder={blurUrl ? "blur" : "empty"}
                    blurDataURL={blurUrl}
                  />
                );
              })()}
              {/* Founder Name on Image (Optional, based on common designs or just keep it in text) */}
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-8 pt-24 text-white">
                <p className="font-bold text-xl">Mr. Askar Neyyan</p>
                <p className="text-white/80 text-sm">Founder & Managing Director</p>
              </div>
            </div>

            {/* Floating Quote Card */}
            <div className="absolute bottom-12 -right-6 md:bottom-20 md:-right-20 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl max-w-[240px] animate-float hidden md:block border border-gray-100/50">
              <Quote className="text-accent w-6 h-6 mb-2 opacity-90" />
              <p className="text-gray-700 text-sm font-medium leading-relaxed italic">
                &quot;We don&apos;t just sell products; we build relationships. Our growth is fueled by trust and quality.&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div ref={rightColRef} className="flex flex-col space-y-6">
            <div>
              <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Deep Roots, <br /><span className="text-accent">Diverse Horizons</span>
              </h2>
              <p className="text-gray-500 font-medium mt-2 text-lg">Serving the Kingdom Since 2005</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                THAHAMA:market is the fastest-growing supermarket chain in Saudi Arabia and the UAE, dedicated to providing the highest quality products and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to freshness, quality, and community has made us a trusted name across the region. From fresh produce to household essentials, we ensure every product meets our rigorous standards.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
                <span className="font-bold text-primary">Serving</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-medium text-gray-600">JEDDAH</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-medium text-gray-600">MECCA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-medium text-gray-600">MADINAH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 text-center border border-gray-50"
            >
              <div className="flex items-center justify-center text-3xl md:text-5xl font-bold text-accent mb-2">
                <span className="stat-number">0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


