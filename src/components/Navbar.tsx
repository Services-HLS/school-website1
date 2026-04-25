import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastY = 0;
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > lastY && y > 120) setHidden(true);
      else setHidden(false);
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-elegant" : location.pathname === "/" ? "bg-ink/75 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-ivory font-serif text-lg leading-none">
            L
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`font-serif text-base tracking-wide transition-colors ${scrolled || location.pathname !== "/" ? "text-forest" : "text-ivory"}`}>{SITE.name}</span>
            <span className={`text-[10px] uppercase tracking-[0.22em] transition-colors ${scrolled || location.pathname !== "/" ? "text-muted-foreground" : "text-ivory/60"}`}>
              Croydon · UK
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: location.pathname === "/" && !scrolled ? "text-gold" : "text-forest" }}
              inactiveProps={{ 
                className: location.pathname === "/" && !scrolled 
                  ? "text-ivory/80 hover:text-gold" 
                  : "text-foreground/70 hover:text-forest" 
              }}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors"
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  <span
                    className={`pointer-events-none absolute left-1/2 top-full block h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                      isActive ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-premium btn-forest text-[11px]">
            Book a Visit
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} className="text-forest" /> : <Menu size={18} className="text-forest" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-auto mt-3 max-w-6xl rounded-3xl glass shadow-elegant p-4"
          >
            <ul className="flex flex-col">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeProps={{ className: "text-forest bg-secondary" }}
                    inactiveProps={{ className: "text-foreground/80" }}
                    activeOptions={{ exact: n.to === "/" }}
                    className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.22em] font-medium"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link to="/contact" className="btn-premium btn-forest w-full text-[11px]">
                  Book a Visit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
