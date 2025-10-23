import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Garantia from "./components/Garantia";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow">
        <Hero />
        <div className="bg-black">
          <Features />
          <Pricing />
          <Garantia />
          <Testimonials />

          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
