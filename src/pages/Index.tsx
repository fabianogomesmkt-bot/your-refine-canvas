import { useEffect, useState } from "react";
import heroFace from "../assets/hero-face.jpg.asset.json";
import conceptImg from "../assets/concept.jpg";
import clinicSp from "../assets/clinic-sp.jpg";
import clinicUdi from "../assets/clinic-udi.jpg";
import ctaFace from "../assets/cta-face.jpg";
import tAcne from "../assets/treatment-acne.jpg";
import tMelasma from "../assets/treatment-melasma.jpg";
import tBlefaro from "../assets/treatment-blefaro.jpg";
import tRejuv from "../assets/treatment-rejuvenescimento.jpg";
import tFullface from "../assets/treatment-fullface.jpg";
import tLips from "../assets/treatment-lips.jpg";
import tNose from "../assets/treatment-nose.jpg";
import tCollagen from "../assets/treatment-collagen.jpg";
import tBotox from "../assets/treatment-botox.jpg";

const WHATSAPP = "https://wa.me/5500000000000";

export default Index;

const NAV = [
  { label: "Método", href: "#metodo" },
  { label: "Resultados reais", href: "#resultados" },
  { label: "Dr. Múcio Carvalho", href: "#dr-mucio" },
  { label: "Academy", href: "#academy" },
];

const METHOD_PILLARS = [
  { n: "01", title: "Avaliação individualizada", desc: "Estudo aprofundado da anatomia, proporções e identidade de cada paciente." },
  { n: "02", title: "Protocolos personalizados", desc: "Planos exclusivos construídos a partir dos objetivos e da singularidade de cada face." },
  { n: "03", title: "Ciência e técnica avançada", desc: "Procedimentos respaldados por evidência, atualização contínua e refinamento técnico." },
  { n: "04", title: "Naturalidade e sofisticação", desc: "Resultados elegantes, equilibrados e fiéis à identidade do paciente." },
  { n: "05", title: "Rejuvenescimento progressivo", desc: "Abordagem que evolui ao longo do tempo, respeitando a fisiologia da pele." },
  { n: "06", title: "Resultados estratégicos", desc: "Cada etapa pensada para gerar impacto real, consistente e duradouro." },
];

const TREATMENTS: {
  title: string;
  image: string;
  desc: string;
  benefits: string[];
  exclusive?: boolean;
}[] = [
  {
    title: "Your Refine® — Tratamento de Cicatrizes de Acne",
    image: tAcne,
    exclusive: true,
    desc: "Protocolo exclusivo e personalizado para renovação profunda da pele, redução das cicatrizes de acne e melhora progressiva da textura e do nivelamento cutâneo.",
    benefits: ["Redução das cicatrizes", "Estímulo intenso de colágeno", "Renovação celular profunda", "Melhora da textura da pele"],
  },
  {
    title: "Your Refine Melasma® — Controle de Melasma e Manchas",
    image: tMelasma,
    exclusive: true,
    desc: "Protocolo desenvolvido para controle do melasma, clareamento progressivo de manchas e melhora global da qualidade da pele.",
    benefits: ["Controle avançado do melasma", "Clareamento de manchas", "Uniformização do tom da pele", "Pele mais luminosa e saudável"],
  },
  {
    title: "Your Refine Blefaro® — Blefaro Química",
    image: tBlefaro,
    exclusive: true,
    desc: "Protocolo avançado para rejuvenescimento do olhar, melhora da flacidez palpebral e renovação da pele ao redor dos olhos.",
    benefits: ["Rejuvenescimento do olhar", "Redução da flacidez palpebral", "Estímulo de colágeno", "Aparência mais descansada"],
  },
  {
    title: "Your Refine Rejuvenescimento®",
    image: tRejuv,
    exclusive: true,
    desc: "Protocolo exclusivo para tratar sinais avançados do envelhecimento cutâneo, promovendo firmeza, textura, luminosidade e renovação profunda da pele.",
    benefits: ["Redução de rugas e linhas", "Estímulo de colágeno", "Melhora da firmeza", "Rejuvenescimento progressivo"],
  },
  {
    title: "Harmonização Facial Full Face",
    image: tFullface,
    desc: "Tratamento completo que analisa a face como um todo, valorizando proporções, corrigindo assimetrias e realçando a beleza natural.",
    benefits: ["Harmonização global da face", "Melhora dos contornos", "Reposição de volume com naturalidade", "Aparência equilibrada e sofisticada"],
  },
  {
    title: "Preenchimento Labial",
    image: tLips,
    desc: "Procedimento planejado para valorizar os lábios com definição, contorno, hidratação e volume de forma natural e elegante.",
    benefits: ["Volume com naturalidade", "Definição e contorno", "Correção de assimetrias", "Hidratação profunda"],
  },
  {
    title: "Rinomodelação",
    image: tNose,
    desc: "Procedimento minimamente invasivo para melhorar o contorno nasal, elevar a ponta e harmonizar o perfil sem cirurgia.",
    benefits: ["Correção de imperfeições nasais", "Elevação da ponta", "Harmonização do perfil", "Resultado imediato e natural"],
  },
  {
    title: "Bioestimuladores de Colágeno",
    image: tCollagen,
    desc: "Tratamento que estimula o próprio organismo a produzir novas fibras de colágeno, promovendo firmeza, sustentação e rejuvenescimento progressivo.",
    benefits: ["Estímulo natural de colágeno", "Melhora da firmeza", "Redução da flacidez", "Resultados progressivos"],
  },
  {
    title: "Toxina Botulínica Full Face",
    image: tBotox,
    desc: "Protocolo completo para suavização de linhas, prevenção do envelhecimento e melhora global da aparência da face.",
    benefits: ["Suavização de linhas", "Prevenção do envelhecimento", "Elevação sutil das sobrancelhas", "Aparência descansada e natural"],
  },
];

