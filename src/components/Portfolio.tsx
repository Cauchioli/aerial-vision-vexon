import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // PORTFÓLIO
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
            Trabalhos realizados
          </h2>
          <p className="font-body text-muted mb-12" style={{ fontSize: "0.95rem" }}>
            Cases reais com captação aérea 4K.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 - Grama Prime */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="card-hover-border rounded-sm border overflow-hidden"
            style={{ background: "hsl(220 40% 5%)", borderColor: "rgba(0,255,213,0.15)" }}
          >
            <div
              className="h-[200px] flex items-center justify-center relative"
              style={{ background: "hsl(220 33% 8%)" }}
            >
              <span className="absolute top-3 left-3 font-display text-primary border border-primary/30 rounded-sm px-2 py-0.5" style={{ fontSize: "0.6rem" }}>
                AGRO
              </span>
              {/* Play button */}
              <div className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary ml-1">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <span className="absolute bottom-3 left-3 font-display text-foreground/60" style={{ fontSize: "0.7rem" }}>
                GRAMA PRIME
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-foreground mb-1" style={{ fontSize: "0.82rem" }}>
                GRAMA PRIME
              </h3>
              <p className="font-body text-muted text-sm">
                Sobrevoo completo da grameira — do plantio à colheita. Primeiro case da Vexon.
              </p>
            </div>
          </motion.article>

          {/* Card 2 - Placeholder */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="rounded-sm border overflow-hidden opacity-60"
            style={{ background: "hsl(220 40% 5%)", borderColor: "rgba(0,255,213,0.15)", borderStyle: "dashed" }}
          >
            <div
              className="h-[200px] flex items-center justify-center"
              style={{ background: "hsl(220 33% 8%)" }}
            >
              <span className="text-primary text-4xl font-display">+</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-foreground mb-1" style={{ fontSize: "0.82rem" }}>
                SEU PROJETO AQUI
              </h3>
              <p className="font-body text-muted text-sm">
                Seu negócio pode ser o próximo a ser visto de cima.
              </p>
            </div>
          </motion.article>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="border rounded-sm p-8 text-center"
          style={{ borderColor: "rgba(0,255,213,0.25)", borderStyle: "dashed" }}
        >
          <p className="font-body text-muted mb-5">
            Portfólio em crescimento. Seja um dos nossos cases de destaque.
          </p>
          <a
            href="https://wa.me/5515996918236"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs font-bold bg-primary text-primary-foreground px-8 py-3 rounded-sm tracking-wider hover:brightness-110 transition-all inline-block"
          >
            QUERO SER UM CASE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
