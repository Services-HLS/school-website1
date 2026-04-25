import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, StaggerGroup, itemVariants } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import { ParallaxImage } from "@/components/ParallaxImage";
import { CLASSROOM_IMAGES, OUTDOOR_IMAGES, FUN_IMAGES, APPROACH_IMAGE } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Trees, Sparkles } from "lucide-react";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Learning World Montessori" },
      {
        name: "description",
        content:
          "Discover the Montessori method at LWM: classroom learning, outdoor & club activities and extra-curricular fun, all hands-on and child-led.",
      },
      { property: "og:title", content: "Curriculum — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Hands-on Montessori learning, outdoor adventures at Lloyd Park and creative extra-curricular activities.",
      },
      { property: "og:image", content: APPROACH_IMAGE },
      { name: "twitter:image", content: APPROACH_IMAGE },
    ],
  }),
  component: CurriculumPage,
});

const PROGRAMS = [
  {
    icon: BookOpen,
    title: "Classroom & Learning",
    body:
      "Hands-on Montessori materials, language, mathematics, practical life and sensorial work — guided one-on-one in a prepared environment.",
    image: CLASSROOM_IMAGES[0],
    sample: CLASSROOM_IMAGES.slice(1, 5),
  },
  {
    icon: Trees,
    title: "Outdoor & Club",
    body:
      "Daily outdoor learning at Lloyd Park, tennis, zumba and visits to local farms — building confidence, coordination and a love of nature.",
    image: OUTDOOR_IMAGES[0],
    sample: OUTDOOR_IMAGES.slice(1, 5),
  },
  {
    icon: Sparkles,
    title: "Extra-curricular & Fun",
    body:
      "Music, art, festivals and creative play — moments of joy that build social skills and lasting memories of childhood.",
    image: FUN_IMAGES[0],
    sample: FUN_IMAGES.slice(1, 5),
  },
] as const;

function CurriculumPage() {
  return (
    <div className="bg-ivory">
      <Header />
      <Method />
      <Programs />
      <Day />
      <CtaStrip />
    </div>
  );
}

function Header() {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Curriculum</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-forest leading-[1.02]">
            Hands-on. Child-led. <span className="italic text-gold">Inspired.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="gold-rule mt-8" />
        </Reveal>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-5">
        <Reveal y={40} className="md:col-span-2">
          <ParallaxImage src={APPROACH_IMAGE} alt="The Montessori method in practice" className="aspect-[4/5]" range={50} />
        </Reveal>
        <div className="md:col-span-3">
          <SectionHeader eyebrow="The Method" title="Following the child, every day." />
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-foreground/75 leading-relaxed">
              <em>The Montessori Method of Education</em>, developed by{" "}
              <em>Maria Montessori</em>, is a child-centred educational approach where children
              proceed by identifying learning areas according to their interests.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              Dr. Maria emphasises that the early formative years lay the building blocks for
              developing the personality that a child will eventually grow into. Hence, the
              lessons are hands-on and active. Classrooms are prepared in advance based on
              observations of the students' individual needs.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Programs" title="Three worlds, one journey." align="center" />
        <StaggerGroup className="mt-16 grid gap-8 lg:grid-cols-3" stagger={0.12}>
          {PROGRAMS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} variants={itemVariants}>
                <TiltCard intensity={7} className="h-full rounded-3xl overflow-hidden bg-card shadow-elegant">
                  <div className="image-frame aspect-[5/4]">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute left-5 bottom-5 right-5 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-forest">
                        <Icon size={16} />
                      </span>
                      <h3 className="font-serif text-2xl text-ivory">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="gold-rule" />
                    <p className="mt-5 text-sm text-foreground/75 leading-relaxed">{p.body}</p>
                    <div className="mt-6 grid grid-cols-4 gap-2">
                      {p.sample.map((src) => (
                        <img key={src} src={src} alt="" loading="lazy" className="aspect-square w-full rounded-md object-cover" />
                      ))}
                    </div>
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

const TIMELINE = [
  { time: "08:00", label: "Welcome & free play", body: "A gentle drop-off, settling into the prepared environment." },
  { time: "09:30", label: "Montessori work cycle", body: "Independent work with materials — language, maths, sensorial." },
  { time: "11:30", label: "Outdoor learning", body: "Garden play and walks to Lloyd Park." },
  { time: "12:30", label: "Home-made lunch", body: "Freshly prepared vegetarian meals, served family-style." },
  { time: "13:30", label: "Rest & quiet stories", body: "Calm time with books and music." },
  { time: "15:00", label: "Clubs & extra-curricular", body: "Music, yoga, tennis, zumba and creative arts." },
  { time: "17:30", label: "Reflection & pickup", body: "Tidy-up, reflection circle and a warm goodbye." },
] as const;

function Day() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="A day at LWM" title="Calm rhythms. Joyful learning." align="center" />
        <div className="relative mt-16">
          <div className="absolute left-[88px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0" />
          <ul className="space-y-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.time} delay={i * 0.05}>
                <li className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="md:flex-1 md:text-right">
                    <div className={`md:${i % 2 === 1 ? "text-left" : "text-right"} ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <div className="font-serif italic text-gold text-2xl">{t.time}</div>
                      <h3 className="mt-1 font-serif text-xl text-forest">{t.label}</h3>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed max-w-sm md:ml-auto md:mr-0">
                        {t.body}
                      </p>
                    </div>
                  </div>
                  <span className="relative grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold ring-4 ring-ivory shadow-gold md:absolute md:left-1/2 md:-translate-x-1/2" />
                  <div className="md:flex-1 hidden md:block" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-forest">
            Curious to see it in action?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-foreground/70">
            Visit the gallery to peek inside our classrooms and outdoor adventures.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/gallery" className="btn-premium btn-forest">
              View Gallery <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-premium btn-ghost text-forest border-forest/40 hover:border-gold hover:text-gold">
              Book a Visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
