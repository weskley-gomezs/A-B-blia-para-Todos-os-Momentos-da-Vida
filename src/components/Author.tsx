import { motion } from "motion/react";
import { Sparkles, Linkedin, Award, Compass, Quote } from "lucide-react";
import { WatermarkCross, WatermarkFish } from "./ChristianIcons";

export default function Author() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-brand-offwhite" id="author-section">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-brand-beige/30 blur-[100px]" />

      {/* Watermarks */}
      <WatermarkCross className="absolute top-10 right-10 w-24 h-24 opacity-60" />
      <WatermarkFish className="absolute bottom-10 left-10 w-28 h-28 opacity-40" />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-dark uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
            O Idealizador do Livro
          </span>
          <h2 className="serif-heading mt-4 text-3xl font-light tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            Sobre o Autor
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gold" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Side: Dynamic Image with gold outline play */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[340px]"
            >
              {/* Gold backing border offset layer */}
              <div className="absolute -bottom-4 -right-4 top-4 left-4 rounded-2xl border border-gold/45 -z-10 transition-transform duration-500 hover:translate-x-1 hover:translate-y-1" />
              
              {/* Premium Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-white p-3 shadow-2xl">
                <img
                  src="https://i.imgur.com/GbCFg94.jpeg"
                  alt="Weskley Gomes - Autor"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-center filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float signature / Name banner */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-brand-black/95 border border-gold/25 p-3.5 text-center backdrop-blur-md">
                  <h4 className="font-serif text-base font-bold text-white tracking-wide">
                    Weskley Gomes
                  </h4>
                  <p className="text-[10px] font-semibold text-gold uppercase tracking-widest mt-0.5">
                    Fundador & Autor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copywriting biography & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Headline block */}
              <div className="flex items-center gap-2 text-gold-dark font-medium text-sm">
                <Compass className="h-4 w-4 animate-spin-slow text-gold-dark" />
                <span>Uma Vida Dedicada ao Propósito</span>
              </div>

              {/* Bio description paragraphs */}
              <div className="space-y-4 text-brand-gray/90 text-sm leading-relaxed font-light">
                <p>
                  <strong>Weskley Gomes</strong> é empreendedor, criador de conteúdo e cristão apaixonado por compartilhar princípios bíblicos de forma prática para a vida cotidiana.
                </p>
                <p>
                  Seu propósito é ajudar pessoas a fortalecerem sua fé, compreenderem melhor as Escrituras e aplicarem os ensinamentos da Bíblia em áreas como família, trabalho, propósito, finanças e relacionamento com Deus.
                </p>
                <p>
                  Este livro nasceu do desejo de oferecer um material profundo, acessível e organizado para servir como companhia diária na caminhada cristã.
                </p>
              </div>

              {/* Highlight Highlight block / Quote with design element */}
              <div className="relative rounded-2xl border-l-4 border-gold bg-gold/5 p-6 shadow-sm mt-8">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/15 rotate-180" />
                <p className="font-serif italic text-base leading-relaxed text-brand-black/95">
                  &ldquo;Que este livro o aproxime ainda mais de Cristo e da Sua Palavra.&rdquo;
                </p>
                <p className="mt-2.5 text-xs font-bold tracking-wider text-gold-dark uppercase">
                  — Weskley Gomes
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
