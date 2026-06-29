/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import StickyCTA from "./components/StickyCTA";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Topics from "./components/Topics";
import Preview from "./components/Preview";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import Author from "./components/Author";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black selection:bg-gold/30 selection:text-brand-black antialiased">
      {/* Dynamic Scarcity Top Alert & Bottom Float Action Bar */}
      <StickyCTA />

      {/* Main Container */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <Benefits />

        {/* Topics Section */}
        <Topics />

        {/* Book Page Preview Section */}
        <Preview />

        {/* Target Audience Section */}
        <Audience />

        {/* Testimonials (Social Proof) Section */}
        <Testimonials />

        {/* Author Biography Section */}
        <Author />

        {/* 7 Days Guarantee Section */}
        <Guarantee />

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* Final CTA Section */}
        <CTA />
      </main>
    </div>
  );
}


