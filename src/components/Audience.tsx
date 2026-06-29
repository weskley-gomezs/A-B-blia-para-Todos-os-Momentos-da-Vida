import { motion } from "motion/react";
import { Check } from "lucide-react";

const AUDIENCE_DESIRES = [
  {
    title: "Conhecer mais a Bíblia",
    description: "Para quem deseja ir além da leitura superficial e compreender o contexto de forma clara e contextualizada.",
  },
  {
    title: "Fortalecer sua fé",
    description: "Para quem busca construir um alicerce inabalável de confiança em Deus frente aos desafios cotidianos.",
  },
  {
    title: "Criar uma rotina devocional",
    description: "Para quem sente dificuldade em manter constância e quer um método prático e motivador de estudo diário.",
  },
  {
    title: "Aplicar a Palavra na prática",
    description: "Para quem quer transformar ensinamento teológico em ações concretas nas suas tomadas de decisão e escolhas.",
  },
  {
    title: "Crescer espiritualmente",
    description: "Para cristãos de qualquer denominação que almejam amadurecer e estreitar o relacionamento íntimo com o Criador.",
  },
];

export default function Audience() {
  return (
    <section className="bg-brand-black py-20 md:py-28 text-white relative overflow-hidden" id="audience-section">
      {/* Decorative dark orbs */}
      <div className="absolute top-1/2 left-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-gold/5 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Text: Section Heading & Intro */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
              Direcionamento Claro
            </span>
            <h2 className="serif-heading mt-5 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Este Livro Foi Escrito para Você?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 font-light md:text-base">
              Desenvolvemos este eBook especificamente para suprir as lacunas que impedem muitos cristãos de desenvolverem uma comunhão madura, frequente e revigorante com a verdade das Escrituras.
            </p>
            
            {/* Visual element / quote */}
            <div className="mt-8 hidden rounded-2xl border border-white/10 bg-[#141414] p-5 lg:block text-left">
              <p className="font-serif italic text-sm text-gray-200">
                &ldquo;A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.&rdquo;
              </p>
              <p className="mt-2 text-right text-[10px] font-bold tracking-wider text-gold uppercase">
                Salmo 119:105
              </p>
            </div>
          </div>

          {/* Right Cards: Desires list on deep background */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {AUDIENCE_DESIRES.map((desire, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#141414] p-5.5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/[0.03]"
                >
                  {/* Premium gold check badge */}
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  
                  <div>
                    <h3 className="font-sans text-base font-semibold tracking-tight text-white group-hover:text-gold">
                      {desire.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300 font-light">
                      {desire.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
