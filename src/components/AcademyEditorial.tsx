import { useEffect, useRef, useState } from "react";

import facaParteImg from "../assets/academy-facaparte.webp.asset.json";
import foto1 from "../assets/academy-1.webp.asset.json";
import foto2 from "../assets/academy-2.webp.asset.json";
import foto3 from "../assets/academy-3.webp.asset.json";
import foto4 from "../assets/academy-4.webp.asset.json";
import foto5 from "../assets/academy-5.webp.asset.json";
import foto6 from "../assets/academy-6.png.asset.json";

const WHATSAPP = "https://wa.me/5534996335000";

const LEARN = [
  { title: "Protocolos exclusivos do Your Refine Method", desc: "A arquitetura completa do método: leitura facial, sequência de camadas e critérios de decisão clínica." },
  { title: "Rejuvenescimento facial avançado", desc: "Tratamentos que devolvem firmeza, luz e estrutura sem alterar a identidade do rosto." },
  { title: "Cicatrizes de acne e regeneração cutânea", desc: "Manejo de casos difíceis com estratégias combinadas e previsibilidade de resultado." },
  { title: "Qualidade global da pele", desc: "Estratégias para textura, poros, viço e uniformidade, tratando a pele como um todo." },
  { title: "Personalização de protocolos clínicos", desc: "Como adaptar cada protocolo ao rosto, à rotina e ao objetivo real de cada paciente." },
  { title: "Planejamento de casos complexos", desc: "Do diagnóstico ao cronograma: execução em etapas, segurança e controle de expectativa." },
  { title: "Posicionamento e diferenciação", desc: "Como transformar excelência técnica em percepção de valor e reputação de mercado." },
  { title: "Segurança e previsibilidade", desc: "Critérios, limites e condutas que sustentam resultados consistentes e reproduzíveis." },
];

const PROFILES = [
  { title: "Dominar protocolos avançados", desc: "Técnicas exclusivas e metodologias clínicas que proporcionam resultados consistentes, reprodutíveis e respaldados pela experiência." },
  { title: "Tratar casos complexos", desc: "Conduzir tratamentos para cicatrizes de acne, envelhecimento avançado, flacidez, melasma e alterações complexas da pele." },
  { title: "Elevar o valor percebido", desc: "Estruturar protocolos premium, aumentar a satisfação dos pacientes e posicionar-se em um mercado de alta performance." },
  { title: "Diferenciar-se pela inovação", desc: "Técnicas, conceitos e estratégias que estão transformando a estética regenerativa e elevando os padrões dos tratamentos faciais." },
  { title: "Construir autoridade profissional", desc: "Ser reconhecido por entregar resultados que geram impacto real, fortalecendo reputação e presença no mercado." },
  { title: "Visão estratégica da estética", desc: "Criar protocolos personalizados, conduzir casos complexos e construir uma carreira sólida e diferenciada." },
];

const CHAPTERS = [
  { img: foto1.url, alt: "Cuidado avançado da pele, Your Refine Academy", pos: "50% 30%", a: "left", b: "right" },
  { img: foto2.url, alt: "Protocolo facial estratégico, Your Refine Academy", pos: "55% 35%", a: "right", b: "left" },
  { img: foto3.url, alt: "Definição e contorno facial, Your Refine Academy", pos: "45% 30%", a: "center", b: "bottom" },
  { img: foto4.url, alt: "Regeneração e qualidade de pele, Your Refine Academy", pos: "50% 25%", a: "left", b: "right" },
] as const;

