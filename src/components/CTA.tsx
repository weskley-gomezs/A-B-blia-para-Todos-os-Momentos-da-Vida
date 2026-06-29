import { motion } from "motion/react";
import { ArrowRight, Lock, Sparkles, ShieldCheck } from "lucide-react";
import { KIWIFY_LINK, PRODUCT_INFO } from "../config";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-brand-black text-white" id="cta-section">
      {/* Decorative colored glow orbs */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />
      <div className="absolute top-0 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-[#141414] p-8 md:p-16 text-center shadow-2xl shadow-gold/5"
        >
          {/* Sparkles / Gold tag */}
          <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/20">
            <Sparkles className="h-5 w-5 animate-spin-slow text-gold" />
          </div>

          {/* Title */}
          <h2 className="serif-heading text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Comece hoje sua jornada pela <span className="italic text-gold font-normal animate-pulse">Palavra de Deus</span>.
          </h2>

          {/* Explanatory text */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-300 font-light md:text-base">
            Tenha em suas mãos uma fonte inesgotável de sabedoria teológica prática para direcionar seus passos, acalmar sua mente e estreitar seus laços com o Altíssimo.
          </p>

          {/* Pricing Highlight Card with beautiful gold/black play */}
          <div className="mx-auto mt-10 max-w-xs rounded-2xl border border-gold/25 bg-brand-black p-6 shadow-md">
            <span className="text-[9px] font-bold tracking-widest text-gold uppercase bg-gold/10 px-2.5 py-1 rounded-md border border-gold/15">
              OFERTA ESPECIAL DE LANÇAMENTO
            </span>
            
            <div className="mt-4 flex items-baseline justify-center gap-1.5">
              <span className="text-xs font-light text-gray-400">Apenas</span>
              <span className="text-3.5xl font-serif font-bold text-gold">{PRODUCT_INFO.price}</span>
            </div>
            
            <p className="mt-1.5 text-[10px] text-gray-400 font-light">
              Pagamento único • Sem assinaturas ou taxas ocultas
            </p>
          </div>

          {/* Huge CTA button - Gold with black text for maximum click attraction */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              href={KIWIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-final-buy-button"
              className="group flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-gold py-4.5 text-sm font-bold tracking-wide text-brand-black shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-white/10 hover:scale-[1.01]"
            >
              <span>Quero Comprar Agora</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secures and cards indicators with gold play */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium text-gray-400">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-gold" />
                Pagamento 100% Criptografado
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/25" />
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                Garantia de Satisfação 7 Dias
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold/25" />
              <span>Plataforma Segura Kiwify</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
