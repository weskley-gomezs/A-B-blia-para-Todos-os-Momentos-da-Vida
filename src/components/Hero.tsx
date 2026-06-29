import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { KIWIFY_LINK, PRODUCT_INFO } from "../config";
import { WatermarkCross, WatermarkCrown } from "./ChristianIcons";

// New requested mockup image URL
const COVER_IMAGE_PATH = "https://i.imgur.com/iBBoVUl.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-radial from-brand-offwhite via-brand-beige/20 to-brand-offwhite" id="hero-section">
      {/* Premium ambient light glow (Stripe/Apple style) */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-gold/8 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-brand-beige/40 blur-[100px]" />

      {/* Faint Christian Watermarks */}
      <WatermarkCross className="absolute top-6 left-1/3 w-32 h-32 opacity-15" />
      <WatermarkCrown className="absolute right-10 bottom-12 w-40 h-40 opacity-15" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Hero text contents (7 columns in desktop) */}
          <div className="flex flex-col text-center lg:col-span-7 lg:text-left">
            {/* Tag/Badge with golden light */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-5 flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-gold-dark lg:mx-0 lg:w-fit"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-gold-dark" />
              <span>Acesso Digital Imediato • PDF Premium</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="serif-heading text-4xl font-light leading-tight tracking-tight text-brand-black sm:text-5xl md:text-6xl"
            >
              {PRODUCT_INFO.title}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-brand-gray/95 sm:text-lg md:text-xl font-light"
            >
              100 estudos bíblicos completos para encontrar direção, fortalecer sua fé e viver os ensinamentos da Palavra de Deus no seu dia a dia.
            </motion.p>

            {/* Price Showcase with gold highlighting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start"
            >
              <div className="rounded-2xl border border-gold/20 bg-gold/5 px-6 py-4 text-center lg:text-left shadow-sm">
                <span className="text-xs font-semibold tracking-widest text-brand-gray/60 uppercase line-through">
                  De {PRODUCT_INFO.originalPrice}
                </span>
                <div className="flex items-baseline justify-center gap-2 lg:justify-start">
                  <span className="text-sm font-light text-brand-black/70">por apenas</span>
                  <span className="text-4xl font-serif font-bold text-gold-dark">{PRODUCT_INFO.price}</span>
                </div>
              </div>
            </motion.div>

            {/* Main Action Buttons with high-contrast active state */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href={KIWIFY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-buy-button"
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-brand-black px-10 py-5 text-sm font-semibold tracking-wide text-brand-offwhite shadow-lg transition-all duration-300 hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/25"
              >
                <span>Quero o eBook Agora</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Micro-guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 flex items-center justify-center gap-5 text-xs font-medium text-brand-gray/80 lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gold-dark" />
                Compra 100% Segura
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/35" />
              <span>Garantia de 7 Dias</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/35" />
              <span>Download Imediato</span>
            </motion.div>
          </div>

          {/* Hero visual representation: eBook cover (5 columns in desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px]">
              {/* Decorative behind-glow/shadow */}
              <div className="absolute -inset-4 rounded-3xl bg-gold/15 blur-3xl transition-opacity duration-300" />

              {/* Physical/Premium feeling card wrapper */}
              <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-white p-3.5 shadow-2xl shadow-brand-black/10 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={COVER_IMAGE_PATH}
                  alt="A Bíblia para Todos os Momentos da Vida - Capa do Livro"
                  referrerPolicy="no-referrer"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>

              {/* Float Badge with gold accents */}
              <div className="absolute -right-4 -bottom-2 rounded-2xl bg-brand-black border border-gold/30 p-3 shadow-lg flex items-center gap-3">
                <div className="rounded-lg bg-gold/20 p-2 text-gold">
                  <BookOpenIcon />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest text-gold/70 uppercase">Formato</p>
                  <p className="text-xs font-semibold text-white">PDF Alta Resolução</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
