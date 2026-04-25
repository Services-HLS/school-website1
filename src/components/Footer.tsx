import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { NAV, SITE } from "@/lib/site";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-ivory">
      <div className="ambient-blob" style={{ width: 480, height: 480, background: "var(--gold)", top: -120, left: -120, opacity: 0.15 }} />
      <div className="ambient-blob" style={{ width: 360, height: 360, background: "var(--forest)", bottom: -100, right: -80, opacity: 0.4 }} />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="font-serif text-3xl tracking-tight">{SITE.name}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.28em] text-gold">{SITE.tagline}</div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
                A vibrant childcare setting where children get plenty of opportunity towards effective learning and growth.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-gold">Explore</div>
              <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-ivory/80 hover:text-gold transition-colors">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-gold">Visit Us</div>
              <p className="mt-4 text-sm text-ivory/80">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </p>
              <p className="mt-3 text-sm text-ivory/60">{SITE.address.note}</p>
              <div className="mt-6 flex gap-3">
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors">
                  <Facebook size={16} />
                </a>
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors">
                  <Instagram size={16} />
                </a>
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 hover:border-gold hover:text-gold transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="font-serif italic text-ivory/60">"I hear, I forget; I see, I remember; I experience, I understand."</div>
        </div>
      </div>
    </footer>
  );
}
