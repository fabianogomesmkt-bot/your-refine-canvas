import { useEffect, useState } from "react";
import logoAsset from "../assets/logo.png.asset.json";
import BeforeAfterResults from "../components/BeforeAfterResults";
import logoLightAsset from "../assets/logo-light.png.asset.json";

import heroMucio1 from "../assets/hero-mucio-1.jpg.asset.json";
import clinicSp from "../assets/clinic-sp.jpg";
import clinicUdi from "../assets/clinic-udi.jpg";
import unitUdi2 from "../assets/unit-udi-2.jpg";
import unitUdi3 from "../assets/unit-udi-3.jpg";
import unitUdi4 from "../assets/unit-udi-4.jpg";
import unitSp2 from "../assets/unit-sp-2.jpg";
import unitSp3 from "../assets/unit-sp-3.jpg";
import unitSp4 from "../assets/unit-sp-4.jpg";
import ctaFace from "../assets/cta-face.jpg";
import tAcne from "../assets/treatment-acne.jpg";
import tMelasma from "../assets/treatment-melasma.jpg";
import tBlefaro from "../assets/treatment-blefaro.jpg";
import tRejuv from "../assets/treatment-rejuvenescimento.jpg";
import tFullface from "../assets/treatment-fullface.png.asset.json";
import tLips from "../assets/treatment-lips.jpg";
import tNose from "../assets/treatment-nose.jpg";
import tCollagen from "../assets/treatment-collagen.png.asset.json";
import tBotox from "../assets/treatment-botox.png.asset.json";
import tGlow from "../assets/treatment-glow.jpg";

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
    title: "Your Refine Glow®",
    image: tGlow,
    exclusive: true,
    desc: "Protocolo exclusivo de luminosidade e qualidade de pele, com hidratação profunda, refinamento da textura e brilho natural imediato.",
    benefits: ["Luminosidade imediata", "Refinamento da textura", "Hidratação profunda", "Pele mais uniforme"],
  },

  {
    title: "Harmonização Facial Full Face",
    image: tFullface.url,
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
    image: tCollagen.url,
    desc: "Tratamento que estimula o próprio organismo a produzir novas fibras de colágeno, promovendo firmeza, sustentação e rejuvenescimento progressivo.",
    benefits: ["Estímulo natural de colágeno", "Melhora da firmeza", "Redução da flacidez", "Resultados progressivos"],
  },
  {
    title: "Toxina Botulínica Full Face",
    image: tBotox.url,
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

function renderTitle(title: string) {
  const parts = title.split("®");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && (
            <sup className="text-[0.58em] align-super font-light tracking-normal ml-[0.05em] opacity-90">®</sup>
          )}
        </span>
      ))}
    </>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Method />
      <Treatments />
      <BeforeAfterResults />
      <Doctor />
      <Testimonials />
      <Academy />
      <Clinics />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}


