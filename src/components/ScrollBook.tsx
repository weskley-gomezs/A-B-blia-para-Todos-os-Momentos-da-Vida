import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Star, BookOpen, Quote } from "lucide-react";
import { WatermarkCross } from "./ChristianIcons";

export default function ScrollBook() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll of this specific book container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to 3D Y-axis rotation (0deg to -180deg)
  // We want the book to start opening as it enters the viewport and be fully opened in the middle of scroll.
  const coverRotateY = useTransform(scrollYProgress, [0.15, 0.48], [0, -180]);
  
  // Dynamic shadows depending on opening angle
  const bookShadow = useTransform(scrollYProgress, [0.15, 0.45], [
    "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    "0 25px 50px -12px rgba(197, 160, 89, 0.15), 0 15px 20px -5px rgba(0,0,0,0.08)"
  ]);

  // Use smooth spring transitions for rotation and movement
  const smoothRotateY = useSpring(coverRotateY, { stiffness: 90, damping: 22, mass: 0.6 });

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full py-10 overflow-visible select-none"
      style={{ perspective: "1800px" }}
    >
      {/* Scroll instruction banner overlay */}
      <motion.div 
        style={{
          opacity: useTransform(scrollYProgress, [0.1, 0.22], [1, 0]),
          y: useTransform(scrollYProgress, [0.1, 0.22], [0, -10])
        }}
        className="absolute -top-4 bg-gold/10 border border-gold/20 text-gold-dark text-[10px] font-bold tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-1.5 z-40 animate-pulse"
      >
        <BookOpen className="h-3 w-3" />
        <span>ROLE A PÁGINA PARA ABRIR O LIVRO</span>
      </motion.div>

      {/* 3D Book Frame */}
      <motion.div
        style={{ 
          boxShadow: bookShadow,
          transformStyle: "preserve-3d"
        }}
        className="relative w-[310px] h-[430px] sm:w-[380px] sm:h-[500px] md:w-[410px] md:h-[540px] rounded-r-xl transition-all duration-300"
      >
        
        {/* RIGHT PAGE (Fixed Background Page - Estudo 14) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-r-xl border border-brand-beige/50 border-l-0 shadow-inner p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden z-10">
          {/* Paper subtle texture */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-beige/5 opacity-40 pointer-events-none" />
          
          {/* Inner Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-beige/40 pb-2.5 text-[8px] sm:text-[9px] font-mono tracking-widest text-brand-gray/60 uppercase">
              <span>ESTUDO 14: PAZ</span>
              <span>PÁG. 42</span>
            </div>

            {/* Title of Study inside the book */}
            <div className="mt-4 text-center">
              <h3 className="serif-heading text-base sm:text-lg md:text-xl font-bold text-brand-black leading-tight">
                Paz na Tempestade
              </h3>
              <div className="mx-auto mt-2 h-[1px] w-10 bg-gold" />
            </div>

            {/* 1. Versículo Chave Box */}
            <div className="mt-4 rounded-lg border-l border-gold bg-brand-beige/15 p-2.5 sm:p-3">
              <p className="serif-heading italic text-[10px] sm:text-[11px] leading-relaxed text-brand-black/95">
                &ldquo;Não andeis ansiosos por coisa alguma... E a paz de Deus guardará os vossos corações.&rdquo;
              </p>
              <p className="mt-1.5 text-right text-[8px] font-bold tracking-wider text-gold-dark uppercase">
                Filipenses 4:6-7
              </p>
            </div>

            {/* 2. Contexto Bíblico */}
            <div className="mt-3.5">
              <span className="text-[8px] font-bold tracking-widest text-gold-dark uppercase block mb-0.5">Contexto</span>
              <p className="text-[9px] sm:text-[10px] leading-relaxed text-brand-gray/95 font-light">
                Paulo escreveu acorrentado em uma prisão romana. Apesar do risco iminente de morte, o tom dominante é a alegria.
              </p>
            </div>

            {/* 3. Reflexão */}
            <div className="mt-3">
              <span className="text-[8px] font-bold tracking-widest text-gold-dark uppercase block mb-0.5">Reflexão</span>
              <p className="text-[9px] sm:text-[10px] leading-relaxed text-brand-gray/95 font-light">
                A palavra grega para ansiedade é <span className="italic">merimnao</span>, significando &ldquo;puxado em direções opostas&rdquo;.
              </p>
            </div>

            {/* 4. Desafio da Semana Box */}
            <div className="mt-4 rounded-lg border border-gold/15 bg-gold/5 p-2.5">
              <div className="flex items-center gap-1 text-[9px] font-semibold text-brand-black">
                <Star className="h-3 w-3 text-gold-dark fill-gold/10" />
                <span className="text-gold-dark">Desafio da Semana</span>
              </div>
              <p className="mt-0.5 text-[9px] leading-relaxed text-brand-gray/80 font-light">
                Fazer pausas diárias longe de telas para orar em silêncio absoluto.
              </p>
            </div>
          </div>
        </div>

        {/* INNER LEFT PAGE (Visible when cover is flipped open) */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#faf8f4] rounded-l-xl border border-brand-beige/65 border-r-0 shadow-inner p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden z-10">
          {/* Inner Left content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="border-b border-brand-beige/40 pb-2.5 text-[8px] sm:text-[9px] font-mono tracking-widest text-brand-gray/50 uppercase">
              <span>GUIA DEVOCIONAL</span>
            </div>

            {/* Central elements */}
            <div className="my-auto flex flex-col items-center text-center px-2">
              <div className="h-10 w-10 text-gold/20 mb-3">
                <WatermarkCross className="w-full h-full opacity-40 text-gold" />
              </div>
              
              <Quote className="h-4 w-4 text-gold/40 mb-2 rotate-180" />
              
              <p className="font-serif italic text-xs sm:text-sm leading-relaxed text-brand-black/90">
                &ldquo;A Tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.&rdquo;
              </p>
              
              <span className="mt-3 text-[8px] sm:text-[9px] font-bold tracking-widest text-gold-dark uppercase">
                SALMO 119:105
              </span>
            </div>

            {/* Footer */}
            <div className="text-center text-[7px] font-mono tracking-wider text-brand-gray/40 border-t border-brand-beige/30 pt-2">
              <span>100 ESTUDOS PRÁTICOS</span>
            </div>
          </div>
        </div>

        {/* 3D FLIPPING COVER CONTAINER (Pivots at the Left spine edge) */}
        <motion.div
          style={{
            rotateY: smoothRotateY,
            transformStyle: "preserve-3d",
            transformOrigin: "left center"
          }}
          className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer origin-left"
        >
          {/* COVER FRONT SIDE (The solid elegant cover design) */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0a0a0a] rounded-r-xl border border-gold/30 shadow-2xl flex flex-col justify-between p-4 sm:p-5 md:p-6 text-center select-none overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Gold hot stamping borders */}
            <div className="absolute inset-2 border border-gold/15 rounded-lg pointer-events-none" />
            <div className="absolute inset-3 border border-gold/5 rounded-lg pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between py-1.5">
              {/* Cover Top Badge */}
              <div className="flex flex-col items-center">
                <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-gold uppercase bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">
                  EDIÇÃO DE LUXO
                </span>
              </div>

              {/* Main Book Title */}
              <div className="my-auto space-y-2">
                <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-gold uppercase block">
                  100 ESTUDOS
                </span>
                
                <h1 className="serif-heading text-lg sm:text-xl md:text-2xl font-light text-white leading-tight tracking-wide">
                  PRÁTICOS PARA UMA
                </h1>
                
                <h2 className="serif-heading text-xl sm:text-2xl md:text-3xl font-normal text-gold italic leading-tight tracking-wide">
                  Fé Inabalável
                </h2>
                
                <div className="mx-auto h-0.5 w-8 bg-gold/40 mt-3" />
              </div>

              {/* Author name & footer */}
              <div className="flex flex-col items-center space-y-1">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-300 uppercase">
                  WESKLEY GOMES
                </span>
                <span className="text-[6px] tracking-wider text-gray-500 uppercase">
                  Guia Prático Teológico
                </span>
              </div>
            </div>
          </div>

          {/* COVER BACK SIDE (Inside the front cover - acts as transition page) */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#fdfbf7] rounded-l-xl border-l-2 border-gold/30 flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            {/* Minimal aesthetic layout */}
            <div className="h-full w-full flex flex-col justify-between border border-brand-beige/40 rounded-lg p-3">
              <div className="text-[8px] font-mono tracking-widest text-brand-gray/40">
                <span>CONTEÚDO EXCLUSIVO</span>
              </div>
              
              <div className="my-auto text-center space-y-2">
                <div className="h-10 w-10 text-gold/10 mx-auto">
                  <WatermarkCross className="w-full h-full" />
                </div>
                <h4 className="serif-heading text-sm text-brand-black font-semibold">
                  A Palavra de Deus viva e eficaz
                </h4>
                <p className="text-[9px] text-brand-gray/60 leading-relaxed font-light">
                  Desenvolvido para direcionar seus caminhos diários e alimentar sua fé em qualquer lugar.
                </p>
              </div>

              <div className="text-[7px] text-center font-mono tracking-wider text-brand-gray/30">
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOOK SPINE EFFECT SHADOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-full bg-gradient-to-r from-black/20 via-black/5 to-black/20 z-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gold/30 z-30 pointer-events-none" />
        
      </motion.div>
    </div>
  );
}
