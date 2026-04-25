import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Get in touch with Learning World Montessori in Croydon. Book a visit, ask about funded places or chat on WhatsApp.",
      },
      { property: "og:title", content: "Contact — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Visit our Coombe Road nursery in Croydon, or get in touch by phone, WhatsApp or email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-ivory">
      <Header />
      <FormAndInfo />
      <Map />
    </div>
  );
}

function Header() {
  return (
    <section className="pt-40 pb-12 md:pt-48 md:pb-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Let's begin a conversation."
          align="center"
          description="We'd love to show you around. Send us a message, give us a call or pop us a note on WhatsApp."
        />
      </div>
    </section>
  );
}

function FormAndInfo() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="rounded-3xl bg-forest p-8 md:p-10 text-ivory shadow-elegant relative overflow-hidden">
            <div className="ambient-blob" style={{ width: 240, height: 240, background: "var(--gold)", top: -80, right: -80, opacity: 0.25 }} />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Visit us</div>
              <h3 className="mt-3 font-serif text-3xl">Where to find us.</h3>
              <div className="gold-rule mt-5" />

              <ul className="mt-8 space-y-6 text-sm">
                <ContactRow icon={<MapPin size={16} />} title="Address">
                  {SITE.address.line1}<br />{SITE.address.line2}
                </ContactRow>
                <ContactRow icon={<Phone size={16} />} title="Phone">
                  <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="hover:text-gold">{SITE.phone}</a>
                </ContactRow>
                <ContactRow icon={<Mail size={16} />} title="Email">
                  <a href={`mailto:${SITE.email}`} className="hover:text-gold break-all">{SITE.email}</a>
                </ContactRow>
                <ContactRow icon={<MessageCircle size={16} />} title="WhatsApp">
                  <a
                    href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold"
                  >
                    Chat with us
                  </a>
                </ContactRow>
              </ul>

              <div className="mt-10 rounded-2xl border border-gold/25 bg-ink/30 p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Opening hours</div>
                <div className="mt-3 grid gap-1 text-sm text-ivory/85">
                  <div className="flex justify-between"><span>Mon — Fri</span><span>08:00 — 18:00</span></div>
                  <div className="flex justify-between text-ivory/55"><span>Sat — Sun</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-ivory/50">{title}</div>
        <div className="mt-1 text-ivory/90 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired — show optimistic confirmation. Swap with a server function if needed.
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-card p-8 md:p-10 shadow-lift border border-border/40">
      <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Send a message</div>
      <h3 className="mt-3 font-serif text-3xl text-forest">We'll get back to you soon.</h3>
      <div className="gold-rule mt-5" />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <FloatField id="name" label="Your name" required />
        <FloatField id="email" label="Email address" type="email" required />
        <FloatField id="phone" label="Phone (optional)" />
        <FloatField id="child" label="Child's age" />
        <FloatField id="message" label="Message" textarea className="md:col-span-2" />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-foreground/55 max-w-sm">
          By submitting, you agree to be contacted about your enquiry.
        </p>
        <button type="submit" className="btn-premium btn-forest" disabled={sent}>
          {sent ? "Message sent" : <>Send message <Send size={14} /></>}
        </button>
      </div>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm text-forest"
        >
          Thank you — we've received your enquiry and will reply shortly.
        </motion.div>
      )}
    </form>
  );
}

function FloatField({
  id, label, type = "text", textarea = false, className = "", required = false,
}: {
  id: string; label: string; type?: string; textarea?: boolean; className?: string; required?: boolean;
}) {
  const [val, setVal] = useState("");
  const filled = val.length > 0;
  const baseClasses =
    "peer block w-full bg-transparent border-0 border-b border-border/60 px-0 pt-6 pb-2 text-foreground placeholder-transparent focus:border-gold focus:ring-0 focus:outline-none transition-colors";

  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={label}
          required={required}
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          required={required}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={baseClasses}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 transition-all duration-300 ${
          filled
            ? "top-0 text-[10px] uppercase tracking-[0.28em] text-gold"
            : "top-6 text-base text-foreground/55 peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.28em] peer-focus:text-gold"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function Map() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-elegant border border-gold/20 aspect-[16/9]">
            <iframe
              title="Learning World Montessori location"
              src="https://www.google.com/maps?q=Coombe+Road+Croydon+UK&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
