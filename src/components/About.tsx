import { motion } from "framer-motion";

const stats = [
  { value: "4K", label: "Resolução de captação" },
  { value: "3x", label: "Baterias por sessão" },
  { value: "DJI", label: "Equipamento profissional" },
  { value: "100%", label: "Conteúdo pronto pra postar" },
];

const features = [
  "Captação aérea 4K com DJI",
  "Voo indoor e externo",
  "Edição profissional inclusa nos pacotes",
  "Atendimento em Itapetininga e região",
];

const About = () => {
  return (
    <section id="sobre" className="relative py-24 px-4" style={{ background: "hsl(220 40% 5%)" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // SOBRE A VEXON
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-6">
            Tecnologia aérea para negócios locais — drone Itapetininga SP
          </h2>
          <p className="font-body text-muted mb-4 leading-relaxed" style={{ fontSize: "0.95rem" }}>
            A Vexon nasceu com o propósito de democratizar a captação aérea profissional para negócios de Itapetininga e região. Com equipamento DJI de última geração, entregamos imagens cinematográficas em resolução 4K.
          </p>
          <p className="font-body text-muted mb-8 leading-relaxed" style={{ fontSize: "0.95rem" }}>
            Do agronegócio ao mercado imobiliário, cada projeto é tratado com excelência técnica e visão criativa para transformar a forma como seu negócio é visto.
          </p>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 font-body text-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right - Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="card-hover-border border rounded-sm p-6 text-center"
              style={{ background: "hsl(220 33% 11%)", borderColor: "rgba(0,255,213,0.15)" }}
            >
              <span className="font-display font-bold text-primary text-2xl block mb-2">
                {s.value}
              </span>
              <span className="font-body text-muted text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