const RESULTS = [
  "Harmonização Facial",
  "Rejuvenescimento",
  "Cicatrizes de Acne",
  "Lábios e Perfil",
];

const TESTIMONIALS = [
  { text: "Eu tinha medo de perder minha naturalidade. Na YOUR·REFINE, senti que cada detalhe foi pensado com cuidado. O resultado ficou leve, elegante e exatamente como eu imaginava.", name: "Paciente verificada", role: "Harmonização Facial" },
  { text: "O atendimento foi extremamente cuidadoso desde a avaliação. Entendi o que fazia sentido para o meu rosto e o resultado ficou muito natural.", name: "Paciente verificada", role: "Rejuvenescimento" },
  { text: "Percebi diferença significativa nas minhas cicatrizes de acne, com um cuidado e planejamento que nunca tinha visto antes.", name: "Paciente verificada", role: "Cicatrizes de Acne" },
];

const ACADEMY_LEARN = [
  "Protocolos exclusivos do Your Refine Method®",
  "Tratamentos avançados para rejuvenescimento facial",
  "Manejo de cicatrizes de acne e regeneração cutânea",
  "Estratégias para melhorar a qualidade global da pele",
  "Personalização de protocolos clínicos",
  "Planejamento e execução de casos complexos",
  "Posicionamento e diferenciação profissional",
  "Segurança, previsibilidade e excelência nos resultados",
];

