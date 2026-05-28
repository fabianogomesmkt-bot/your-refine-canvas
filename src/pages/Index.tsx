import { useEffect, useState } from "react";
import heroFace from "../assets/hero-face.jpg";
import conceptImg from "../assets/concept.jpg";
import clinicSp from "../assets/clinic-sp.jpg";
import clinicUdi from "../assets/clinic-udi.jpg";
import ctaFace from "../assets/cta-face.jpg";

const WHATSAPP = "https://wa.me/5500000000000";

export default Index;

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Conceito", href: "#conceito" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Clínicas", href: "#clinicas" },
  { label: "Localização", href: "#localizacao" },
];

const TREATMENTS = [
  { title: "Harmonização Facial Estratégica", desc: "Planejamento individualizado para valorizar proporções, contornos e pontos de equilíbrio do rosto, com foco em naturalidade e elegância." },
  { title: "Preenchimento Facial", desc: "Reposição de volume e definição de pontos estratégicos para restaurar contornos e suavizar sinais do tempo." },
  { title: "Toxina Botulínica", desc: "Tratamento para suavizar linhas de expressão, prevenir marcas e promover um aspecto mais descansado." },
  { title: "Bioestimuladores de Colágeno", desc: "Estimulação da produção natural de colágeno para melhorar firmeza, textura e qualidade da pele." },
  { title: "Lifting Não Cirúrgico", desc: "Técnicas avançadas para redefinir contornos e devolver firmeza sem a necessidade de procedimentos invasivos." },
  { title: "Contorno Mandibular", desc: "Definição e equilíbrio da linha da mandíbula para uma estrutura facial mais harmônica e marcada." },
  { title: "Rinomodelação", desc: "Refinamento do nariz sem cirurgia, ajustando proporções e ângulos com precisão milimétrica." },
  { title: "Rejuvenescimento Facial", desc: "Protocolo integrado que devolve viço, suavidade e luminosidade respeitando suas características naturais." },
  { title: "Skinbooster", desc: "Hidratação profunda e melhora da qualidade da pele, com aspecto descansado e luminoso." },
  { title: "Planejamento Facial Personalizado", desc: "Estudo completo da anatomia para construir um roadmap estratégico, etapa a etapa." },
];

const RESULTS = [
  "Harmonização Facial",
  "Rejuvenescimento Facial",
  "Contorno Facial",
  "Lábios e Proporção Facial",
];

