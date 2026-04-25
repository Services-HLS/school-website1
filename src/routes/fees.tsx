import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, StaggerGroup, itemVariants } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import { FEES_TIERS } from "@/lib/site";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Charges — Learning World Montessori" },
      {
        name: "description",
        content:
          "Half-day, full-day and extended sessions at Learning World Montessori. Funded places available — get in touch for current fees.",
      },
      { property: "og:title", content: "Fees & Charges — LWM Croydon" },
      {
        property: "og:description",
        content:
          "Flexible Montessori sessions with home-made meals, outdoor learning and funded places.",
      },
    ],
  }),
  component: FeesPage,
});

function FeesPage() {
  return (
    <div className="bg-ivory">
      <Header />
      <Pricing />
      <Notes />
    </div>
  );
}

function Header() {
  return (
    <section className="pt-40 pb-12 md:pt-48 md:pb-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Fees & Charges</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-forest leading-[1.02]">
            Sessions, simply <span className="italic text-gold">arranged.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="gold-rule mx-auto mt-8" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-foreground/70">
            Choose the rhythm that suits your family. Government funding is accepted for eligible
            two- to four-year-olds. Contact us for current pricing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <StaggerGroup className="grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {FEES_TIERS.map((t) => {
            const featured = "featured" in t && t.featured;
            return (
              <motion.div key={t.name} variants={itemVariants}>
                <TiltCard intensity={featured ? 8 : 5} className={`h-full rounded-3xl p-8 md:p-10 ${featured ? "bg-forest text-ivory shadow-elegant" : "bg-card text-foreground shadow-lift border border-border/40"}`}>
                  {featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] uppercase tracking-[0.28em] text-forest">
                      Recommended
                    </div>
                  )}
                  <div className={`text-[11px] uppercase tracking-[0.32em] ${featured ? "text-gold" : "text-foreground/50"}`}>
                    {t.hours}
                  </div>
                  <h3 className={`mt-4 font-serif text-3xl ${featured ? "text-ivory" : "text-forest"}`}>
                    {t.name}
                  </h3>
                  <div className={`gold-rule mt-5 ${featured ? "" : ""}`} />
                  <div className={`mt-6 font-serif text-5xl ${featured ? "text-gold" : "text-forest"}`}>
                    {t.priceLabel}
                  </div>
                  <div className={`text-xs uppercase tracking-[0.28em] mt-2 ${featured ? "text-ivory/60" : "text-foreground/50"}`}>
                    Enquire for current rates
                  </div>
                  <ul className="mt-8 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${featured ? "bg-gold text-forest" : "bg-forest text-ivory"}`}>
                          <Check size={12} />
                        </span>
                        <span className={featured ? "text-ivory/85" : "text-foreground/75"}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link to="/contact" className={`btn-premium w-full ${featured ? "btn-gold" : "btn-forest"}`}>
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-3xl glass p-8 md:p-12 shadow-lift">
            <SectionHeader eyebrow="Good to know" title="Funding & inclusions." />
            <ul className="mt-8 grid gap-4 md:grid-cols-2 text-sm text-foreground/75 leading-relaxed">
              {[
                "Government funding accepted for eligible 2-, 3- and 4-year-olds.",
                "Home-made vegetarian meals and snacks included in every session.",
                "Most extra-curricular clubs included; specialist sessions on request.",
                "Settling-in plan tailored to each family's needs at no extra cost.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
