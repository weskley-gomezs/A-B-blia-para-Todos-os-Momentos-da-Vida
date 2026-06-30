import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowRight, Clock } from "lucide-react";
import { KIWIFY_LINK, PRODUCT_INFO } from "../config";
import { useCountdown } from "../hooks/useCountdown";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { formattedTime, isExpired } = useCountdown();

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
      <div className="bg-brand-black text-white py-2.5 px-4 text-center text-xs font-semibold tracking-wider uppercase border-b border-gold/20 flex flex-wrap items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
        <span className="inline-flex items-center gap-1 bg-red-600 px-2 py-0.5 rounded text-[10px] font-extrabold text-white animate-pulse">
          <Clock className="h-3 w-3" /> OFERTA POR TEMPO LIMITADO
        </span>
        <span className="text-[11px] sm:text-xs">
          De <span className="line-through text-gray-400">R$ 97,00</span> por apenas <span className="text-gold font-extrabold">R$ 37,90</span>! Seu desconto expira em: 
        </span>
        <span className="font-mono text-gold font-black bg-white/10 px-2 py-0.5 rounded text-xs tracking-widest min-w-[55px] inline-block shadow-inner">
          {formattedTime}
        </span>
        <a
          href={KIWIFY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-white transition-colors duration-200 ml-1 font-bold underline decoration-dotted text-[11px] sm:text-xs"
        >
          Aproveitar Desconto Agora ⚡
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
