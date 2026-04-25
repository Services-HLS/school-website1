import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  images: readonly string[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass-dark text-ivory hover:text-gold"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 grid h-12 w-12 place-items-center rounded-full glass-dark text-ivory hover:text-gold"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 grid h-12 w-12 place-items-center rounded-full glass-dark text-ivory hover:text-gold"
          >
            <ChevronRight size={22} />
          </button>

          <motion.img
            key={images[index]}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-h-[88vh] max-w-[92vw] rounded-md shadow-elegant object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.28em] text-ivory/70">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
