import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerGroup, itemVariants } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SectionHeader } from "@/components/SectionHeader";
import {
  PILLARS,
  TESTIMONIALS,
  HERO_IMAGE,
  ABOUT_IMAGE,
  APPROACH_IMAGE,
  HUG_IMAGE,
} from "@/lib/site";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learning World Montessori — Croydon's OFSTED Registered Nursery" },
      {
        name: "description",
        content:
          "Come home to Learning World Montessori — a child-centred OFSTED registered nursery in Croydon offering Montessori curriculum, home-made meals and outdoor learning at Lloyd Park.",
      },
      { property: "og:title", content: "Learning World Montessori — Croydon" },
      {
        property: "og:description",
        content:
          "An OFSTED registered Montessori nursery in Croydon. Quality day care, home-made food, funded places.",
      },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "twitter:title", content: "Learning World Montessori — Croydon" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <QuoteBand />
      <Intro />
      <Pillars />
      <ApproachTeaser />
      <Testimonials />
      <CtaStrip />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-ink">
      <motion.img
        src={HERO_IMAGE}
        alt="Children at Learning World Montessori"
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl items-center pt-24 px-6"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-gold"
          >
            <Sparkles size={12} /> OFSTED Registered · Croydon
          </motion.div>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-[0.98]">
            <Word delay={0.3}>Come</Word>{" "}
            <Word delay={0.4}>home</Word>{" "}
            <Word delay={0.5}>to</Word>
            <span className="block mt-2 text-gold italic font-light">
              <Word delay={0.65}>Learning</Word>{" "}
              <Word delay={0.78}>World</Word>{" "}
              <Word delay={0.92}>Montessori.</Word>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-8 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed"
          >
            A vibrant, child-centred nursery where curiosity becomes confidence — guided by the
            Montessori method and warmed by home-made meals, every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-premium btn-gold">
              Book a Visit <ArrowRight size={14} />
            </Link>
            <Link to="/curriculum" className="btn-premium btn-ghost">
              Our Curriculum
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/60"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="reveal-mask align-baseline">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.2, 0.8, 0.2, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function QuoteBand() {
  return (
    <section className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Our Philosophy</div>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="mt-8 font-serif italic text-3xl md:text-5xl text-gold leading-[1.15]">
            "I hear, I forget;
            <br className="hidden md:block" /> I see, I remember;
            <br className="hidden md:block" /> I experience, I understand."
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="gold-rule mx-auto mt-10" />
          <div className="mt-6 text-sm uppercase tracking-[0.32em] text-foreground/60">
            — Maria Montessori
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Welcome"
            title="A nursery that feels like home."
          />
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-foreground/75 leading-relaxed">
              Learning World Montessori is a vibrant childcare setting where children get plenty
              of opportunity towards effective learning and growth. Our curriculum helps them in
              becoming independent confident individuals, building positive relationships and
              developing sincere emotional security. We follow Montessori ethos and philosophy
              while taking influences from the EYFS methodology as well.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              We offer a variety of clubs which help children develop early interest in physical
              activities and outdoor learning. Our nursery is located near the roundabout on
              Coombe Road, where Park Hill Road meets the Coombe Road. It is also in the
              vicinity of the expansive Lloyd Park which allows children to enjoy and learn from
              outdoor activities.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10">
              <Link to="/about" className="btn-premium btn-forest">
                More About Us <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={40}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-md border border-gold/30 translate-x-4 translate-y-4" />
            <ParallaxImage
              src={ABOUT_IMAGE}
              alt="Children learning at Learning World Montessori"
              className="aspect-[4/5]"
              range={50}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="What we offer"
          title="Care that's considered, every detail."
          align="center"
        />
        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {PILLARS.map((p, i) => (
            <motion.div key={p.title} variants={itemVariants}>
              <TiltCard className="h-full rounded-2xl glass shadow-lift p-7">
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  0{i + 1}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-gold">{p.title}</h3>
                <div className="gold-rule mt-4" />
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{p.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ApproachTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-5">
        <Reveal y={40} className="md:col-span-2">
          <ParallaxImage
            src={APPROACH_IMAGE}
            alt="The Montessori method in practice"
            className="aspect-[4/5]"
            range={70}
          />
        </Reveal>
        <div className="md:col-span-3">
          <SectionHeader
            eyebrow="Our Approach"
            title="The Montessori Method of Education."
          />
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
              lessons are hands-on and active.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              Classrooms are prepared in advance based on observations of the students'
              individual needs. We honour and encourage each child's pace — teachers are guides
              on a one-on-one basis, supporting excellence in learning and life skills alike.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10">
              <Link to="/curriculum" className="btn-premium btn-gold">
                Explore Curriculum <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 md:py-32 text-ivory">
      <div className="ambient-blob" style={{ width: 540, height: 540, background: "var(--gold)", top: -160, right: -160, opacity: 0.18 }} />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Families say</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
              Words from our parents.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="gold-rule mx-auto mt-6" />
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={itemVariants}>
              <TiltCard intensity={6} className="h-full rounded-2xl glass-dark p-7">
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <div>
                    <div className="font-serif italic text-lg text-gold">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-ivory/60 mt-1">
                      Parent · LWM
                    </div>
                  </div>
                </div>
                <div className="gold-rule mt-5" />
                <p className="mt-5 text-sm text-ivory/80 leading-relaxed">{t.quote}</p>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-12 md:p-20 text-ivory shadow-elegant">
            <img
              src={HUG_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/90" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                Begin the journey
              </div>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
                Visit our nursery <span className="italic text-gold">in person.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed">
                Come and see our prepared environments, meet Nikki and the team, and experience
                the LWM atmosphere first-hand.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-premium btn-gold">
                  Book a Visit <ArrowRight size={14} />
                </Link>
                <Link to="/gallery" className="btn-premium btn-ghost">
                  See the Gallery
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
