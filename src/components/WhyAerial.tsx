import { motion } from "framer-motion";

const benefits = [
  {
    stat: "68%",
    label: "mais engajamento",
    desc: "Imobiliárias: Propriedades vendem até 30% mais rápido com imagens aéreas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    stat: "3x",
    label: "mais impacto",
    desc: "Agronegócio: Mostre a escala real da sua operação com sobrevoo completo.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: "10x",
    label: "mais alcance",
    desc: "Eventos: Cobertura aérea que impressiona e gera compartilhamento orgânico.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
];

const WhyAerial = () => {
  return (
    <section className="relative py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // POR QUE AÉREO?
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
            Imagens aéreas transformam a percepção do seu negócio
          </h2>
          <p className="font-body text-muted mb-12 max-w-lg" style={{ fontSize: "0.95rem" }}>
            Transmita autoridade instantânea e aumente o engajamento com captação profissional de drone.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="card-hover-border rounded-sm border border-border p-8 bg-secondary"
            >
              <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.08)" }}>
                {b.icon}
              </div>
              <span className="font-display text-primary text-3xl font-bold block">{b.stat}</span>
              <span className="font-display text-foreground text-xs tracking-wider block mb-3">{b.label}</span>
              <p className="font-body text-muted text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAerial;
