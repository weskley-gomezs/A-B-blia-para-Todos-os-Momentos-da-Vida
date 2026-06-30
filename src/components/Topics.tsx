import { motion } from "motion/react";
import {
  Brain,
  Shield,
  HeartHandshake,
  Coins,
  Sparkles,
  Users,
  Flame,
  Sprout,
  Sword,
  Globe,
  LucideIcon,
} from "lucide-react";
import { WatermarkCross, WatermarkFish } from "./ChristianIcons";

interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
  accentText: string;
}

const TOPICS_LIST: Topic[] = [
  {
    title: "Vencendo a Ansiedade",
    description: "Estudos guiados para acalmar a mente atribulada, encontrar paz na soberania divina e descansar nos planos de Deus.",
    icon: Brain,
    accentText: "Paz Mental",
  },
  {
    title: "Superando o Medo",
    description: "Como substituir a paralisia do medo pela coragem da fé baseada na presença incondicional e protetora do Senhor.",
    icon: Shield,
    accentText: "Coragem",
  },
  {
    title: "Casamento Segundo a Palavra",
    description: "Princípios práticos para blindar a união, cultivar a paciência mútua, a comunicação sábia e o amor sacrificial.",
    icon: HeartHandshake,
    accentText: "União",
  },
  {
    title: "Finanças Saudáveis",
    description: "Sabedoria bíblica sobre mordomia, administração responsável, contentamento e como vencer a escravidão das dívidas.",
    icon: Coins,
    accentText: "Mordomia",
  },
  {
    title: "Santidade & Vida Cristã",
    description: "O chamado à pureza diária, o combate às tentações secretas e o processo constante de imitação de Jesus Cristo.",
    icon: Sparkles,
    accentText: "Consagração",
  },
  {
    title: "Família e Lar Cristão",
    description: "Como guiar os filhos no caminho, honrar pai e mãe, e estabelecer um ambiente de amor e instrução espiritual.",
    icon: Users,
    accentText: "Aliança",
  },
  {
    title: "Espírito Santo e Igreja",
    description: "Compreenda a atuação do Consolador em sua vida, a importância da comunhão dos santos e do serviço no corpo.",
    icon: Flame,
    accentText: "Unção",
  },
  {
    title: "Crescimento & Maturidade",
    description: "Como sair do leite espiritual e avançar para o alimento sólido, cultivando as disciplinas espirituais diárias.",
    icon: Sprout,
    accentText: "Maturidade",
  },
  {
    title: "Combate Espiritual",
    description: "Aprenda a revestir-se da Armadura de Deus para resistir firmemente às ciladas do dia a dia e perseverar com fé.",
    icon: Sword,
    accentText: "Resistência",
  },
  {
    title: "Missões & o Avanço do Reino",
    description: "Descubra o seu papel no Ide de Jesus, levando a esperança do Evangelho a pessoas próximas e distantes.",
    icon: Globe,
    accentText: "Propósito",
  },
];

export default function Topics() {
  return (
    <section className="py-20 md:py-28 bg-brand-black text-white relative overflow-hidden" id="topics-section">
      {/* Premium subtle glowing light orbs */}
      <div className="absolute top-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-[100px]" />

      {/* Background Christian watermarks */}
      <WatermarkCross className="absolute top-12 left-10 w-28 h-28 opacity-20" />
      <WatermarkFish className="absolute bottom-12 right-12 w-32 h-32 opacity-20 rotate-12" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Header Section with Dark theme typography */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
              Conteúdo Abrangente
            </span>
            <h2 className="serif-heading mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              Direção para Todas as Áreas do seu Caminhar com Deus
            </h2>
          </div>
          <p className="max-w-md text-center text-sm leading-relaxed text-gray-300 md:text-left font-light">
            Se a ansiedade, o medo ou as dúvidas no casamento te acompanham, saiba que não importa a estação ou momento de aflição que você esteja atravessando, há uma palavra de direção, consolo e sabedoria fundamentada diretamente nas Escrituras Sagradas.
          </p>
        </div>

        {/* Topics Grid with glowing cards on dark backdrop */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS_LIST.map((topic, idx) => {
            const IconComponent = topic.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/[0.04]"
              >
                <div>
                  {/* Top line with Icon and mini label */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-gold transition-colors duration-300 group-hover:bg-gold/25 group-hover:text-white">
                      <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-gold">
                      {topic.accentText}
                    </span>
                  </div>

                  {/* Title and Content */}
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-white group-hover:text-gold transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-gray-300 font-light">
                    {topic.description}
                  </p>
                </div>

                {/* Subtle indicator bottom decoration */}
                <div className="mt-6 h-0.5 w-full bg-white/5 group-hover:bg-gold/35 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
