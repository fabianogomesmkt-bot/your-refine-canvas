import { useCallback, useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

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
 * Para cadastrar um novo caso: suba as imagens em src/assets/results/,
 * importe acima e acrescente { label, before, after } no procedimento correspondente.
 * Procedimentos sem casos cadastrados apenas não exibem o botão "Ver resultados".
 */
export type ResultCase = { label: string; before: string; after: string };

export const RESULTS_BY_PROCEDURE: Record<string, ResultCase[]> = {
  acne: [
    { label: "Caso 01", before: acne01Antes.url, after: acne01Depois.url },
    { label: "Caso 02", before: acne02Antes.url, after: acne02Depois.url },
  ],
  rino: [
    { label: "Caso 01", before: rino01Antes.url, after: rino01Depois.url },
    { label: "Caso 02", before: rino02Antes.url, after: rino02Depois.url },
  ],
  labial: [
    { label: "Caso 01", before: labial01Antes.url, after: labial01Depois.url },
    { label: "Caso 02", before: labial02Antes.url, after: labial02Depois.url },
    { label: "Caso 03", before: labial03Antes.url, after: labial03Depois.url },
  ],
  fullface: [{ label: "Caso 01", before: fullface01Antes.url, after: fullface01Depois.url }],
  melasma: [],
  blefaro: [],
  rejuvenescimento: [],
  glow: [],
  colageno: [],
  botox: [],
};

export function hasResults(key?: string) {
  return !!key && (RESULTS_BY_PROCEDURE[key]?.length ?? 0) > 0;
}

export default function ProcedureResultsModal({
  open,
  title,
  cases,
  onClose,
}: {
  open: boolean;
  title: string;
  cases: ResultCase[];
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (d: number) => setIdx((n) => (n + d + cases.length) % cases.length),
    [cases.length],
  );

  useEffect(() => {
    if (open) setIdx(0);
  }, [open, title]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, go]);

  if (!open) return null;

  const current = cases[idx];

  return (
    <div
      className="yr-modal-overlay fixed inset-0 z-[100] flex items-stretch md:items-center justify-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Resultados: ${title}`}
        className="yr-modal-panel relative w-full md:max-w-[1100px] md:max-h-[92vh] h-full md:h-auto overflow-y-auto"
      >
        <div className="flex items-start justify-between gap-6 p-6 md:p-10 pb-0">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-[var(--silver)]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">Resultados</span>
            </div>
            <h3 className="font-serif text-2xl md:text-4xl font-light text-white leading-tight pr-4">{title}</h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fechar"
            className="shrink-0 h-10 w-10 border border-[var(--silver)]/35 text-white/70 hover:border-[var(--silver)] hover:text-white transition-colors"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>

        {current ? (
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {[
                { tag: "Antes", src: current.before },
                { tag: "Depois", src: current.after },
              ].map((s) => (
                <figure key={s.tag} className="relative overflow-hidden border border-[var(--silver)]/20 bg-black">
                  <img
                    src={s.src}
                    alt={`${title}, ${current.label}, ${s.tag.toLowerCase()}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover object-[50%_35%]"
                  />
                  <figcaption className="absolute left-3 top-3 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white/85 bg-black/55 backdrop-blur-sm border border-white/15">
                    {s.tag}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">
                {current.label} <span className="text-white/30">/</span> {idx + 1} de {cases.length}
              </div>
              {cases.length > 1 && (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 mr-2">
                    {cases.map((c, i) => (
                      <button
                        key={c.label}
                        onClick={() => setIdx(i)}
                        aria-label={`Ir para ${c.label}`}
                        className={`h-px w-6 transition-colors ${i === idx ? "bg-[var(--silver)]" : "bg-white/25 hover:bg-white/50"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => go(-1)}
                    aria-label="Caso anterior"
                    className="h-9 w-9 border border-[var(--silver)]/30 text-white/70 hover:border-[var(--silver)] hover:text-white transition-colors"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Próximo caso"
                    className="h-9 w-9 border border-[var(--silver)]/30 text-white/70 hover:border-[var(--silver)] hover:text-white transition-colors"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>
              )}
            </div>

            <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-white/35 leading-relaxed max-w-2xl">
              Cada paciente responde de forma individual. Os resultados podem variar e a avaliação profissional é
              indispensável.
            </p>
          </div>
        ) : (
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-center justify-center gap-8 border border-[var(--silver)]/15 bg-white/[0.02] py-24 md:py-32 text-center">
              <ImageOff
                strokeWidth={1}
                className="h-14 w-14 md:h-20 md:w-20 text-[var(--silver)]/50"
                aria-hidden
              />
              <div>
                <p className="font-serif text-xl md:text-2xl font-light text-white/85">
                  Em breve
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-white/45 leading-relaxed max-w-xs">
                  Os resultados reais deste procedimento serão publicados aqui em breve.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
