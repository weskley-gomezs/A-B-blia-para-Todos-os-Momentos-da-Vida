import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como recebo o livro?",
    answer: "O envio é 100% digital. Assim que seu pagamento for confirmado pela plataforma da Kiwify, você receberá um e-mail de confirmação contendo o link exclusivo para download do eBook em formato PDF de altíssima resolução.",
  },
  {
    question: "O acesso é imediato?",
    answer: "Sim! Se a compra for realizada via Pix ou Cartão de Crédito, o processamento ocorre em menos de 2 minutos e o material é enviado imediatamente para o seu e-mail cadastrado.",
  },
  {
    question: "Posso ler no celular?",
    answer: "Com certeza. O formato PDF é universal e foi otimizado tanto para leitura em telas pequenas (smartphones) quanto para tablets, e-readers (como Kindle) e computadores.",
  },
  {
    question: "É necessário ter acesso à internet para ler?",
    answer: "Não! Apenas para fazer o download inicial do arquivo. Depois de baixado no seu dispositivo, você poderá ler os 100 estudos onde e quando quiser, completamente offline.",
  },
  {
    question: "Serve para novos convertidos ou pessoas que estão começando?",
    answer: "Sim! Ele foi escrito especificamente com uma linguagem acolhedora, clara e didática. É excelente tanto para novos convertidos que desejam aprender a estudar a Bíblia quanto para cristãos maduros que querem renovar seu hábito devocional diário.",
  },
  {
    question: "O livro realmente aborda problemas práticos como ansiedade, medo e casamento?",
    answer: "Sim, absolutamente. Os 100 estudos foram divididos em temas cruciais da vida real. Há capítulos inteiros dedicados especificamente a como vencer a ansiedade e as preocupações diárias, como superar o medo do amanhã e do futuro, e como guiar e blindar o casamento e a família de acordo com os conselhos e princípios das Escrituras Sagradas.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-beige/25 py-20 md:py-28" id="faq-section">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-gold uppercase">Perguntas Frequentes</span>
          <h2 className="serif-heading mt-2.5 text-3xl font-light tracking-tight text-brand-black sm:text-4xl">
            Respostas para Suas Dúvidas
          </h2>
          <p className="mt-4 text-sm text-brand-gray/80 font-light">
            Tem alguma pergunta sobre o eBook ou o processo de compra? Confira as respostas rápidas abaixo.
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-brand-beige bg-white transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5.5 text-left transition-colors duration-300 hover:bg-brand-beige/10"
                >
                  <span className="font-sans text-sm font-semibold tracking-tight text-brand-black">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-beige/30 text-brand-gray/80">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-brand-beige/40 p-5.5 text-xs leading-relaxed text-brand-gray/85 font-light bg-brand-offwhite/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Micro contact anchor */}
        <div className="mt-10 text-center">
          <p className="text-xs text-brand-gray/70">
            Ainda tem alguma dúvida? Entre em contato pelo e-mail do autor no rodapé da página.
          </p>
        </div>

      </div>
    </section>
  );
}
