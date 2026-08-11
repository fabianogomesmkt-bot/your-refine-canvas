import { useCallback, useEffect, useRef, useState } from "react";

import acne01Antes from "../assets/results/acne-01-antes.png.asset.json";
import acne01Depois from "../assets/results/acne-01-depois.jpg.asset.json";
import acne02Antes from "../assets/results/acne-02-antes.jpg.asset.json";
import acne02Depois from "../assets/results/acne-02-depois.png.asset.json";
import labial01Antes from "../assets/results/labial-01-antes.jpg.asset.json";
import labial01Depois from "../assets/results/labial-01-depois.jpg.asset.json";
import labial02Antes from "../assets/results/labial-02-antes.jpg.asset.json";
import labial02Depois from "../assets/results/labial-02-depois.jpg.asset.json";
import fullface01Antes from "../assets/results/fullface-01-antes.jpg.asset.json";
import fullface01Depois from "../assets/results/fullface-01-depois.jpg.asset.json";

/**
 * Estrutura de dados — para adicionar um novo paciente basta:
 * 1. subir as imagens em src/assets/results/
 * 2. importar acima
 * 3. adicionar { label, before, after } na lista do procedimento
 */
type Patient = { label: string; before: string; after: string };
type Procedure = { id: string; name: string; patients: Patient[] };

const PROCEDURES: Procedure[] = [
  {
    id: "acne",
    name: "Cicatrizes de Acne",
    patients: [
      { label: "Paciente 01", before: acne01Antes.url, after: acne01Depois.url },
      { label: "Paciente 02", before: acne02Antes.url, after: acne02Depois.url },
    ],
  },
  {
    id: "rino",
    name: "Rinomodelação",
    patients: [],
  },
  {
    id: "labial",
    name: "Preenchimento Labial",
    patients: [
      { label: "Paciente 01", before: labial01Antes.url, after: labial01Depois.url },
      { label: "Paciente 02", before: labial02Antes.url, after: labial02Depois.url },
    ],
  },
  {
    id: "fullface",
    name: "Full Face",
    patients: [
      { label: "Paciente 01", before: fullface01Antes.url, after: fullface01Depois.url },
    ],
  },
];

function Compare({ patient }: { patient: Patient }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => setPos(50), [patient.before]);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      move(e.clientX);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  const imgClass =
    "absolute inset-0 w-full h-full object-cover object-[50%_35%] contrast-[1.04] saturate-[0.95] select-none pointer-events-none";

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#0b0b0d] border border-[var(--silver)]/20 cursor-ew-resize touch-none"
    >
      {/* ANTES — camada base */}
      <img src={patient.before} alt={`${patient.label} — antes`} loading="lazy" className={imgClass} draggable={false} />
      {/* DEPOIS — camada revelada */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={patient.after} alt={`${patient.label} — depois`} loading="lazy" className={imgClass} draggable={false} />
      </div>

      <span className="absolute left-4 bottom-4 z-20 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white/85 bg-black/55 backdrop-blur-sm border border-white/15">
        Antes
      </span>
      <span className="absolute right-4 bottom-4 z-20 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white/85 bg-black/55 backdrop-blur-sm border border-white/15">
        Depois
      </span>

      {/* Linha do comparador */}
      <div
        className="absolute inset-y-0 z-30 w-px bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.95)_18%,rgba(235,235,240,0.95)_82%,transparent)] shadow-[0_0_18px_rgba(230,230,240,0.55)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-white/70 bg-black/40 backdrop-blur-md shadow-[0_0_26px_rgba(230,230,240,0.35)] flex items-center justify-center">
          <span className="text-white/90 text-[11px] tracking-[0.1em]">‹ ›</span>
        </div>
      </div>
    </div>
  );
}

function Arrow({ dir, onClick, disabled }: { dir: "prev" | "next"; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Paciente anterior" : "Próximo paciente"}
      className="h-12 w-12 shrink-0 border border-[var(--silver)]/30 bg-black/40 text-foreground/80 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--silver)]/80 hover:text-foreground disabled:opacity-25 disabled:hover:border-[var(--silver)]/30"
    >
      <span aria-hidden>{dir === "prev" ? "←" : "→"}</span>
    </button>
  );
}

export default function BeforeAfterResults() {
  const [procIdx, setProcIdx] = useState(0);
  const [patIdx, setPatIdx] = useState(0);
  const proc = PROCEDURES[procIdx];
  const patients = proc.patients;
  const patient = patients[patIdx];

  const select = (i: number) => {
    setProcIdx(i);
    setPatIdx(0);
  };

  return (
    <section id="resultados" className="relative py-28 md:py-40 bg-[linear-gradient(180deg,#000_0%,#0c0c0e_45%,#000_100%)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[var(--silver)]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">Resultados</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-light text-white">
            Resultados que respeitam <em className="silver-text not-italic">a sua identidade</em>.
          </h2>
          <p className="mt-8 text-white/65 text-base md:text-lg font-light">
            Antes de qualquer procedimento, existe uma estratégia. Depois, um resultado que valoriza o que você já
            tem de mais bonito.
          </p>
        </div>

        {/* Navegação por procedimento */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
          {PROCEDURES.map((p, i) => (
            <button
              key={p.id}
              onClick={() => select(i)}
              className={`px-5 py-3 text-[10px] uppercase tracking-[0.28em] border transition-all duration-400 ${
                i === procIdx
                  ? "border-[var(--silver)]/70 text-white bg-white/[0.06]"
                  : "border-white/12 text-white/55 hover:text-white/85 hover:border-white/30"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="hidden sm:block">
                <Arrow dir="prev" disabled={patients.length < 2} onClick={() => setPatIdx((n) => (n - 1 + patients.length) % patients.length)} />
              </div>

              <div className="flex-1 min-w-0">
                {patient ? (
                  <Compare patient={patient} />
                ) : (
                  <div className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/11] border border-white/12 bg-[#0b0b0d] flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">Resultados em breve</span>
                  </div>
                )}
              </div>

              <div className="hidden sm:block">
                <Arrow dir="next" disabled={patients.length < 2} onClick={() => setPatIdx((n) => (n + 1) % patients.length)} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <div className="font-serif text-xl md:text-2xl font-light text-white">{proc.name}</div>
                {patient && (
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
                    {patient.label} — {patIdx + 1}/{patients.length}
                  </div>
                )}
              </div>
              <div className="flex sm:hidden items-center gap-3">
                <Arrow dir="prev" disabled={patients.length < 2} onClick={() => setPatIdx((n) => (n - 1 + patients.length) % patients.length)} />
                <Arrow dir="next" disabled={patients.length < 2} onClick={() => setPatIdx((n) => (n + 1) % patients.length)} />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-white/40 text-center max-w-2xl mx-auto leading-relaxed">
          Arraste a linha para comparar. Cada paciente responde de forma individual; os resultados podem variar e a
          avaliação profissional é indispensável.
        </p>
      </div>
    </section>
  );
}
