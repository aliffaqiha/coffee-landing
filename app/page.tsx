export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-coffee-foam text-coffee-espresso">
      {/* Decorative kraft tape across the top */}
      <div className="pointer-events-none absolute -left-8 top-10 w-[120%] -rotate-2 bg-coffee-tape/90 py-2">
        <p className="font-mono text-[11px] tracking-[0.3em] text-coffee-espresso">
          {"★ FRESH ROAST ★ 100% ARABICA ★ DIRECT TRADE ★ ".repeat(4)}
        </p>
      </div>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-16 pt-36 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-coffee-mocha">
          Roast Tape Coffee Co. — Small batch roastery
        </p>

        <h1 className="max-w-3xl text-balance font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Not your ordinary caffeine fix.
        </h1>

        <p className="max-w-xl text-base text-coffee-mocha sm:text-lg">
          Direct trade beans, roasted light-to-medium for clarity, sealed with
          tape and shipped within 48 hours. Built for home brewers who read
          cupping notes like liner notes.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#roasts"
            className="rounded-sm bg-coffee-mocha px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-coffee-foam shadow-paper transition-transform hover:-translate-y-0.5"
          >
            Claim today&apos;s roast
          </a>
          <a
            href="#notes"
            className="rounded-sm border-2 border-coffee-tape px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-coffee-mocha transition-colors hover:bg-coffee-tape/10"
          >
            Explore tasting notes
          </a>
        </div>

        {/* Palette specimen — remove once real sections land */}
        <div className="mt-8 border-t border-coffee-border pt-8">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-coffee-mocha">
            Design tokens — Phase 1.3
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["espresso", "bg-coffee-espresso", "text-coffee-foam"],
              ["mocha", "bg-coffee-mocha", "text-coffee-foam"],
              ["cherry", "bg-coffee-cherry", "text-coffee-foam"],
              ["tape", "bg-coffee-tape", "text-coffee-espresso"],
              ["toffee", "bg-coffee-toffee", "text-coffee-espresso"],
              ["oat", "bg-coffee-oat", "text-coffee-espresso"],
              ["border", "bg-coffee-border", "text-coffee-espresso"],
              ["cardboard", "bg-coffee-cardboard", "text-coffee-espresso"],
            ].map(([name, bg, fg]) => (
              <li
                key={name}
                className={`${bg} ${fg} flex h-20 items-end rounded-sm border border-coffee-border/60 p-3 font-mono text-[10px] uppercase tracking-[0.15em]`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-coffee-border px-6 py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-coffee-mocha sm:px-10">
        Calibrating grind size… — 93°c — 1:16 ratio
      </footer>
    </main>
  );
}
