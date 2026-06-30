/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import StickyCTA from "./components/StickyCTA";
import Hero from "./components/Hero";
import Preview from "./components/Preview";
import Benefits from "./components/Benefits";
import Topics from "./components/Topics";
import Audience from "./components/Audience";
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

        {/* Book Page Preview Section (Moved immediately under Hero) */}
        <Preview />

        {/* Benefits Section */}
        <Benefits />

        {/* Topics Section */}
        <Topics />

        {/* Target Audience Section */}
        <Audience />

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


