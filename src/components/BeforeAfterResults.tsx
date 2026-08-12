import { useState } from "react";

import acne01Antes from "../assets/results/acne-01-antes.png.asset.json";
import acne01Depois from "../assets/results/acne-01-depois.jpg.asset.json";
import acne02Antes from "../assets/results/acne-02-antes.jpg.asset.json";
import acne02Depois from "../assets/results/acne-02-depois.png.asset.json";
import labial01Antes from "../assets/results/labial-01-antes.jpg.asset.json";
import labial01Depois from "../assets/results/labial-01-depois.jpg.asset.json";
import labial02Antes from "../assets/results/labial-02-antes.jpg.asset.json";
import labial02Depois from "../assets/results/labial-02-depois.jpg.asset.json";
import labial03Antes from "../assets/results/labial-03-antes.jpg.asset.json";
import labial03Depois from "../assets/results/labial-03-depois.jpg.asset.json";
import fullface01Antes from "../assets/results/fullface-01-antes.jpg.asset.json";
import fullface01Depois from "../assets/results/fullface-01-depois.jpg.asset.json";
import rino01Antes from "../assets/results/rino-01-antes.jpg.asset.json";
import rino01Depois from "../assets/results/rino-01-depois.jpg.asset.json";
import rino02Antes from "../assets/results/rino-02-antes.jpg.asset.json";
import rino02Depois from "../assets/results/rino-02-depois.jpg.asset.json";

/**
 * Para adicionar um novo paciente: suba as imagens em src/assets/results/,
 * importe acima e acrescente { label, before, after } no procedimento.
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
    patients: [
      { label: "Paciente 01", before: rino01Antes.url, after: rino01Depois.url },
      { label: "Paciente 02", before: rino02Antes.url, after: rino02Depois.url },
    ],
  },
  {
    id: "labial",
    name: "Preenchimento Labial",
    patients: [
      { label: "Paciente 01", before: labial01Antes.url, after: labial01Depois.url },
      { label: "Paciente 02", before: labial02Antes.url, after: labial02Depois.url },
      { label: "Paciente 03", before: labial03Antes.url, after: labial03Depois.url },
    ],
  },
  {
    id: "fullface",
    name: "Full Face",
    patients: [{ label: "Paciente 01", before: fullface01Antes.url, after: fullface01Depois.url }],
  },
];

function BeforeAfterToggle({ showAfter, onToggle }: { showAfter: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={showAfter ? "Ver antes" : "Ver depois"}
      className="relative inline-flex items-center h-8 w-[8.5rem] border border-[var(--silver)]/40 hover:border-[var(--silver)]/80 transition-colors"
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 h-6 transition-all duration-500"
        style={{
          width: "calc(50% - 0.25rem)",
          left: showAfter ? "calc(50% + 0.125rem)" : "0.125rem",
          background: "linear-gradient(135deg, #ededed, #6e6e6e, #ededed)",
        }}
      />
      <span
        className={`relative z-10 w-1/2 text-center text-[8px] tracking-[0.2em] transition-colors duration-500 ${
          showAfter ? "text-white/55" : "text-[#0a0a0a]"
        }`}
      >
        ANTES
      </span>
      <span
        className={`relative z-10 w-1/2 text-center text-[8px] tracking-[0.2em] transition-colors duration-500 ${
          showAfter ? "text-[#0a0a0a]" : "text-white/55"
        }`}
      >
        DEPOIS
      </span>
    </button>
  );
}

function ProcedureCard({ proc }: { proc: Procedure }) {
  const [patIdx, setPatIdx] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const patient = proc.patients[patIdx];
  const many = proc.patients.length > 1;

  const go = (d: number) => {
    setPatIdx((n) => (n + d + proc.patients.length) % proc.patients.length);
    setShowAfter(false);
  };

  return (
    <article className="proc-card proc-standard">
      <div className="proc-media relative aspect-[4/5]">
        {patient ? (
          <>
            <img
              src={patient.before}
              alt={`${proc.name} — antes`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-700 ${
                showAfter ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={patient.after}
              alt={`${proc.name} — depois`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-700 ${
                showAfter ? "opacity-100" : "opacity-0"
              }`}
            />
            <span className="absolute left-4 top-4 z-10 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white/85 bg-black/55 backdrop-blur-sm border border-white/15">
              {showAfter ? "Depois" : "Antes"}
            </span>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">Em breve</span>
          </div>
        )}
      </div>

      <div className="relative z-10 p-6 md:p-7">
        <div className="proc-rule h-px w-10 mb-5" />
        <h3 className="proc-title font-serif text-xl md:text-2xl font-light">{proc.name}</h3>
        {patient && (
          <div className="proc-benefit mt-2 text-[10px] uppercase tracking-[0.3em]">
            {patient.label} — {patIdx + 1}/{proc.patients.length}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-4">
          {patient && <BeforeAfterToggle showAfter={showAfter} onToggle={() => setShowAfter((v) => !v)} />}
          {many && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Paciente anterior"
                className="h-8 w-8 border border-[var(--silver)]/30 text-white/70 hover:border-[var(--silver)]/80 hover:text-white transition-colors"
              >
                <span aria-hidden>←</span>
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Próximo paciente"
                className="h-8 w-8 border border-[var(--silver)]/30 text-white/70 hover:border-[var(--silver)]/80 hover:text-white transition-colors"
              >
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function BeforeAfterResults() {
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
            Alterne entre antes e depois em cada procedimento e navegue pelos pacientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {PROCEDURES.map((p) => (
            <ProcedureCard key={p.id} proc={p} />
          ))}
        </div>

        <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-white/40 text-center max-w-2xl mx-auto leading-relaxed">
          Cada paciente responde de forma individual; os resultados podem variar e a avaliação profissional é
          indispensável.
        </p>
      </div>
    </section>
  );
}