function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`inline-block ${className}`}>
      <img src={logoAsset.url} alt="YOUR·REFINE" className="logo-dark h-6 w-auto object-contain" />
      <img src={logoLightAsset.url} alt="YOUR·REFINE" className="logo-light h-6 w-auto object-contain" />
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
    <section
      id="inicio"
      className="relative grain overflow-hidden bg-background pt-28 md:pt-36 pb-16 md:pb-24"
    >
      {/* brilho ambiente sutil */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(212,212,212,0.10)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Foto — topo no mobile, coluna direita no desktop */}
          <div className="md:col-span-5 md:order-2 fade-up">
            <figure className="relative">
              <div className="absolute -inset-3 bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,212,212,0.16)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative overflow-hidden border border-[var(--silver)]/25 bg-[#0d0d0f] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
                <img
                  src={heroMucio1.url}
                  alt="Dr. Múcio Carvalho — harmonização facial YOUR·REFINE"
                  className="hero-portrait w-full aspect-[4/5] object-cover object-[50%_18%]"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_45%)]" />
                <figcaption className="pointer-events-none absolute left-5 right-5 bottom-5 flex items-center gap-3">
                  <div className="w-10 h-px bg-white/45 shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.34em] text-white/80">
                    Dr. Múcio | Harmonização Facial
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>

          {/* Texto */}
          <div className="md:col-span-7 md:order-1 fade-up">


            <h1 className="font-serif text-[clamp(2.75rem,7.5vw,4.75rem)] leading-[1] font-light tracking-tight text-foreground">
              Harmonização facial<br />
              <em className="silver-text not-italic">estratégica</em>
            </h1>

            <p className="mt-6 md:mt-8 max-w-lg text-[15px] md:text-lg text-foreground/75 leading-relaxed font-light">
              Resultados naturais que respeitam sua essência e revelam a sua melhor versão.
              Refinamento facial, rejuvenescimento e protocolos personalizados com precisão
              técnica e visão estética avançada.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-[#0a0a0a] bg-[linear-gradient(135deg,#f2f2f2_0%,#c9c9c9_50%,#ededed_100%)] hover:bg-[linear-gradient(135deg,#ffffff_0%,#dcdcdc_50%,#ffffff_100%)] transition-all duration-500"
              >
                Agendar avaliação <span aria-hidden>→</span>
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-foreground/90 border border-[var(--silver)]/50 bg-foreground/[0.04] backdrop-blur-sm hover:border-[var(--silver)] hover:text-foreground transition-all duration-500"
              >
                Conhecer o método <span aria-hidden>→</span>
              </a>
            </div>

            <HeroMetrics />
          </div>
        </div>
      </div>
    </section>
  );
}



const HERO_METRICS = [
  { value: "+2.000", label: "Pacientes atendidos" },
  { value: "Método", label: "Exclusivo" },
  { value: "Protocolos", label: "Personalizados" },
];

