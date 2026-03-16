import { motion } from "framer-motion";

const services = [
  {
    title: "PACOTE PRIMEIRO VOO",
    desc: "Conheça a qualidade Vexon antes de investir mais. Ideal para quem quer testar.",
    price: "297",
    features: ["10 minutos de voo", "5 fotos tratadas", "1 vídeo curto editado"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "CAPTAÇÃO 4K BRUTA",
    desc: "Material profissional em 4K para sua equipe editar.",
    price: "497",
    features: ["30 minutos de voo", "Arquivos em 4K", "Entrega em 48h"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "CAPTAÇÃO + EDIÇÃO",
    desc: "Pronto para publicar nas suas redes. Vídeo editado com trilha profissional.",
    price: "997",
    badge: "MAIS PEDIDO",
    highlight: true,
    features: ["45 minutos de voo", "Edição profissional", "Trilha sonora licenciada", "Entrega em 72h"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" />
      </svg>
    ),
  },
  {
    title: "PACOTE IMOBILIÁRIO",
    desc: "Sobrevoo externo + tour interno completo para imobiliárias e construtoras.",
    price: "1.497",
    features: ["Voo externo 4K", "Tour 360° interno", "Landing page do imóvel"],
    cta: "CONSULTAR",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-24 px-4 bg-card">
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
            Investimento acessível — drone profissional Itapetininga
          </h2>
          <p className="font-body text-muted mb-4 max-w-lg" style={{ fontSize: "0.95rem" }}>
            Filmagem aérea profissional por uma fração do preço de mercado.
          </p>
        </motion.div>

        {/* Market price anchor */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="rounded-sm border border-border p-5 mb-12 max-w-2xl bg-secondary"
        >
          <p className="font-display text-xs text-muted tracking-wider mb-3">REFERÊNCIA DE MERCADO</p>
          <div className="space-y-1.5 font-body text-sm">
            <p className="text-muted line-through decoration-destructive/60">Equipe de produção tradicional: R$ 8.000 – R$ 15.000</p>
            <p className="text-muted line-through decoration-destructive/60">Agência de marketing + locação: R$ 5.000 – R$ 12.000</p>
            <p className="text-muted line-through decoration-destructive/60">Freelancer experiente (SP capital): R$ 3.500 – R$ 6.000</p>
          </div>
          <p className="font-display text-primary text-xs mt-4 tracking-wider">
            NA VEXON, A PARTIR DE R$ 297
          </p>
        </motion.div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card-hover-border rounded-sm p-8 border relative bg-secondary"
              style={{
                borderColor: s.highlight ? "hsl(var(--primary) / 0.35)" : "hsl(var(--primary) / 0.15)",
              }}
            >
              {s.badge && (
                <span className="absolute top-3 right-3 font-display text-primary-foreground bg-primary px-2 py-0.5 rounded-sm" style={{ fontSize: "0.6rem" }}>
                  {s.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-2 tracking-wider">
                {s.title}
              </h3>
              <div className="mb-3">
                <span className="font-display text-primary text-2xl font-bold">R$ {s.price}</span>
              </div>
              <p className="font-body text-muted text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <ul className="space-y-1.5 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="font-body text-muted text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5515996918236"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-primary text-xs tracking-wider hover:brightness-110 transition-all"
              >
                {s.cta || "SOLICITAR"} →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
