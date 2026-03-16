const Footer = () => {
  return (
    <footer className="bg-background border-t py-12 px-4 text-center" style={{ borderColor: "rgba(0,255,213,0.15)" }}>
      <span className="font-display font-bold text-primary block mb-3" style={{ fontSize: "1.2rem" }}>
        VEXON
      </span>
      <p className="font-body text-muted text-sm mb-4">
        Imagens aéreas valorizando seu negócio · Itapetininga, SP
      </p>
      <div className="flex items-center justify-center gap-6 mb-6">
        <a
          href="https://instagram.com/vexon.itape"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-muted text-sm hover:text-primary transition-colors"
        >
          @vexon.itape
        </a>
        <a
          href="https://wa.me/5515996918236"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-muted text-sm hover:text-primary transition-colors"
        >
          (15) 99691-8236
        </a>
      </div>
      <p className="font-body text-muted" style={{ fontSize: "0.72rem" }}>
        © 2026 Vexon Drones · Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