const TESTIMONIALS = [
  { text: "Eu tinha medo de perder minha naturalidade. Na YOUR·REFINE, senti que cada detalhe foi pensado com cuidado. O resultado ficou leve, elegante e exatamente como eu imaginava.", name: "Paciente verificada", role: "Harmonização Facial" },
  { text: "O atendimento foi extremamente cuidadoso desde a avaliação. Entendi o que fazia sentido para o meu rosto e o resultado ficou muito natural.", name: "Paciente verificada", role: "Rejuvenescimento" },
  { text: "Percebi diferença no meu contorno facial, mas sem parecer artificial. Foi um refinamento sutil, elegante e muito bem planejado.", name: "Paciente verificada", role: "Contorno Mandibular" },
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Concept />
      <Treatments />
      <Results />
      <Testimonials />
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
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative hidden md:inline-flex px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-foreground hover:text-background">
            Agendar avaliação
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden text-foreground/80 p-2">
            <div className={`w-6 h-px bg-foreground mb-1.5 transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <div className={`w-6 h-px bg-foreground mb-1.5 transition ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-px bg-foreground transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden glass-nav border-t border-border/40">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.3em] text-foreground/80">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-foreground hover:text-background w-fit">
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] pt-28 md:pt-32 grain overflow-hidden">
      {/* radial gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(212,212,212,0.08),transparent_60%)]" />
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-20 silver-border" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100svh-7rem)]">
        {/* left text */}
        <div className="lg:col-span-7 fade-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-foreground/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">Harmonização Facial Estratégica</span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-light tracking-tight">
            Harmonização facial<br />
            estratégica para<br />
            <em className="silver-text not-italic font-light">revelar a sua</em>
            <br />
            <span className="silver-text">melhor versão.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed font-light">
            Na YOUR·REFINE, cada detalhe do rosto é analisado com precisão para criar resultados naturais, elegantes e alinhados à sua identidade.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-9 py-4 text-[10px] uppercase tracking-[0.35em] hover:text-background">
              Agendar avaliação
            </a>
            <a href="#tratamentos" className="inline-flex items-center gap-3 px-3 py-4 text-[10px] uppercase tracking-[0.35em] text-foreground/80 hover:text-foreground transition border-b border-foreground/30 hover:border-foreground">
              Conhecer tratamentos
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t border-border/50 pt-8">
            {[
              "Resultados naturais",
              "Planejamento individualizado",
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
        {/* right image */}
        <div className="lg:col-span-5 relative fade-up">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <div className="absolute -inset-2 silver-border opacity-50" />
            <img src={heroFace} alt="Retrato editorial de harmonização facial" className="absolute inset-0 w-full h-full object-cover" width={1080} height={1440} />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background/90 backdrop-blur px-5 py-4 border border-border">
              <div className="text-[9px] uppercase tracking-[0.35em] text-foreground/50 mb-1">Editorial</div>
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

function Concept() {
  return (
    <section id="conceito" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-sm">
            <div className="absolute -top-4 -left-4 right-8 bottom-8 silver-border opacity-40" />
            <img src={conceptImg} alt="Detalhe editorial de pele luminosa" loading="lazy" className="absolute inset-0 w-full h-full object-cover" width={1024} height={1280} />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <SectionLabel>Conceito</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Beleza não é excesso.<br />
            <em className="silver-text not-italic">É intenção.</em>
          </h2>
          <p className="mt-10 max-w-xl text-foreground/70 text-base md:text-lg leading-relaxed font-light">
            A harmonização facial estratégica parte de uma análise profunda da estrutura facial, proporções, expressões e objetivos de cada paciente.
          </p>
          <p className="mt-5 max-w-xl text-foreground/60 text-base leading-relaxed font-light">
            O foco não é transformar quem você é, mas refinar pontos específicos para valorizar sua beleza com naturalidade, equilíbrio e sofisticação.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[["01","Análise"],["02","Estratégia"],["03","Refinamento"]].map(([n,l]) => (
              <div key={n}>
                <div className="font-serif text-3xl silver-text mb-1">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">{l}</div>
              </div>
            ))}
          </div>
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
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <SectionLabel>Tratamentos</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-light">
              Tratamentos estratégicos para um <em className="silver-text not-italic">resultado refinado</em>.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-foreground/70 text-base md:text-lg font-light leading-relaxed self-end">
            Procedimentos pensados de forma personalizada, respeitando a individualidade, a anatomia e o objetivo de cada paciente.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {TREATMENTS.map((t, i) => (
            <article key={t.title} className="group relative bg-background p-8 md:p-10 transition-all duration-500 hover:bg-[var(--graphite)]/60">
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-sm silver-text">{String(i + 1).padStart(2, "0")}</span>
                <div className="w-8 h-px bg-foreground/30 group-hover:bg-[var(--silver)] group-hover:w-16 transition-all duration-500" />
              </div>
              <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight font-light mb-4">{t.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-light mb-8">{t.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/70 group-hover:text-foreground transition-colors">
                Saiba mais <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
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
          Os resultados podem variar de acordo com a individualidade de cada paciente. A avaliação profissional é indispensável.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28 md:py-40 bg-[var(--graphite)]/40">
      <div className="hairline mb-20" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Casos de sucesso</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light">
            Experiências pensadas para <em className="silver-text not-italic">elevar autoestima</em>.
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

function Clinics() {
  const units = [
    { city: "São Paulo", state: "SP", img: clinicSp, text: "Uma unidade pensada para oferecer atendimento premium, estrutura sofisticada e uma jornada estética personalizada." },
    { city: "Uberlândia", state: "MG", img: clinicUdi, text: "Um espaço moderno e acolhedor para quem busca harmonização facial estratégica com segurança, naturalidade e alto padrão." },
  ];
  return (
    <section id="clinicas" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel>Clínicas</SectionLabel>
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
    <section className="relative py-32 md:py-48 overflow-hidden grain">
      <img src={ctaFace} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1600} height={1000} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,#000_75%)]" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <SectionLabel>
          <span className="mx-auto">Convite</span>
        </SectionLabel>
        <h2 className="font-serif text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.02] font-light">
          O seu rosto não precisa de exageros.<br />
          <em className="silver-text not-italic">Precisa de estratégia.</em>
        </h2>
        <p className="mt-10 text-foreground/75 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Agende uma avaliação personalizada e descubra quais pontos podem ser refinados para valorizar sua beleza com naturalidade, equilíbrio e sofisticação.
        </p>
        <div className="mt-14">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-silver relative inline-flex px-12 py-5 text-[11px] uppercase tracking-[0.4em] hover:text-background">
            Agendar avaliação agora
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
              Harmonização facial estratégica com foco em naturalidade, equilíbrio e refinamento.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-5">Navegação</div>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-foreground/75 hover:text-foreground hover:silver-text transition">{n.label}</a>
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
            As informações deste site não substituem uma avaliação profissional individualizada.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            © {new Date().getFullYear()} YOUR·REFINE — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