/* progresso de rolagem 0..1 dentro de um elemento (apenas parallax sutil da foto) */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total <= 0) return setP(1);
      setP(Math.min(1, Math.max(0, -r.top / total)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

function LearnBlock({
  index,
  item,
  place,
}: {
  index: number;
  item: (typeof LEARN)[number];
  place: string;
}) {
  return (
    <div className={`acd-block acd-place-${place}`}>
      <span className="acd-num">{String(index + 1).padStart(2, "0")}</span>
      <div className="acd-rule" />
      <h4 className="font-serif text-[clamp(1.3rem,2.2vw,1.9rem)] leading-tight font-light text-white">
        {item.title}
      </h4>
      <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed font-light text-white/65">
        {item.desc}
      </p>
    </div>
  );
}

function Chapter({ i }: { i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useScrollProgress(ref);
  const c = CHAPTERS[i];

  return (
    <div ref={ref} className="acd-chapter">
      <div className="acd-sticky">
        <img
          src={c.img}
          alt={c.alt}
          loading="lazy"
          decoding="async"
          className="acd-photo"
          style={{ objectPosition: c.pos, transform: `scale(${1.03 + p * 0.02})` }}
        />
        <div className="acd-photo-veil" />
        <div className="acd-progress">
          <span>{String(i + 1).padStart(2, "0")}</span>
          <span className="opacity-40"> / 04</span>
        </div>
        <LearnBlock index={i * 2} item={LEARN[i * 2]} place={c.a} />
        <LearnBlock index={i * 2 + 1} item={LEARN[i * 2 + 1]} place={c.b} />
      </div>
    </div>
  );
}

function Scene({
  img,
  alt,
  align,
  eyebrow,
  headline,
  items,
  indicator,
  pos,
  cta,
}: {
  img: string;
  alt: string;
  align: "left" | "right";
  eyebrow: string;
  headline: React.ReactNode;
  items: typeof PROFILES;
  indicator: string;
  pos: string;
  cta?: boolean;
}) {
  return (
    <div className={`acd-scene acd-scene-${align}`}>
      <img src={img} alt={alt} loading="lazy" decoding="async" className="acd-scene-photo" style={{ objectPosition: pos }} />
      <div className="acd-scene-veil" />
      <div className="acd-scene-inner">
        <div className="acd-scene-copy">
          <div className="acd-eyebrow">
            <span className="acd-eyebrow-line" />
            {eyebrow}
          </div>
          <h3 className="acd-headline font-serif font-light text-white">{headline}</h3>
          <div className="acd-scene-list">
            {items.map((it, k) => (
              <div key={it.title} className="acd-scene-item">
                <span className="acd-num">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-serif text-lg md:text-xl font-light text-white leading-snug">{it.title}</h4>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/60 max-w-md">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {cta && (
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="acd-cta">
              Falar com a equipe
            </a>
          )}
        </div>
        <div className="acd-progress acd-progress-scene">
          <span>{indicator}</span>
        </div>
      </div>
    </div>
  );
}

export default function Academy() {
  return (
    <section id="academy" className="relative acd-dark">
      {/* ── FAÇA PARTE ── */}
      <div className="academy-section relative overflow-hidden pt-20 md:pt-28 pb-8 md:pb-10">
        <div className="academy-hairline mb-10 md:mb-14 relative z-10" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
            <div className="lg:col-span-6 xl:col-span-6 acd-fp-copy">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-white/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/55">Your Refine Academy</span>
              </div>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] font-light text-white">
                Faça parte da nova geração que está elevando os{" "}
                <em className="academy-silver-text not-italic">padrões da estética avançada</em>.
              </h2>
              <p className="mt-8 text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed">
                Imersão presencial para profissionais que desejam dominar protocolos avançados, elevar seus resultados e
                construir autoridade na estética avançada.
              </p>

              {/* imagem no mobile, entre o texto inicial e a continuação */}
              <figure className="acd-fp-photo acd-fp-photo-mobile lg:hidden">
                <img
                  src={facaParteImg.url}
                  alt="Editorial Your Refine Academy, pele em transformação"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="mt-8 space-y-5 font-light leading-relaxed max-w-xl">
                <p className="text-white/75">
                  A Your Refine Academy foi criada com o propósito de compartilhar conhecimento de alto nível, formando
                  profissionais capazes de entregar resultados diferenciados, seguros e altamente previsíveis.
                </p>
                <p className="text-white/55">
                  Uma imersão exclusiva, desenvolvida para transmitir protocolos avançados, técnicas refinadas e conceitos
                  que unem ciência, experiência clínica e visão estratégica de mercado, sob a liderança do Dr. Múcio
                  Carvalho.
                </p>
              </div>

              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="academy-btn relative inline-flex mt-10 px-9 py-4 text-[10px] uppercase tracking-[0.35em]">
                Quero saber mais
              </a>
            </div>

            <div className="hidden lg:block lg:col-span-6">
              <figure className="acd-fp-photo acd-fp-photo-desktop">
                <img
                  src={facaParteImg.url}
                  alt="Editorial Your Refine Academy, pele em transformação"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Your Refine Academy — imersão presencial</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* ── O QUE VOCÊ IRÁ APRENDER ── */}
      <div className="acd-dark relative">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-10 md:pt-16 pb-2">
          <div className="acd-eyebrow">
            <span className="acd-eyebrow-line" />
            O que você irá aprender
          </div>
          <h3 className="mt-6 font-serif text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] font-light text-white max-w-3xl">
            Quatro capítulos que estruturam a forma de ver, planejar e tratar um rosto.
          </h3>
        </div>
        {CHAPTERS.map((_, i) => (
          <Chapter key={i} i={i} />
        ))}
      </div>

      {/* ── PARA O PROFISSIONAL QUE DESEJA ── */}
      <div className="acd-dark relative">
        <Scene
          img={foto5.url}
          alt="Profissional em evolução, Your Refine Academy"
          align="left"
          pos="50% 28%"
          eyebrow="Para o profissional que deseja"
          headline={
            <>
              Elevar o nível
              <br />
              da sua entrega.
            </>
          }
          items={PROFILES.slice(0, 3)}
          indicator="01 / 02"
        />
        <Scene
          img={foto6.url}
          alt="Resultado editorial, Your Refine Academy"
          align="right"
          pos="50% 22%"
          eyebrow="Para quem se recusa a ser mais um"
          headline={
            <>
              Uma trajetória
              <br />
              marcada pela excelência.
            </>
          }
          items={PROFILES.slice(3)}
          indicator="02 / 02"
          cta
        />
      </div>
    </section>
  );
}
