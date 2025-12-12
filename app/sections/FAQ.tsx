"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "What are your store opening hours?",
    answer: "Most of our branches are open from 7:00 AM to 12:00 AM daily. However, hours may vary by location. Please check the specific branch details for exact timings.",
  },
  {
    id: 2,
    question: "Do you offer home delivery?",
    answer: "Yes! We offer fast and reliable home delivery services. You can place orders through our website or by calling your nearest branch. Delivery is available within designated areas.",
  },
  {
    id: 3,
    question: "Is there a loyalty rewards program?",
    answer: "Absolutely! Our rewards program allows you to earn points with every purchase. Points can be redeemed for discounts and exclusive offers. Sign up at any of our branches or online.",
  },
  {
    id: 4,
    question: "How do you ensure product freshness?",
    answer: "We receive daily deliveries of fresh produce, meat, seafood, and bakery items. Our strict quality control measures ensure that only the freshest products reach our shelves.",
  },
  {
    id: 5,
    question: "Do you accept online payments?",
    answer: "Yes, we accept various payment methods including credit/debit cards, mobile payments, and cash on delivery for online orders.",
  },
  {
    id: 6,
    question: "Can I return or exchange products?",
    answer: "We have a customer-friendly return policy. If you're not satisfied with a product, you can return it within 48 hours with a valid receipt, subject to our terms and conditions.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openId, setOpenId] = useState<number | null>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    faqs.forEach((faq) => {
      const answer = document.getElementById(`answer-${faq.id}`);
      if (answer) {
        if (openId === faq.id) {
          gsap.to(answer, {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        } else {
          gsap.to(answer, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
          });
        }
      }
    });
  }, [openId]);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-12 md:py-32 bg-white relative overflow-hidden z-10"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-4 md:mb-6"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-8 md:mb-16">
          Got questions? We've got answers!
        </p>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-light rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <FiChevronDown
                  className={`text-accent text-2xl shrink-0 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                id={`answer-${faq.id}`}
                className="overflow-hidden h-0 opacity-0"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

