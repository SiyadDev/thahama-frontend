"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Branches from "./sections/Branches";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="overflow-x-hidden relative">
        <Hero />
        {/* Spacer to push content below fixed hero */}
        <div className="h-screen relative z-10" />
        <About />
        <Services />
        <Branches />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
