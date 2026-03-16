import { motion } from "framer-motion";

const reasons = [
  {
    title: "ESTRUTURA ENXUTA",
    desc: "Sem aluguel de estúdio caro em SP. Custo reduzido = preço justo para você.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "TECNOLOGIA PRÓPRIA",
    desc: "Equipamento DJI de última geração, amortizado. Você não paga locação.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <rect x="2" y="4" width="20" height="16" rx="2" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "FOCO REGIONAL",
    desc: "Itapetininga e região. Sem custo de deslocamento para longe.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "ECONOMIA DE ESCALA",
    desc: "Múltiplos voos por dia. Passamos essa eficiência para você.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" /><polyline points="17,6 23,6 23,12" />
      </svg>
    ),
  },
];

const WhyPricing = () => {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // TRANSPARÊNCIA
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
            Por que nossos preços são mais acessíveis?
          </h2>
          <p className="font-body text-muted mb-12 max-w-lg" style={{ fontSize: "0.95rem" }}>
            Transparência gera confiança. Veja como conseguimos entregar qualidade profissional com preço justo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-sm border border-border p-6 bg-secondary"
            >
              <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                {r.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-xs tracking-wider mb-2">{r.title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPricing;
