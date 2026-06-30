import { motion } from "motion/react";
import { Check, BookOpen, Compass, History, Sparkles, HelpCircle, Heart, Award, LucideIcon } from "lucide-react";
import { WatermarkCrown, WatermarkBread } from "./ChristianIcons";

interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const BENEFITS_LIST: BenefitItem[] = [
  {
    title: "100 estudos completos",
    description: "Uma rica seleção cobrindo todos os grandes desafios, emoções e decisões da jornada humana.",
    icon: BookOpen,
  },
  {
    title: "Explicação bíblica",
    description: "Uma análise cuidadosa e profunda das Escrituras de forma acessível e direta.",
    icon: Compass,
  },
  {
    title: "Contexto histórico",
    description: "Entenda os tempos bíblicos, quem escreveu, para quem e por que aquela mensagem foi dita.",
    icon: History,
  },
  {
    title: "Aplicação prática",
    description: "Traduza os ensinamentos espirituais em atitudes diárias no trabalho, família e relacionamentos.",
    icon: Sparkles,
  },
  {
    title: "Perguntas para reflexão",
    description: "Questões pontuais e profundas para autoanálise, ajudando a absorver os ensinamentos.",
    icon: HelpCircle,
  },
  {
    title: "Oração em todos os estudos",
    description: "Uma oração guiada ao final de cada lição para conectar a mente e o coração a Deus.",
    icon: Heart,
  },
  {
    title: "Desafios semanais",
    description: "Desafios intencionais para ajudá-lo a praticar a Palavra de forma concreta na rotina.",
    icon: Award,
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-beige/30 py-20 md:py-28 relative overflow-hidden border-b border-brand-beige/55" id="benefits-section">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
      
      {/* Christian watermark decorations */}
      <WatermarkCrown className="absolute -top-10 -right-10 w-44 h-44 opacity-25" />
      <WatermarkBread className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-gold-dark uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/15"
          >
            Método Prático & Teológico
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="serif-heading mt-4 text-3xl font-light tracking-tight text-brand-black sm:text-4xl md:text-5xl"
          >
            Uma Estrutura Pensada para <span className="italic text-gold-dark font-normal">Transformar</span> sua Fé
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-brand-gray/85 md:text-lg font-light"
          >
            Seja para vencer a ansiedade, acalmar o medo do futuro ou restaurar seu casamento, cada um dos 100 estudos foi estruturado com rigor teológico e foco na sua aplicação prática para trazer paz real ao seu coração.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS_LIST.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-gold/20 bg-white p-6.5 transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/[0.02]"
              >
                {/* Icon Circle */}
                <div className="mb-4.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                  <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                </div>

                {/* Checklist Bullet */}
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold tracking-tight text-brand-black">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray/80 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
