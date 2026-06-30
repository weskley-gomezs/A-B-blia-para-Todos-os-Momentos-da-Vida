import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-brand-offwhite py-20 md:py-28 relative overflow-hidden" id="guarantee-section">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-gold/30 bg-brand-black p-8 md:p-16 text-center shadow-2xl shadow-gold/10"
        >
          {/* Subtle gold glow behind */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

          {/* Golden Shield Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30">
            <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h2 className="serif-heading text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
            Sua Satisfação Garantida ou <span className="italic text-gold font-normal">Seu Dinheiro de Volta</span>
          </h2>

          {/* Copywriter text */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 font-light md:text-base">
            Temos plena convicção no impacto espiritual e prático que este material trará para te libertar da ansiedade e do medo, bem como restaurar a paz no seu casamento. Por isso, oferecemos uma <strong className="text-white font-semibold">garantia incondicional de 7 dias</strong>. 
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-gray-400 font-light">
            Se por qualquer motivo você achar que o conteúdo não é para você ou não fortalecer a sua fé, basta nos enviar um e-mail. Nós devolveremos 100% do seu investimento, sem questionamentos, sem burocracia. O risco é todo nosso.
          </p>

          {/* Guarantee Highlights */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8 text-xs font-semibold text-gold tracking-wide">
            <span className="flex items-center gap-1.5">
              ✓ Garantia Total de 7 Dias
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-gold/30 sm:inline" />
            <span className="flex items-center gap-1.5">
              ✓ Reembolso Sem Burocracia
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-gold/30 sm:inline" />
            <span className="flex items-center gap-1.5">
              ✓ Processamento 100% Seguro
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

