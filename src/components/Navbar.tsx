import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(5,8,15,0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(0,255,213,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display font-bold text-primary text-lg tracking-wider">
          VEXON
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-muted hover:text-primary transition-colors duration-150"
              style={{ fontSize: "0.85rem" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5515996918236"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-display text-xs font-bold bg-primary text-primary-foreground px-5 py-2 rounded-sm tracking-wider hover:brightness-110 transition-all"
        >
          ORÇAMENTO
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: "rgba(5,8,15,0.95)", borderColor: "rgba(0,255,213,0.15)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-muted hover:text-primary transition-colors"
                  style={{ fontSize: "0.85rem" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/5515996918236"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs font-bold bg-primary text-primary-foreground px-5 py-2 rounded-sm tracking-wider text-center"
              >
                ORÇAMENTO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
