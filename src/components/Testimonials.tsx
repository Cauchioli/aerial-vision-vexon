import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As imagens aéreas da Grama Prime ficaram incríveis. Conseguimos mostrar toda a escala da nossa produção de um jeito que nunca tinha sido feito antes.",
    initials: "GP",
    name: "Grama Prime",
    role: "Itapetininga",
    real: true,
  },
  {
    text: "Seu depoimento pode estar aqui.",
    initials: "?",
    name: "Seu nome",
    role: "Sua empresa",
    real: false,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // DEPOIMENTOS
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-12">
            O que dizem sobre a Vexon
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative border rounded-sm p-7"
              style={{
                background: "hsl(220 33% 11%)",
                borderColor: t.real ? "rgba(0,255,213,0.15)" : "rgba(0,255,213,0.1)",
                borderStyle: t.real ? "solid" : "dashed",
                opacity: t.real ? 1 : 0.5,
              }}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-display text-primary/10 text-6xl leading-none select-none">
                "
              </span>

              <div className="text-primary text-sm mb-4 tracking-wider">★★★★★</div>

              <p className="font-body text-muted italic mb-6 leading-relaxed text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <span className="font-display text-primary text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <span className="font-body font-bold text-foreground text-sm block">{t.name}</span>
                  <span className="font-body text-muted text-xs">{t.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
