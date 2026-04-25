import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, StaggerGroup, itemVariants } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ABOUT_IMAGE, HUG_IMAGE, PILLARS } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learning World Montessori, Croydon" },
      {
        name: "description",
        content:
          "Learn about Learning World Montessori — a child-centred OFSTED registered nursery in Croydon led by Nikki, with home-made meals and outdoor learning at Lloyd Park.",
      },
      { property: "og:title", content: "About Learning World Montessori" },
      {
        property: "og:description",
        content:
          "A vibrant, child-centred Montessori nursery in Croydon. Discover our story, ethos and team.",
      },
      { property: "og:image", content: ABOUT_IMAGE },
      { name: "twitter:image", content: ABOUT_IMAGE },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-ivory">
      <PageHeader />
      <Story />
      <Values />
      <Cta />
    </div>
  );
}

function PageHeader() {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">About LWM</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-forest leading-[1.02]">
            A nursery built on <span className="italic text-gold">care, curiosity</span> and home.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="gold-rule mt-8" />
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
              Learning World Montessori is a vibrant childcare setting where children get plenty
              of opportunity towards effective learning and growth. Our curriculum helps them in
              becoming independent confident individuals, building positive relationships and
              developing sincere emotional security.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              We follow Montessori ethos and philosophy while taking influences from the EYFS
              methodology as well. We offer a variety of clubs which help children develop early
              interest in physical activities and outdoor learning.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              Our nursery is located near the roundabout on Coombe Road, where Park Hill Road
              meets the Coombe Road. It is also in the vicinity of the expansive Lloyd Park
              which allows children to enjoy and learn from outdoor activities.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              We understand that the child's self-esteem comes from an internal sense of pride
              in their own accomplishments. Therefore, the child's work pace is honoured and
              encouraged. Teachers are guides to students on a one-on-one basis. Our approach
              guides children not just towards excellence in learning but also for life skills.
            </p>
          </Reveal>
        </div>

        <Reveal y={40} delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-md border border-gold/30 -translate-x-4 translate-y-4" />
            <ParallaxImage src={ABOUT_IMAGE} alt="Children at LWM" className="aspect-[4/5]" range={50} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="What we stand for" title="Our values, in practice." align="center" />
        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {PILLARS.map((p, i) => (
            <motion.div key={p.title} variants={itemVariants}>
              <div className="rounded-2xl bg-card p-8 shadow-lift h-full border border-border/40">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-forest">{p.title}</h3>
                  <span className="font-serif italic text-gold text-2xl">0{i + 1}</span>
                </div>
                <div className="gold-rule mt-4" />
                <p className="mt-5 text-sm text-foreground/70 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest p-12 md:p-16 text-ivory shadow-elegant">
            <img src={HUG_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/95 to-forest/80" />
            <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Curious?</div>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">Come and meet us.</h2>
              </div>
              <div className="flex md:justify-end">
                <Link to="/contact" className="btn-premium btn-gold">
                  Book a Visit <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
