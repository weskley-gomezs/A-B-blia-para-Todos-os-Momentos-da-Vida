import { motion } from "motion/react";
import { Gift, CheckCircle2, Sparkles, BookOpen, Map, Clock, ArrowRight } from "lucide-react";
import { KIWIFY_LINK } from "../config";

export default function Bonus() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-brand-offwhite via-brand-beige/10 to-brand-offwhite" id="bonus-section">
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header container */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-red-700"
          >
            <Gift className="h-4 w-4 animate-bounce text-red-600" />
            <span>Presente Exclusivo e Limitado</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="serif-heading mt-4 text-3xl font-light tracking-tight text-brand-black sm:text-4xl md:text-5xl"
          >
            Comprando <span className="font-serif italic text-gold-dark font-medium">Hoje</span>, você ganha um super bônus gratuito:
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-brand-gray/85 font-light"
          >
            Para acelerar ainda mais o seu aprendizado e compreensão das Escrituras Sagradas, preparamos um material de apoio visual espetacular.
          </motion.p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Side: Visual Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            {/* Elegant glow background */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/20 to-gold-dark/20 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100" />
            
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-white p-4 shadow-2xl">
              <img
                src="/bible_mind_map_bonus.jpg"
                alt="Mapa Mental da Bíblia Completa"
                className="w-full h-auto rounded-xl object-cover shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay sticker for free */}
              <div className="absolute top-8 right-8 rotate-12 bg-red-600 text-white font-black text-center py-2 px-4 rounded-full shadow-lg border border-white flex flex-col items-center justify-center min-w-[75px] h-[75px]">
                <span className="text-[10px] tracking-wider uppercase font-extrabold leading-none">GRÁTIS</span>
                <span className="text-[11px] line-through opacity-70 leading-none mt-1">R$ 47,90</span>
              </div>
              
              {/* Technical Indicator */}
              <div className="mt-3 flex items-center justify-between border-t border-brand-beige/30 pt-3 text-[11px] text-brand-gray/70 font-mono">
                <span className="flex items-center gap-1">
                  <Map className="h-3.5 w-3.5 text-gold-dark" /> PDF de Alta Resolução
                </span>
                <span>Acesso imediato junto ao eBook</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Copy & Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-dark">
                <Sparkles className="h-4 w-4 text-gold-dark" />
                <span>O Guia Visual Definitivo</span>
              </div>
              <h3 className="serif-heading mt-2 text-2xl font-light text-brand-black sm:text-3xl">
                O Mapa Mental de Todos os Livros da Bíblia
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-gray/90 font-light sm:text-base">
                Já se sentiu perdido tentando entender a linha do tempo ou o contexto de um livro bíblico específico? Com este mapa mental completo, você terá uma visão panorâmica instantânea de cada um dos <strong>66 livros da Bíblia</strong>.
              </p>
            </div>

            {/* List of features of the mind map */}
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                {
                  title: "Resumo Temático Prático",
                  desc: "Descubra imediatamente quem escreveu, para quem foi escrito, o tema principal e o ano aproximado de cada livro."
                },
                {
                  title: "Conexões Teológicas Claras",
                  desc: "Visualize de forma simples como o Antigo e o Novo Testamento se conectam e apontam diretamente para Cristo."
                },
                {
                  title: "Ideal para Memorização e Estudo",
                  desc: "Um excelente recurso visual de consulta rápida para acompanhar seu estudo diário, devocionais ou preparação de mensagens."
                },
                {
                  title: "Formato Digital Premium",
                  desc: "Receba o arquivo em PDF de alta qualidade para ler no celular, tablet, computador ou imprimir se desejar."
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  <div>
                    <span className="font-semibold text-brand-black block sm:inline">{item.title}: </span>
                    <span className="text-brand-gray/80 font-light">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Price Urgency Card */}
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 md:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-red-600 mt-0.5 animate-pulse" />
                <div>
                  <h4 className="text-sm font-bold text-brand-black uppercase tracking-wider">
                    Oferta Exclusiva para Compras Hoje:
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-brand-gray/80 font-light leading-relaxed">
                    Este mapa mental é vendido separadamente por <span className="line-through">R$ 47,90</span>, mas será adicionado ao seu painel de membros <span className="text-red-700 font-bold">totalmente de graça</span> se você adquirir os 100 Estudos Bíblicos hoje.
                  </p>
                </div>
              </div>

              {/* Instant purchase button inside the bonus section */}
              <div className="mt-5">
                <a
                  href={KIWIFY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-brand-black py-4 px-6 text-sm font-semibold text-brand-offwhite shadow-md transition-all duration-300 hover:bg-gold-dark"
                >
                  <span>Garantir eBook + Mapa Mental Grátis</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
