import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  range?: number; // px of parallax shift
  rounded?: string;
};

export function ParallaxImage({ src, alt, className, range = 60, rounded = "rounded-md" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <div ref={ref} className={`image-frame overflow-hidden ${rounded} ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
