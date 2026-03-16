import { motion } from "framer-motion";

const services = [
  {
    title: "CAPTAÇÃO 4K",
    desc: "Material bruto em resolução 4K profissional, pronto para edição. Ideal para quem já tem equipe de produção.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "CAPTAÇÃO + EDIÇÃO",
    desc: "Vídeo editado, com trilha e cortes, pronto para postar nas suas redes sociais.",
    badge: "MAIS PEDIDO",
    highlight: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" />
      </svg>
    ),
  },
  {
    title: "PACOTE PRIMEIRO VOO",
    desc: "Captação + corte básico editado. Conheça a qualidade Vexon antes de fechar seu pacote completo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "IMOBILIÁRIO & TOUR INDOOR",
    desc: "Sobrevoo externo e tour imersivo interno. Perfeito para imobiliárias, construtoras e loteamentos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    title: "AGRONEGÓCIO",
    desc: "Registro aéreo de lavouras, fazendas e colheitas. Conteúdo para marketing e inspeção técnica.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "EVENTOS & EMPRESAS",
    desc: "Cobertura aérea de eventos e estabelecimentos comerciais. Imagens que geram impacto nas redes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-24 px-4" style={{ background: "hsl(220 40% 5%)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // SERVIÇOS
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
            O que a Vexon entrega — drone profissional Itapetininga
          </h2>
          <p className="font-body text-muted mb-12 max-w-lg" style={{ fontSize: "0.95rem" }}>
            Soluções completas de captação aérea para diferentes segmentos.
          </p>
        </motion.div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card-hover-border rounded-sm p-8 border relative"
              style={{
                background: "hsl(220 33% 11%)",
                borderColor: s.highlight ? "rgba(0,255,213,0.35)" : "rgba(0,255,213,0.15)",
              }}
            >
              {s.badge && (
                <span className="absolute top-3 right-3 font-display text-primary-foreground bg-primary px-2 py-0.5 rounded-sm" style={{ fontSize: "0.6rem" }}>
                  {s.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5" style={{ background: "rgba(0,255,213,0.08)" }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-3 tracking-wider">
                {s.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <a
                href="https://wa.me/5515996918236"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-primary text-xs tracking-wider hover:brightness-110 transition-all"
              >
                SOLICITAR ORÇAMENTO →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
