import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="laser-line" style={{ left: "20%" }} />
      <div className="laser-line" style={{ left: "75%" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <span
            className="inline-block font-display text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-8"
            style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}
          >
            ESTÚDIO DE VISIBILIDADE AÉREA · ITAPETININGA
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-black text-foreground leading-tight mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          Seu negócio visto de{" "}
          <span className="text-primary">outro nível</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="font-body text-muted mx-auto mb-10"
          style={{ maxWidth: 520, fontSize: "1.05rem", lineHeight: 1.7 }}
        >
          Filmagem aérea profissional em Itapetininga — do alto ao detalhe, em 4K cinematográfico. Transformamos a forma como seu negócio é visto.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5515996918236"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs font-bold bg-primary text-primary-foreground px-8 py-3.5 rounded-sm tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            FALAR COM ESPECIALISTA
          </a>
          <a
            href="#servicos"
            className="font-display text-xs font-bold text-primary border border-primary/30 px-8 py-3.5 rounded-sm tracking-wider hover:border-primary/60 transition-all"
          >
            VER INVESTIMENTO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