const ACADEMY_PROFILES = [
  { title: "Dominar protocolos avançados", desc: "Técnicas exclusivas e metodologias clínicas que proporcionam resultados consistentes, reprodutíveis e respaldados pela experiência." },
  { title: "Tratar casos complexos", desc: "Conduzir tratamentos para cicatrizes de acne, envelhecimento avançado, flacidez, melasma e alterações complexas da pele." },
  { title: "Elevar o valor percebido", desc: "Estruturar protocolos premium, aumentar a satisfação dos pacientes e posicionar-se em um mercado de alta performance." },
  { title: "Diferenciar-se pela inovação", desc: "Técnicas, conceitos e estratégias que estão transformando a estética regenerativa e elevando os padrões dos tratamentos faciais." },
  { title: "Construir autoridade profissional", desc: "Ser reconhecido por entregar resultados que geram impacto real, fortalecendo reputação e presença no mercado." },
  { title: "Visão estratégica da estética", desc: "Criar protocolos personalizados, conduzir casos complexos e construir uma carreira sólida e diferenciada." },
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Method />
      <Treatments />
      <Results />
      <Doctor />
      <Testimonials />
      <Academy />
      <Clinics />
      <Location />
      <CTAFinal />
      <Footer />
    </main>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`font-serif text-xl tracking-[0.35em] silver-text ${className}`}>
      YOUR<span className="mx-1 opacity-60">·</span>REFINE
    </a>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  const isLight = theme === "light";
  return (
    <button
      onClick={onToggle}
      aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
      className="relative inline-flex items-center h-8 w-16 border border-border/70 hover:border-foreground/60 transition-colors"
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 h-6 w-6 transition-all duration-500"
        style={{
          left: isLight ? "calc(100% - 1.625rem)" : "0.125rem",
          background: "linear-gradient(135deg, #ededed, #6e6e6e, #ededed)",
        }}
      />
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[8px] tracking-[0.2em] text-foreground/50">DARK</span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[8px] tracking-[0.2em] text-foreground/50">LIGHT</span>
    </button>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const stored = (localStorage.getItem("yr-theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    localStorage.setItem("yr-theme", theme);
  }, [theme]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden xl:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="xl:hidden text-foreground/80 p-2">
            <div className={`w-6 h-px bg-foreground mb-1.5 transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <div className={`w-6 h-px bg-foreground mb-1.5 transition ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-px bg-foreground transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden glass-nav border-t border-border/40">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.3em] text-foreground/80">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] pt-28 md:pt-32 grain overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,212,212,0.08),transparent_60%)]" />
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-20 silver-border" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100svh-7rem)]">
        <div className="lg:col-span-7 fade-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-foreground/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">Estética facial avançada</span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-light tracking-tight">
            Harmonização facial<br />
            estratégica para<br />
            <em className="silver-text not-italic font-light">revelar a sua</em>
            <br />
            <span className="silver-text">melhor versão.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed font-light">
            Na YOUR·REFINE, cada detalhe do rosto é analisado com ciência, técnica e estratégia para resultados naturais, sofisticados e alinhados à sua identidade.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-9 py-4 text-[10px] uppercase tracking-[0.35em] hover:text-background">
              Agendar avaliação
            </a>
            <a href="#metodo" className="inline-flex items-center gap-3 px-3 py-4 text-[10px] uppercase tracking-[0.35em] text-foreground/80 hover:text-foreground transition border-b border-foreground/30 hover:border-foreground">
              Conhecer o Your Refine Method®
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t border-border/50 pt-8">
            {[
              "Resultados naturais",
              "Protocolo personalizado",
              "São Paulo e Uberlândia",
              "Estética com estratégia",
            ].map((s) => (
              <div key={s} className="flex items-start gap-3">
                <div className="mt-1.5 w-3 h-px bg-[var(--silver)]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 leading-snug">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative fade-up">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <div className="absolute -inset-2 silver-border opacity-50" />
            <img src={heroFace.url} alt="Retrato editorial de harmonização facial" className="absolute inset-0 w-full h-full object-cover" width={1080} height={1440} />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background/90 backdrop-blur px-5 py-4 border border-border">
              <div className="text-[9px] uppercase tracking-[0.35em] text-foreground/50 mb-1">Your Refine Method®</div>
              <div className="font-serif text-lg silver-text">Refinement · 01</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-px bg-[var(--silver)]" />
      <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">{children}</span>
    </div>
  );
}

function Method() {
  return (
    <section id="metodo" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <SectionLabel>Your Refine Method®</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
              Uma metodologia exclusiva para tratar a face de forma <em className="silver-text not-italic">estratégica e global</em>.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5 text-foreground/70 font-light leading-relaxed">
            <p>
              O Your Refine Method® é uma metodologia desenvolvida pelo Dr. Múcio Carvalho para tratar a face de forma estratégica, personalizada e global.
            </p>
            <p className="text-foreground/60">
              Mais do que realizar procedimentos isolados, o método avalia a individualidade de cada paciente: proporções, qualidade da pele, sinais de envelhecimento, cicatrizes, flacidez, manchas, assimetrias e objetivos estéticos.
            </p>
            <p className="text-foreground/60">
              O foco é realçar a melhor versão de cada pessoa, preservando naturalidade, segurança e elegância.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {METHOD_PILLARS.map((p) => (
            <article key={p.n} className="bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-[var(--graphite)]/60">
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-sm silver-text">{p.n}</span>
                <div className="w-8 h-px bg-foreground/30" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-tight font-light mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-light">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section id="tratamentos" className="relative py-28 md:py-40 bg-[var(--graphite)]/30">
      <div className="hairline mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-6">
            <SectionLabel>Procedimentos realizados</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light">
              Protocolos estratégicos para um <em className="silver-text not-italic">resultado refinado</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-foreground/70 text-base md:text-lg font-light leading-relaxed self-end">
            Tratamentos personalizados para renovar, harmonizar e elevar a qualidade da pele com técnica, segurança e naturalidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.title}
              className={
                "group relative flex flex-col backdrop-blur-sm transition-all duration-500 " +
                (t.exclusive
                  ? "bg-gradient-to-b from-[#2a2a2e]/80 via-[#1f1f22]/70 to-[var(--graphite)]/60 border border-[var(--silver)]/40 hover:border-[var(--silver)]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(192,192,200,0.06)]"
                  : "bg-[var(--graphite)]/40 border border-white/10 hover:border-[var(--silver)]/60")
              }
              style={t.exclusive ? undefined : { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="font-serif text-xs silver-text">{String(i + 1).padStart(2, "0")}</span>
                  <div className="w-8 h-px bg-foreground/40" />
                </div>
                {t.exclusive && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block text-[9px] uppercase tracking-[0.28em] silver-text border border-[var(--silver)]/50 px-2.5 py-1 bg-black/40 backdrop-blur-sm">
                      Protocolo exclusivo
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <h3 className={"font-serif text-2xl md:text-[1.65rem] leading-tight font-light mb-4 " + (t.exclusive ? "silver-text" : "")}>{t.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-light mb-6">{t.desc}</p>
                <ul className="mb-8 space-y-2.5">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.15em] text-foreground/60">
                      <span className="mt-2 w-3 h-px bg-[var(--silver)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    "mt-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/70 group-hover:text-foreground transition-colors pt-5 border-t " +
                    (t.exclusive ? "border-[var(--silver)]/30" : "border-white/10")
                  }
                >
                  Agendar avaliação <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Results() {
  return (
    <section id="resultados" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Resultados</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Resultados que respeitam <em className="silver-text not-italic">a sua identidade</em>.
          </h2>
          <p className="mt-8 text-foreground/65 text-base md:text-lg font-light max-w-xl">
            Antes de qualquer procedimento, existe uma estratégia. Depois, um resultado que valoriza o que você já tem de mais bonito.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.map((label, i) => (
            <figure key={label} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 silver-border opacity-40 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#222] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <div className="text-center px-6">
                    <div className="font-serif text-5xl silver-text mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Inserir antes & depois real</div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <figcaption className="mt-5 flex items-center justify-between">
                <span className="font-serif text-lg font-light">{label}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Antes / Depois</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-16 text-[11px] uppercase tracking-[0.25em] text-foreground/45 text-center max-w-2xl mx-auto leading-relaxed">
          Cada paciente responde de forma individual. Os resultados podem variar e a avaliação profissional é indispensável.
        </p>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="dr-mucio" className="relative py-28 md:py-40 bg-[var(--graphite)]/30">
      <div className="hairline mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-sm">
            <div className="absolute -top-4 -left-4 right-8 bottom-8 silver-border opacity-40" />
            <img src={conceptImg} alt="Dr. Múcio Carvalho — biomédico e cirurgião-dentista" loading="lazy" className="absolute inset-0 w-full h-full object-cover" width={1024} height={1280} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionLabel>Dr. Múcio Carvalho</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] font-light">
            Ciência, estética e <em className="silver-text not-italic">visão autoral</em>.
          </h2>
          <div className="mt-10 space-y-5 text-foreground/70 font-light leading-relaxed max-w-2xl">
            <p>
              Dr. Múcio Carvalho é natural de Uberlândia, Minas Gerais, biomédico e cirurgião-dentista, com atuação dedicada à estética facial avançada, rejuvenescimento e harmonização facial.
            </p>
            <p className="text-foreground/60">
              Ao longo de sua trajetória, realizou diversas especializações voltadas para Harmonização Orofacial, aperfeiçoando técnicas que unem ciência, estética, segurança e naturalidade.
            </p>
            <p className="text-foreground/60">
              Com mais de 2.000 pacientes atendidos, desenvolveu o <span className="text-foreground">Your Refine Method®</span>, um método exclusivo que combina protocolos personalizados para harmonização facial estratégica, rejuvenescimento, tratamento de cicatrizes de acne, controle do melasma, glow facial, rinomodelação e refinamento estético global da face.
            </p>
            <p className="text-foreground/60">
              Sua filosofia de trabalho é baseada na individualidade de cada paciente, valorizando traços únicos e promovendo resultados sofisticados, estratégicos e naturais.
            </p>
          </div>
          <blockquote className="mt-12 border-l border-[var(--silver)] pl-6 max-w-2xl">
            <p className="font-serif text-xl md:text-2xl leading-relaxed font-light italic text-foreground/90">
              "A beleza é poder. Quando uma pessoa se sente bem com sua imagem, ela transforma sua forma de viver, se posicionar e conquistar seus objetivos."
            </p>
            <footer className="mt-4 text-[10px] uppercase tracking-[0.3em] text-foreground/60">— Dr. Múcio Carvalho</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Experiências que elevam <em className="silver-text not-italic">autoestima e confiança</em>.
          </h2>
          <p className="mt-8 text-foreground/65 text-base md:text-lg font-light">
            Mais do que procedimentos — segurança, presença e refinamento que se traduzem em confiança.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="bg-background p-10 md:p-12 relative">
              <span className="font-serif text-7xl silver-text leading-none absolute top-4 right-6 opacity-30">"</span>
              <p className="font-serif text-lg md:text-xl leading-relaxed font-light italic text-foreground/90">
                {t.text}
              </p>
              <footer className="mt-10 pt-6 border-t border-border/60">
                <div className="text-[11px] uppercase tracking-[0.3em] text-foreground/80">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 mt-1">{t.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="academy-section relative py-32 md:py-44 overflow-hidden">
      {/* brilho sutil metálico */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.7)_0%,transparent_60%)] pointer-events-none" />
      <div className="academy-hairline mb-20 relative z-10" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Hero da Academy */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-28">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#8a8a8f]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#5a5a60]">Your Refine Academy</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.02] font-light text-[#0a0a0a]">
              Faça parte da nova geração que está elevando os <em className="academy-silver-text not-italic">padrões da estética avançada</em>.
            </h2>
            <p className="mt-8 text-[#4a4a4f] text-base md:text-lg font-light max-w-2xl leading-relaxed">
              Imersão presencial para profissionais que desejam dominar protocolos avançados, elevar seus resultados e construir autoridade na estética avançada.
            </p>
          </div>
          <div className="lg:col-span-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="academy-btn relative inline-flex px-9 py-4 text-[10px] uppercase tracking-[0.35em]">
              Quero saber mais
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-28">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl leading-tight font-light text-[#0a0a0a]">
              Conhecimento de alto nível, sob a liderança do <em className="academy-silver-text not-italic">Dr. Múcio Carvalho</em>.
            </h3>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[#4a4a4f] font-light leading-relaxed">
            <p className="text-[#333]">
              A Your Refine Academy foi criada com o propósito de compartilhar conhecimento de alto nível, formando profissionais capazes de entregar resultados diferenciados, seguros e altamente previsíveis em suas práticas clínicas.
            </p>
            <p className="text-[#6a6a70]">
              Os participantes têm acesso a uma imersão exclusiva, desenvolvida para transmitir protocolos avançados, técnicas refinadas e conceitos que unem ciência, experiência clínica e visão estratégica de mercado.
            </p>
            <p className="text-[#6a6a70]">
              Durante a imersão, os profissionais aprendem metodologias exclusivas voltadas para rejuvenescimento avançado, tratamento de cicatrizes de acne, qualidade da pele e protocolos de regeneração cutânea.
            </p>
          </div>
        </div>

        {/* O que você irá aprender */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#8a8a8f]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5a5a60]">O que você irá aprender</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px academy-border">
            {ACADEMY_LEARN.map((item, i) => (
              <div key={item} className="academy-card p-8 min-h-[180px] flex flex-col justify-between">
                <span className="font-serif text-sm academy-silver-text">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-serif text-lg leading-snug font-light mt-6 text-[#0a0a0a]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Esta formação é para o profissional que deseja */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#8a8a8f]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#5a5a60]">Para o profissional que deseja</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px academy-border">
            {ACADEMY_PROFILES.map((p, i) => (
              <article key={p.title} className="academy-card p-10">
                <span className="font-serif text-sm academy-silver-text">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-serif text-xl md:text-2xl leading-tight font-light mt-6 mb-4 text-[#0a0a0a]">{p.title}</h4>
                <p className="text-sm text-[#5a5a60] leading-relaxed font-light">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Seção final */}
        <div className="max-w-4xl">
          <h3 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] font-light text-[#0a0a0a]">
            Para quem se recusa a ser apenas <em className="academy-silver-text not-italic">mais um profissional no mercado</em>.
          </h3>
          <p className="mt-8 text-[#4a4a4f] text-base md:text-lg font-light leading-relaxed max-w-2xl">
            A Your Refine Academy foi criada para aqueles que desejam dominar técnicas avançadas, entregar resultados extraordinários e construir uma trajetória marcada pela excelência, autoridade e transformação de vidas.
          </p>
          <div className="mt-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="academy-btn relative inline-flex px-9 py-4 text-[10px] uppercase tracking-[0.35em]">
              Falar com a equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clinics() {
  const units = [
    { city: "São Paulo", state: "SP", img: clinicSp, text: "Uma unidade pensada para oferecer atendimento premium, estrutura sofisticada e uma jornada estética personalizada." },
    { city: "Uberlândia", state: "MG", img: clinicUdi, text: "Um espaço moderno e acolhedor para harmonização facial estratégica com segurança, naturalidade e alto padrão." },
  ];
  return (
    <section id="unidades" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Unidades</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Duas unidades. <em className="silver-text not-italic">A mesma experiência</em> de refinamento.
          </h2>
          <p className="mt-8 text-foreground/65 text-base md:text-lg font-light">
            A YOUR·REFINE conta com espaços preparados para oferecer conforto, segurança e uma experiência estética de alto padrão.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {units.map((u) => (
            <article key={u.city} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={u.img} alt={`Clínica YOUR·REFINE ${u.city}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" width={1200} height={900} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/70 mb-2">Unidade</div>
                  <h3 className="font-serif text-4xl md:text-5xl font-light">
                    {u.city} <span className="silver-text text-2xl md:text-3xl">— {u.state}</span>
                  </h3>
                </div>
              </div>
              <div className="mt-8 grid md:grid-cols-5 gap-6 items-start">
                <p className="md:col-span-3 text-foreground/65 font-light leading-relaxed">{u.text}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="md:col-span-2 btn-silver relative inline-flex justify-center px-6 py-4 text-[10px] uppercase tracking-[0.3em] hover:text-background">
                  Agendar nesta unidade
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const units = [
    { city: "São Paulo — SP", addr: "Inserir endereço completo", maps: "https://maps.google.com/?q=São+Paulo" },
    { city: "Uberlândia — MG", addr: "Inserir endereço completo", maps: "https://maps.google.com/?q=Uberlândia" },
  ];
  return (
    <section id="localizacao" className="relative py-28 md:py-40 bg-[var(--graphite)]/30">
      <div className="hairline mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Localização</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Escolha a unidade <em className="silver-text not-italic">mais próxima de você</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {units.map((u) => (
            <div key={u.city} className="border border-border bg-background">
              <div className="aspect-[16/9] relative bg-[var(--graphite)] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#111_25%,transparent_25%,transparent_50%,#111_50%,#111_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-3xl silver-text">{u.city}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">Mapa interativo</div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">Endereço</div>
                <div className="font-serif text-xl font-light mb-8">{u.addr}</div>
                <div className="flex flex-wrap gap-3">
                  <a href={u.maps} target="_blank" rel="noreferrer" className="inline-flex px-6 py-3 text-[10px] uppercase tracking-[0.3em] border border-border hover:border-[var(--silver)] hover:text-[var(--silver)] transition-colors">
                    Abrir no Google Maps
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-6 py-3 text-[10px] uppercase tracking-[0.3em] hover:text-background">
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="contato" className="relative py-32 md:py-48 overflow-hidden grain">
      <img src={ctaFace} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1600} height={1000} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,#000_75%)]" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <SectionLabel>
          <span className="mx-auto">Contato</span>
        </SectionLabel>
        <h2 className="font-serif text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.02] font-light">
          O seu rosto não precisa de exageros.<br />
          <em className="silver-text not-italic">Precisa de estratégia.</em>
        </h2>
        <p className="mt-10 text-foreground/75 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Agende uma avaliação personalizada e descubra quais pontos podem ser refinados para valorizar sua beleza com naturalidade, equilíbrio e sofisticação.
        </p>
        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-12 py-5 text-[11px] uppercase tracking-[0.4em] hover:text-background">
            Quero uma avaliação personalizada
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/60 pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm text-foreground/55 font-light leading-relaxed">
              Estética facial avançada, harmonização facial estratégica e protocolos exclusivos do Your Refine Method®.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-5">Navegação</div>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-foreground/75 hover:text-foreground transition">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-5">Contato</div>
            <ul className="space-y-3 text-sm">
              <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-foreground/75 hover:text-foreground transition">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-foreground/75 hover:text-foreground transition">Instagram</a></li>
              <li><a href="mailto:contato@yourrefine.com" className="text-foreground/75 hover:text-foreground transition">contato@yourrefine.com</a></li>
            </ul>
          </div>
        </div>
        <div className="hairline my-12" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 max-w-md leading-relaxed">
            As informações deste site não substituem uma avaliação profissional individualizada. Cada paciente responde de forma única aos protocolos.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            © {new Date().getFullYear()} YOUR·REFINE — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
