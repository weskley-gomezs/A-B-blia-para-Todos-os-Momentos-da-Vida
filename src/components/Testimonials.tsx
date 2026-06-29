import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string; // Placeholder or initials
}

/**
 * DEPOIMENTOS DE CLIENTES
 * Substitua os textos abaixo pelos depoimentos reais que você receber!
 */
const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Ana Carolina Santos",
    role: "Líder de Devocionais no Lar",
    content: "Este livro revolucionou meu momento devocional diário. Eu sempre tive dificuldade para estruturar meu tempo de leitura. Com cada estudo tendo começo, meio e fim de forma prática, consegui criar constância e aprofundar minha comunhão.",
    avatar: "https://picsum.photos/seed/ana/100/100",
  },
  {
    name: "Pastor Matheus Vieira",
    role: "Ministério Pastoral e Educação Teológica",
    content: "Fiquei impressionado com a seriedade e o respeito bíblico desta obra. Os estudos trazem profundidade teológica com um vocabulário simples e focam fortemente na aplicação prática, que é onde a maioria das pessoas sente dificuldade.",
    avatar: "https://picsum.photos/seed/matheus/100/100",
  },
  {
    name: "Gabriela Mendes",
    role: "Estudante e Líder de Jovens",
    content: "O estudo sobre a ansiedade veio no momento perfeito da minha vida. Os desafios de cada semana me tiraram da zona de conforto e me fizeram praticar a Palavra de forma intencional no trabalho e na faculdade. Recomendo para todos!",
    avatar: "https://picsum.photos/seed/gabi/100/100",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-beige/30 py-20 md:py-28" id="testimonials-section">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-gold uppercase">Testemunhos Sinceros</span>
          <h2 className="serif-heading mt-2.5 text-3xl font-light tracking-tight text-brand-black sm:text-4xl md:text-5xl">
            Histórias de Quem Teve a <span className="italic text-gold-dark font-normal">Fé Fortalecida</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-gray/80 font-light md:text-base">
            Veja o impacto prático e espiritual que esses estudos trouxeram para o devocional diário de outros leitores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-brand-beige/40 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Top Section */}
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-0.5 text-gold mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="absolute right-6 top-6 h-10 w-10 text-brand-beige/25" strokeWidth={1} />

                {/* Testimonial text */}
                <p className="text-xs leading-relaxed text-brand-gray font-light italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Bottom Profile Details */}
              <div className="mt-8 flex items-center gap-3 border-t border-brand-beige/20 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="h-9 w-9 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-sans text-xs font-semibold text-brand-black">{testimonial.name}</h4>
                  <p className="text-[10px] text-brand-gray/60 font-light">{testimonial.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
