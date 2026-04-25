import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Lightbox } from "@/components/Lightbox";
import { CLASSROOM_IMAGES, OUTDOOR_IMAGES, FUN_IMAGES } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Learning World Montessori" },
      {
        name: "description",
        content:
          "Inside the classrooms, outdoor adventures and joyful moments at Learning World Montessori in Croydon.",
      },
      { property: "og:title", content: "Gallery — Learning World Montessori" },
      {
        property: "og:description",
        content:
          "Glimpses of classroom learning, outdoor play and extra-curricular fun at our Croydon nursery.",
      },
      { property: "og:image", content: CLASSROOM_IMAGES[0] },
      { name: "twitter:image", content: CLASSROOM_IMAGES[0] },
    ],
  }),
  component: GalleryPage,
});

const TABS = [
  { id: "classroom", label: "Classroom", images: CLASSROOM_IMAGES },
  { id: "outdoor", label: "Outdoor & Clubs", images: OUTDOOR_IMAGES },
  { id: "fun", label: "Extra-curricular", images: FUN_IMAGES },
] as const;

function GalleryPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("classroom");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const active = useMemo(() => TABS.find((t) => t.id === tab)!, [tab]);

  return (
    <div className="bg-ivory">
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeader
            eyebrow="Gallery"
            title="Glimpses of life at LWM."
            align="center"
            description="Classroom moments, outdoor adventures and the small joys that make our nursery feel like home."
          />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mx-auto flex flex-wrap justify-center gap-2 rounded-full glass p-1.5">
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${active ? "text-forest" : "text-foreground/60 hover:text-forest"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="gallery-pill"
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                      className="absolute inset-0 rounded-full bg-gold/30"
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4"
          >
            {active.images.map((src, i) => (
              <motion.button
                key={src}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.02, 0.6), ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative block w-full overflow-hidden rounded-md break-inside-avoid focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="block w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold">View</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={active.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i === null ? null : (i - 1 + active.images.length) % active.images.length))}
        onNext={() => setLightboxIndex((i) => (i === null ? null : (i + 1) % active.images.length))}
      />
    </div>
  );
}
