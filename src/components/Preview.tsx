import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { KIWIFY_LINK } from "../config";
import ScrollBook from "./ScrollBook";

export default function Preview() {
  return (
    <section className="bg-brand-beige/35 py-20 md:py-28 text-brand-black relative overflow-hidden border-y border-brand-beige/40" id="preview-section">
      {/* Decorative colored glow orbs */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-gold/5 blur-[130px]" />
      <div className="absolute bottom-0 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-gold-dark uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
            Experiência Interna
          </span>
          <h2 className="serif-heading mt-4 text-3xl font-light tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            Abra o Livro e Sinta o Cuidado Teológico
          </h2>
          <p className="mt-4 text-base text-brand-gray/85 md:text-lg font-light">
            Desenvolvemos um layout minimalista de altíssima legibilidade, feito para que o seu momento com Deus seja livre de distrações e focado no essencial.
          </p>
        </div>

        {/* Preview layout: Left visual page, Right description */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Side: Dynamic Scroll-driven Interactive Book */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <ScrollBook />
          </div>

          {/* Right Side: Description and explaining elements in light theme with gold-dark accents */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-gold-dark uppercase text-center lg:text-left">
              Estrutura de Aprendizado
            </span>
            <h3 className="serif-heading mt-2.5 text-2xl font-light text-brand-black sm:text-3xl text-center lg:text-left">
              Cada um dos 100 Estudos Contém:
            </h3>

            {/* List with rich text */}
            <ul className="mt-8 space-y-4">
              {[
                { label: "Versículo-chave", desc: "A passagem bíblica central que servirá de âncora para meditação e memorização durante o seu dia." },
                { label: "Contexto Bíblico", desc: "Breve pano de fundo histórico e cultural do texto para evitar interpretações fora de contexto." },
                { label: "Explicação Teológica", desc: "Uma reflexão simples e profunda que desmistifica palavras originais e traz revelação pura." },
                { label: "Aplicação Prática", desc: "Ações práticas e comportamentais para aplicar o ensinamento no seu dia a dia imediatamente." },
                { label: "Perguntas para Reflexão", desc: "Indagações perspicazes para conduzir você ao autoexame sincero diante de Deus." },
                { label: "Oração em todos os estudos", desc: "Uma oração guiada para inspirar e iniciar seu momento particular de clamor e adoração." },
                { label: "Desafio da Semana", desc: "Um convite à ação intencional para fixar a verdade estudada na sua rotina semanal." }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3.5"
                >
                  <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-gold-dark" />
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-brand-black">{item.label}</h4>
                    <p className="text-xs text-brand-gray/80 font-light leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Micro Call-to-action */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href={KIWIFY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="preview-section-buy-now"
                className="group inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-xs font-semibold tracking-wide text-brand-black transition-colors duration-300 hover:text-gold-dark hover:border-gold-dark"
              >
                <span>Adquirir o eBook completo com todos os estudos</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