function HeroMetrics() {
  return (
    <div className="relative mt-10 md:mt-12 max-w-xl">
      <div className="grid grid-cols-3 bg-foreground/[0.05] backdrop-blur-md border border-[var(--silver)]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {HERO_METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`px-3 py-5 sm:px-6 sm:py-6 text-center ${i > 0 ? "border-l border-[var(--silver)]/15" : ""}`}
          >
            <div className="font-serif text-lg sm:text-2xl font-light text-foreground leading-none">{m.value}</div>
            <div className="mt-2 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.26em] text-foreground/60 leading-relaxed">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
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
              O Your Refine Method ® é uma metodologia desenvolvida pelo Dr. Múcio Carvalho para tratar a face de forma estratégica, personalizada e global.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.title}
              className={"proc-card group " + (t.exclusive ? "proc-standard" : "proc-highlight")}
            >
              <div className="proc-media aspect-[4/5]">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  width={768}
                  height={960}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="proc-num font-serif text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <div className="proc-rule w-8 h-px" />
                </div>
                {t.exclusive && (
                  <div className="absolute top-4 right-4">
                    <span className="proc-tag">Protocolo exclusivo</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 p-7 md:p-8">
                <h3 className="proc-title font-serif text-[1.4rem] md:text-[1.55rem] leading-tight font-light mb-4 min-h-[3.6rem]">
                  {renderTitle(t.title)}
                </h3>
                <p className="proc-desc text-sm leading-relaxed font-light mb-6">{t.desc}</p>
                <ul className="mb-8 space-y-2.5">
                  {t.benefits.map((b) => (
                    <li key={b} className="proc-benefit flex items-start gap-3 text-[11px] uppercase tracking-[0.15em]">
                      <span className="proc-rule mt-2 w-3 h-px shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="proc-cta mt-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] transition-colors pt-5"
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


function Doctor() {
  return (
    <section id="dr-mucio" className="relative py-28 md:py-40 bg-[var(--graphite)]/30">
      <div className="hairline mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-10 lg:col-start-2">

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

const UNITS = [
  {
    city: "Uberlândia",
    state: "MG",
    text: "Um espaço moderno e acolhedor para harmonização facial estratégica com segurança, naturalidade e alto padrão.",
    images: [clinicUdi, unitUdi2, unitUdi3, unitUdi4],
  },
  {
    city: "São Paulo",
    state: "SP",
    text: "Uma unidade pensada para oferecer atendimento premium, estrutura sofisticada e uma jornada estética personalizada.",
    images: [clinicSp, unitSp2, unitSp3, unitSp4],
  },
];

function UnitMarquee({ images, city, duration }: { images: string[]; city: string; duration: number }) {
  const loop = [...images, ...images];
  return (
    <div className="marquee relative overflow-hidden">
      <div className="marquee-track flex gap-4 md:gap-6" style={{ animationDuration: `${duration}s` }}>
        {loop.map((src, i) => (
          <div
            key={`${city}-${i}`}
            className="relative shrink-0 w-[76vw] sm:w-[46vw] lg:w-[30vw] xl:w-[26rem] aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--silver)]/15"
          >
            <img
              src={src}
              alt={`Unidade YOUR·REFINE ${city}`}
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function Clinics() {
  return (
    <section id="unidades" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Unidades</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Nossos <em className="silver-text not-italic">espaços</em>.
          </h2>
          <p className="mt-8 text-foreground/65 text-base md:text-lg font-light">
            Ambientes pensados para oferecer conforto, sofisticação e uma experiência alinhada
            ao padrão YOUR·REFINE.
          </p>
        </div>
      </div>

      <div className="space-y-20 md:space-y-24">
        {UNITS.map((u, idx) => (
          <div key={u.city}>
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-7 flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 mb-3">Unidade</div>
                <h3 className="font-serif text-3xl md:text-4xl font-light">
                  {u.city} <span className="silver-text text-xl md:text-2xl">— {u.state}</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm md:text-base text-foreground/60 font-light leading-relaxed">{u.text}</p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[0.3em] border border-[var(--silver)]/35 hover:border-[var(--silver)]/80 transition-colors"
              >
                Agendar nesta unidade <span aria-hidden>→</span>
              </a>
            </div>
            <UnitMarquee images={u.images} city={u.city} duration={idx === 0 ? 70 : 82} />
          </div>
        ))}
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

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
    >
      <span className="absolute inset-0 -m-1 rounded-full bg-[var(--silver)]/0 group-hover:bg-[var(--silver)]/15 blur-md transition-all duration-500" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[linear-gradient(135deg,#8f9296_0%,#4a4d51_38%,#2b2d30_62%,#6f7276_100%)] border border-white/25 group-hover:border-white/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.35),0_0_0_1px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:scale-[1.04]">
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" className="text-[#f2f2f2] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] transition-colors duration-500" aria-hidden>
          <path
            fill="currentColor"
            d="M16.02 5.333c-5.89 0-10.686 4.79-10.688 10.677 0 1.882.492 3.72 1.427 5.34L5.24 26.667l5.494-1.442a10.68 10.68 0 0 0 5.284 1.346h.004c5.886 0 10.682-4.79 10.685-10.678a10.6 10.6 0 0 0-3.13-7.552 10.6 10.6 0 0 0-7.556-3.008Zm0 19.594h-.003a8.87 8.87 0 0 1-4.52-1.238l-.324-.192-3.26.855.87-3.177-.212-.337a8.86 8.86 0 0 1-1.36-4.727c.002-4.894 3.99-8.877 8.892-8.877a8.83 8.83 0 0 1 6.283 2.606 8.83 8.83 0 0 1 2.6 6.28c-.002 4.895-3.99 8.807-8.966 8.807Zm4.874-6.643c-.267-.134-1.58-.78-1.826-.869-.245-.09-.423-.134-.601.134s-.69.868-.846 1.047c-.156.178-.312.2-.579.067-.267-.134-1.128-.416-2.148-1.326-.794-.708-1.33-1.582-1.486-1.85-.156-.267-.017-.412.117-.545.121-.12.267-.312.4-.468.135-.156.18-.267.268-.446.089-.178.045-.334-.023-.468-.067-.134-.6-1.45-.822-1.983-.217-.522-.437-.451-.6-.46l-.512-.009c-.178 0-.468.067-.713.334-.245.267-.936.914-.936 2.23 0 1.315.958 2.585 1.092 2.763.133.179 1.884 2.876 4.564 4.033.638.276 1.135.44 1.523.564.64.204 1.222.175 1.682.106.513-.077 1.58-.646 1.803-1.269.222-.624.222-1.158.156-1.27-.067-.111-.245-.178-.512-.312Z"
          />
        </svg>
      </span>
    </a>
  );
}
