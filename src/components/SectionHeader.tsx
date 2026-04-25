import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <Reveal>
          <div className={`text-[11px] uppercase tracking-[0.32em] text-gold ${align === "center" ? "" : ""}`}>
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-4xl md:text-5xl text-forest leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className={`gold-rule mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className={`mt-6 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
