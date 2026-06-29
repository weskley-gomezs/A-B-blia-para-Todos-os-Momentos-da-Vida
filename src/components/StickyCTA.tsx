import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { KIWIFY_LINK, PRODUCT_INFO } from "../config";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget once scrolled down past the hero (typically 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scarcity Alert Announcement Bar - Permanent at the very top */}
      <div className="bg-brand-black text-white py-2.5 px-4 text-center text-[11px] font-semibold tracking-wider uppercase border-b border-gold/20 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-block bg-gold px-1.5 py-0.5 rounded text-[9px] font-extrabold text-brand-black animate-pulse">
          OFERTA DE HOJE
        </span>
        <span>Apenas R$ 37,90. Promoção de Lançamento expira em breve.</span>
        <a
          href={KIWIFY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline hover:text-white transition-colors duration-200 ml-1 font-bold"
        >
          Aproveitar Desconto ⚡
        </a>
      </div>

      {/* Floating Sticky CTA capsule at the bottom */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-full border border-gold/40 bg-brand-black/95 p-2 shadow-2xl shadow-gold/15 backdrop-blur-md"
          >
            <div className="flex items-center justify-between pl-4 pr-1">
              {/* Product Info left side */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-gold uppercase">eBook + Bônus</span>
                <span className="font-serif text-sm font-semibold text-white truncate max-w-[160px] sm:max-w-[190px]">
                  A Bíblia para Momentos...
                </span>
              </div>

              {/* Price & Action right side */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="block text-[8px] text-gray-400 line-through">R$ 97,00</span>
                  <span className="text-sm font-serif font-bold text-gold">{PRODUCT_INFO.price}</span>
                </div>
                
                <a
                  href={KIWIFY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-gold px-4.5 py-2.5 text-xs font-bold text-brand-black transition-all duration-300 hover:bg-white hover:scale-[1.03]"
                >
                  <span>Comprar</span>
                  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
