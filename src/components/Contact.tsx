import { motion } from "framer-motion";

const areas = ["Itapetininga", "Tatuí", "Cesário Lange", "Boituva", "Sorocaba", "Região"];

const Contact = () => {
  return (
    <section id="contato" className="relative py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-primary block mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.15em" }}>
            // CONTATO
          </span>
          <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-3">
            Vamos decolar juntos?
          </h2>
          <p className="font-body text-muted mb-12" style={{ fontSize: "0.95rem" }}>
            Escolha o pacote ideal e fale direto comigo no WhatsApp. Resposta em minutos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h3 className="font-display font-bold text-foreground text-sm tracking-wider mb-6">
              FALE COM A GENTE
            </h3>

            <div className="space-y-4 mb-8">
              <div className="border border-border rounded-sm p-5 flex items-center gap-4 bg-secondary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <div>
                  <span className="font-body text-foreground text-sm block">(15) 99691-8236</span>
                  <span className="font-body text-muted text-xs">WhatsApp · resposta em minutos</span>
                </div>
              </div>

              <a
                href="https://instagram.com/vexon.itape"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border rounded-sm p-5 flex items-center gap-4 hover:border-primary/30 transition-colors bg-secondary"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary flex-shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                <div>
                  <span className="font-body text-foreground text-sm block">@vexon.itape</span>
                  <span className="font-body text-muted text-xs">Veja nossos trabalhos</span>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/5515996918236"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs font-bold bg-primary text-primary-foreground px-8 py-4 rounded-sm tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-3 w-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CHAMAR NO WHATSAPP
            </a>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="border border-border rounded-sm p-6 bg-secondary">
              <h4 className="font-display text-primary font-bold mb-4" style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}>
                ÁREAS DE ATENDIMENTO
              </h4>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="font-body text-xs text-muted border border-primary/20 rounded-sm px-3 py-1.5"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-sm p-6 bg-secondary">
              <h4 className="font-display text-primary font-bold mb-4" style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}>
                COMO FUNCIONA
              </h4>
              <div className="space-y-4">
                {[
                  { step: "01", text: "Fale comigo pelo WhatsApp e me conte sobre seu projeto" },
                  { step: "02", text: "Escolhemos juntos o pacote ideal para sua necessidade" },
                  { step: "03", text: "Agendamos o voo e você recebe o material editado" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="font-display text-primary text-xs font-bold mt-0.5">{s.step}</span>
                    <p className="font-body text-muted text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
